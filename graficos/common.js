const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(`${variavel}`)
}

const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')
}

function criarGrafico(data, layout) {
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    var config = { responsive: true, displayModeBar: false, };
    Plotly.newPlot(grafico, data, layout, config);
}

function incluirTexto(texto) {
    const container = document.getElementById('graficos-container');
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = texto;
    container.appendChild(paragrafo);
}

function incluirLinha() {
    const container = document.getElementById('graficos-container');
    const linhaCorte = document.createElement('hr');
    linhaCorte.classList.add('linha');
    container.appendChild(linhaCorte);
}

export { getCSS, tickConfig, criarGrafico, incluirTexto, incluirLinha };