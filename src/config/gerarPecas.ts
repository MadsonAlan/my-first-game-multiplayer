export function GerarPecas(){
  var sorteados: string[] = [];
  var valorMaximo = 28;  
    for (let index = 1; index <= valorMaximo; index++) {  
      var sugestao = `${Math.floor(Math.random() * 6)}:${Math.floor(Math.random() * 6)}` // Escolher um numero ao acaso
        while (sorteados.indexOf(sugestao) >= 0) {  // Enquanto o numero já existir, escolher outro
          sugestao = `${Math.floor(Math.random() * 6)}:${Math.floor(Math.random() * 6)}`
        }
      sorteados.push(sugestao); // adicionar este numero à array de numeros sorteados para futura referência  
    }
  return sorteados; // devolver o numero único

}


