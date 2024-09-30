//programa que verifica a existencia da letra a 
const verifica = (string) => {
    //conversão da string em um array
    const arr = string.split('');
    //utilizo map para iterar pelo array e filter para filtrar a letra a
    const arrFiltrado = arr.map(letra => letra.toLowerCase()).filter(letter => letter === 'a');
    //conta as letras "a" da string
    const count = arrFiltrado.length;
    //verifica se existe a letra a na string
    const exists = count > 0;

    if(!exists){
        console.log('Sua string não contem a letra A');
    } else{
        console.log(`sua string contem a letra A e ela aparece ${count} vezes!`)
    }
};

const string1 = 'banana';

const string2 = 'melancia';

const string3 = 'fogo';

const string4 = 'lúpulo';

const string5 = 'amigo';

verifica(string1);

verifica(string2);

verifica(string3);

verifica(string4);

verifica(string5);

