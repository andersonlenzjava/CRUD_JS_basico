
// get id 

async function listarSalgadinhoMassa () {
    const conexao = await fetch('http://localhost:8080/ingrediente/salgadinhos/massa/1', {
    method: 'GET'
})  
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida
}   
    
async function imprimeSalgMassa () {
    try {
        const valores = await listarSalgadinhoMassa()
        console.log(valores.dataValidade)
        console.log(valores.peso)
    } catch (e) {
        console.log(e);
    }
}

imprimeSalgMassa();


   