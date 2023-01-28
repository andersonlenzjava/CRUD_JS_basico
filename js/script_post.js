// get list 

async function criarSalgadinhoMassa (tipoMassa, precoVenda, dataValidade, peso) {
    const conexao = await fetch('http://localhost:8080/ingrediente/salgadinhos/massa', {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        tipoMassa: tipoMassa,
        precoVenda: precoVenda,
        dataValidade: dataValidade,
        peso: peso
    })  
});
    if (!conexao.ok) {
        throw new Error("Não foi possivel cadastrar o tipo de massa");
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}   
    
const conexaoResposta = criarSalgadinhoMassa("integral com calabresa", "6", "10/10/2023", "100");

console.log(conexaoResposta)