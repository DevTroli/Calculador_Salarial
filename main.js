//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.


function gets() {
  return [5500, 250];
}

function print(msg) {
  console.log(msg);
}


//Função útil para o calculo do imposto (baseado nas aliquotas).
function calcularImposto(salario) {
  let aliquota;
  if (salario >= 0 && salario <= 1100) {
    aliquota = 0.05;
  } else if (salario > 1101 && salario < 2500) {
    aliquota = 0.1
  } else {
    aliquota = 0.15
  }
  return aliquota * salario;
}

//Lê os valores de Entrada:
const valorSalario = parseFloat(gets()[0]);
const valorBeneficios = parseFloat(gets()[1]);

//Calcula o imposto através da função "calcularImposto":
const valorImposto = calcularImposto(valorSalario);
//Calcula e imprime a Saída (com 2 casas decimais):
const saida = valorSalario - valorImposto + valorBeneficios;
print(saida.toFixed(2));