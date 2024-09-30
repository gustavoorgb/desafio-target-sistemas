//programa para inverter strings
function inverterString(str) {
    //cria uma variavel com uma string vazia
    let strInvertida = '';
    // itera sobre a string de forma contraria e adiciona as letras para a string vazia
    for (let i = str.length - 1; i >= 0; i--) {
         strInvertida += str[i];
    };
    return strInvertida;
 }
 
 const string1 = 'banana';
 const string2 = 'fogo';
 const string3 = 'melancia';
 
 const textoInvertido1 = inverterString(string1); 
 const textoInvertido2 = inverterString(string2);
 const textoInvertido3 = inverterString(string3);
 
 console.log(textoInvertido1);  // "ananab"
 console.log(textoInvertido2);  // "ogof"
 console.log(textoInvertido3);  // "aicnalem"