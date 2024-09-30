// Valores de faturamento por estado
const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Valor total do faturamento
const valorTotal = faturamentoEstados.SP + faturamentoEstados.RJ + faturamentoEstados.MG + faturamentoEstados.ES + faturamentoEstados.Outros;

console.log('Valor total mensal da distribuidora: R$', valorTotal.toFixed(2));

// Exibe o percentual de cada estado
for (let estado in faturamentoEstados) {
    const percentual = (faturamentoEstados[estado] / valorTotal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}