//desafio sequência fibonacci
// criação da função isFibonacci verifica se o número pertence a sequência.
const isFibonacci  = (num) => {
    //verifica se o número é negativo, pois na sequencia nao temos numeros negativos.
    if (num < 0) return false;
    //criação das variáveis para a lógica da sequência
    let a = 0;
    let b = 1;
    let c = 0;
   //Utilizo o loop while para continuar enquanto c for menor que o número fornecido.
    while (c < num) {
        c = a + b; // Calcula o próximo número da sequência.
        a = b; 
        b = c;
    };
    // Retorna true se c é igual ao número fornecido e false se for diferente.
    return c === num;
};
// Importa a biblioteca readline, utilizada para entrada e saída de dados do usuário.
const readline = require('readline');

// Cria uma interface para leitura de entrada e escrita de saída.
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('digite um número: ', (input) => {
    // Converte o input do usuário para inteiro.
    const num = parseInt(input);
    //verifica se o input é um numéro válido
    if (isNaN(num)){
        console.log('digite um número válido')
    } else { 
        // Verifica se o número está na sequência ou não.
        if (isFibonacci(num)){
            console.log(`${num} está na sequência de fibonnaci`);
        } else {
            console.log(`${num} não está na sequência de fibonnaci`)
        }
    }
    
    rl.close();

});

