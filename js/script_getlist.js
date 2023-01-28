// get list 

async function listarSalgadinhoMassa () {
    const conexao = await fetch('http://localhost:8080/ingrediente/salgadinhos/massa', {
    method: 'GET'
})  
    const conexaoConvertida = await conexao.json()

    const listContent = await conexaoConvertida.content
    console.log(conexaoConvertida);
    console.log(listContent);
    return listContent
}   
    
async function imprimeSalgMassa () {
    try {
        const valores = await listarSalgadinhoMassa()
        
        valores.forEach(element => {
            console.log(element.tipoMassa)
            console.log(element.dataValidade)
            console.log(element.peso)
            })
    } catch (e) {
        console.log(e)
    }
}
imprimeSalgMassa()