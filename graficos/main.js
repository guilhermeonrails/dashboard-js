const scripts = [
    "graficos/common.js",
    "graficos/maisUsuarios.js" ,
    "graficos/usuarios.js" ,
    "graficos/razoesGlobais.js" ,
    "graficos/redesFavoritas.js"
]

function carrgarScript(nomeDoScript) {
    return new Promise(( resolve) => {
        const script = document.createElement('script')
        script.src = nomeDoScript
        script.type = 'module'; 
        script.onload = resolve
        document.head.appendChild(script)
    })
}

async function main() {
    for (const script of scripts) {
        console.log(script);
        await carrgarScript(script)
    }
}

main()