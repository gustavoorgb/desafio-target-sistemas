//programa que calcula media do faturamento mensal, valor minimo do faturamento no mes e valor maximo do faturamento no mes
//importação da biblioteca fs para ler arquivos
const fs = require('fs');
//leitura do arquivo json
const dados = fs.readFileSync('dados.json', 'utf-8');
// conversao para objeto javascript
const faturamento = JSON.parse(dados);
//cria um novo array somente com a chave valor iterando sobre o objeto
const valores = faturamento.map(item => item.valor);
//utiliza a biblioteca Math e filter para resgatar o menor valor utilizando o operador de espalhamento(...) para passar todos os elementos do array como argumentos para a funçao
const menorFaturamento = Math.min(...valores.filter(valor => valor > 0));

const maiorFaturamento = Math.max(...valores.filter(valor => valor > 0));

let somaTotal = 0
let contagemDias = 0
//loop para calcular a media mensal de faturamento
for(let i = 0; i < faturamento.length; i++){
    const valor = faturamento[i].valor;
    
    if(valor > 0) {
        somaTotal += valor
        contagemDias++;
    }
}

const mediaFaturamento = contagemDias > 0 ? somaTotal / contagemDias : 0;

let diasAcimaMedia = 0
//loop para iterar sobre o objeto faturamento e pegar os dias acima da media mensal de faturamento
for(let i = 0; i < faturamento.length; i++){
    valor = faturamento[i].valor;

    if(valor > mediaFaturamento){
        diasAcimaMedia++;
    };
};

console.log(menorFaturamento);

console.log(maiorFaturamento);

console.log(diasAcimaMedia);