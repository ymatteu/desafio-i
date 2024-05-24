let texto = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
let letrasMaiusculasPresentes = 0;

for (let i = 0; i < texto.length; i++) {
    if (texto[i] >= 'A' && texto[i] <= 'Z') {
        letrasMaiusculasPresentes++;
    }
}

alert("O número de letras maiúsculas na string é: " + letrasMaiusculasPresentes);
