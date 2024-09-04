//Problema: Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  

//Restrições: Você pode ligar e desligar os interruptores quantas vezes quiser mas só pode ir até as outras salas duas vezes
//Objetivo: Descobrir qual interruptor controla qual lâmpada

// Solução:
//1. Ligo o primeiro interruptur durante 10 minutos e o desligo. Ligo o segundo interruptor e vou até a primeira sala
//2. Se a primeira lâmpada estiver desligada e fria, então o terceiro interruptor corresponde à primeira sala. Se estiver desligada e quente, então o primeiro interruptor corresponde à primeira sala. Se estiver acesa, então o segundo interruptor corresponde à primeira sala;

// Caso desligada e fria: Sabendo que o terceiro interruptor corresponde à primeira sala, vou até a segunda sala. Se a lâmpada estiver acesa, então o segundo interruptor corresponde à segunda sala e o primeiro à terceira sala. Se a lâmpada estiver desligada, o segundo interruptor corresponde à terceira sala e o primeiro à segunda sala;

// Caso desligada e quente: Sabendo que o primeiro interruptor corresponde à primeira sala, vou até a segunda sala. Se a lâmpada estiver acesa, então o segundo interruptor corresponde à segunda sala e o terceiro à terceira sala. Se a lâmpada estiver desligada, o segundo interruptor corresponde à terceira sala e o terceiro à segunda sala;

// Caso ligada: Sabendo que o segundo interruptor corresponde à primeira sala, vou até os interruptores, desligo o segundo e ligo o primeiro novamente e vou até a segunda sala. Se a lâmpada estiver acesa, então o primeiro interruptor corresponde à segunda sala e o terceiro à terceira sala. Se a lâmpada estiver desligada, o primeiro interruptor corresponde à terceira sala e o terceiro à segunda sala;