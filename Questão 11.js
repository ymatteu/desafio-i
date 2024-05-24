function calcularIdade(anoNascimento) {
    let anoAtual = new Date().getFullYear();
    let anoNascimentoInt = parseInt(anoNascimento.slice(0, 4));

    return anoAtual - anoNascimentoInt;
}

let anoNascimento = "2005-08-23";
let idade = calcularIdade(anoNascimento);

alert("A idade da pessoa, Matheus Abreu é: " + idade + " anos.");
