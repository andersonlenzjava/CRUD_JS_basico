
// get id 

async function deletarSalgadinhoMassa () {
    const conexao = await fetch('http://localhost:8080/ingrediente/salgadinhos/massa/6', {
    method: 'DELETE'
})  
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida
}   
    
async function deletaSalgMassa () {
    try {
        deletarSalgadinhoMassa()
    } catch (e) {
        console.log(e);
    }
}

deletaSalgMassa();


   