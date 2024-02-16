import { getCSS, tickConfig, criarGrafico, incluirTexto, incluirLinha } from "./common.js"

const motivos = async () => {

    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/razoes-globais.json'
    const res = await fetch(url)
    const dados = await res.json()
    const motivos = Object.keys(dados);
    const quantidades = Object.values(dados);

    const data = [
        {
            type: 'bar',
            x: Array(motivos.length).fill(22),
            y: motivos,
            text: quantidades.map(q => `${q}%  `),
            textfont: { color: getCSS('--background-color'), size: 16 },
            orientation: 'h',
            marker: { color: getCSS('--primary-color') }
        },
        {
            type: 'bar',
            x: quantidades,
            y: motivos,
            orientation: 'h',
            marker: { color: getCSS('--secondary-color') }
        }
    ];

    const layout = {
        height: 800,
        title: {
            text: 'Principais motivos de usar uma rede social',
            x: 0,
            font: {
                family: getCSS('--font'),
                color: getCSS('--primary-color'),
                size: 30
            }
        },
        barmode: 'overlay',
        showlegend: false,
        plot_bgcolor: getCSS('--background-color'),
        paper_bgcolor: getCSS('--background-color'),
        yaxis: {
            categoryorder: 'total ascending',
            tickvals: motivos,
            ticktext: motivos,
            ticklabelposition: 'inside',
            tickfont: tickConfig,
        },
        xaxis: {
            visible: false,
            tickfont: tickConfig,
        },

    };

    criarGrafico(data, layout)
    const texto = `Aproximadamente <span>45%</span> das pessoas utilizam as redes sociais para contato ou preencher tempo livre ou buscar notícias sobre o que está acontecendo no mundo.`

    incluirTexto(texto)
    incluirLinha()
}

export {motivos}