import { useState } from "react";
import { exchangeAPI } from "../api";


export const getConvert = async (from: any, to: any, amount: any) =>{
    console.log('CHEGOU AQUI: ', from)
    
    const response = exchangeAPI.get(`convert?from=${from}&to=${to}&amount=${amount}`)

    response.then(function(resolve: any) {
        return (resolve.data.result)
    })
    return response
}

export const getSymbols = async () =>{
    
    const response = exchangeAPI.get(`symbols`)

    return response.then(function(resolve: any) {
        console.log('-------- GET SYMBOLS ---------')
        //CONVERTE DE OBJETO PARA ARRAY
        const symbolsArray = Object.keys(resolve.data.symbols)
        //RETORNA O ARRAY DE CADA SYMBOLO ACEITO PRA SER EXIBIDO PELO PICKER NA HOME
        return symbolsArray
    })
}