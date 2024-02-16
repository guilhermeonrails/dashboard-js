import { getCSS, criarGrafico, incluirTexto, incluirLinha, tickConfig } from "./common.js";

const redesFavoritas = async () => {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados);
    const valores = Object.values(dados);

    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: "label+percent",
        }
    ]

    var layout = {
        plot_bgcolor: getCSS('--background-color'),
        paper_bgcolor: getCSS('--background-color'),
        height: 700,
        title: {
            text: 'Redes que os usuários mais gostam',
            x: 0,
            font: {
                family: getCSS('--font'),
                color: getCSS('--primary-color'),
                size: 30
            }
        },
        legend: {
            font: {
                color: getCSS('--primary-color'),
                size: 16,
            }
        }

    }
    criarGrafico(data, layout)
    incluirTexto(`Embora o <span>Instagram</span> ocupe a quarta posição em termos de número total de usuários entre as redes sociais, destaca-se como a <span>preferida pelos usuários</span>. Supera até mesmo o <span>Facebook</span>, a plataforma com mais usuários, sendo a terceira opção mais apreciada pelos usuários. <br>Essa preferência evidencia a forte conexão e apreço que as pessoas têm pelo Instagram em comparação com outras redes sociais`)
}

export { redesFavoritas }