const nome = "LUIZ GONZAGA";
const frase = "Sempre em busca do sucesso!";
let i = 0;
let j = 0

function escrevernome() {
    if (i < nome.length) {
        document.getElementById("nome").innerHTML += nome.charAt(i);
        i++;
        setTimeout(escrevernome, 50);
    }
}

function escreverfrase() {
    if (j < frase.length) {
        document.getElementById("frase").innerHTML += frase.charAt(j);
        j++;
        setTimeout(escreverfrase, 100);
    }   
}

escrevernome()
escreverfrase()