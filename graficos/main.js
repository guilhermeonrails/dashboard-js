(function () {
    const scripts = [
        "common.js",
        "maisUsuarios.js",
        "usuarios.js",
        "razoesGlobais.js",
        "redesFavoritas.js"
    ];

    scripts.forEach(script => {
        const scriptElement = document.createElement('script');
        scriptElement.src = `graficos/${script}`;
        scriptElement.type = 'module';
        document.head.appendChild(scriptElement);
    });
})()