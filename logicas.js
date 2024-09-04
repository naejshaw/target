//4-a)
let impar = []
for (let i = 1; i < 10; i+=2) {
    impar.push(i); 
}
console.log('Números ímpares',impar);

//4-b)
let potencia2 = []
for (let i = 1; i <= 7; i++) {
    potencia2.push(2**i); 
}
console.log('Potências de 2',potencia2);
//4-c)
let quadrados = []
for (let i = 0; i <= 7; i++) {
    quadrados.push(i**2); 
}
console.log('Quadrados perfeitos',quadrados);
//4-d)
let multiplicacaoQuadrados = []
for (let i = 1; i <= 5; i++) {
    multiplicacaoQuadrados.push((2*i)**2); 
}
console.log('Multiplicação de 2*i ao quadrado', multiplicacaoQuadrados);
//4-e)
//TODO: Adicionar a sequência de fibonacci ao array
let fibonacci = [1, 1]
for (let i = 2; i < 10; i++){
    fibonacci.push(fibonacci[i-1] + fibonacci[i-2])
}
console.log('Sequência de Fibonacci', fibonacci);
//4-f)
//Descobrir o padrão da sequência 2, 10, 12, 16, 17, 18, 19
//Não consegui achar uma lógica matemática neste item. O único padrão que, depois de uma breve análise, foi possível obter é o fato de os números da sequência crescente começarem com a letra "D". Assim, o próximo termo seria 200, seguindo tal lógica
