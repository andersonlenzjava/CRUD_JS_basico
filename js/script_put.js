// put 

async function atualizarSalgadinhoMassa (tipoMassa, precoVenda, dataValidade, peso) {
    const conexao = await fetch('http://localhost:8080/ingrediente/salgadinhos/massa/8', {
    method: "PUT",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        tipoMassa: tipoMassa,
        precoVenda: precoVenda,
        dataValidade: dataValidade,
        peso: peso
    })  
});
    if (!conexao.ok) {
        throw new Error("Não foi possivel atualizar o pedido");
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}   
    
const conexaoResposta = atualizarSalgadinhoMassa("integral com calabresa2", "7", "10/10/2023", "90");

console.log(conexaoResposta)