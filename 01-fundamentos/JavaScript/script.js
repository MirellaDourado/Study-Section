let palavra = "burro"
let novaPalavra = ""

for(let index = 0; index < palavra.length; index = index + 1){
    if(palavra[index] == "e" || palavra[index] == "i" || palavra[index] == "o" || palavra[index] == "u"){
        novaPalavra = novaPalavra + "a"
    } else {
        novaPalavra = novaPalavra + palavra[index]
    }
}

console.log (novaPalavra)