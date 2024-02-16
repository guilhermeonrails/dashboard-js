import { criarGrafico, getCSS, incluirLinha, tickConfig } from './common.js';

const redesComMaisUsuarios = async () => {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomesRedesSociais = Object.keys(dados);
    const numerosSeguidores = Object.values(dados);

    const data = [
        {
            x: nomesRedesSociais,
            y: numerosSeguidores,
            text: numerosSeguidores,
            type: 'bar',
            marker: {
                color: getComputedStyle(document.body).getPropertyValue('--primary-color')
            },
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--background-color'),
        paper_bgcolor: getCSS('--background-color'),
        title: {
            text: 'Redes sociais com mais usuários',
            x: 0,
            font: {
                family: getCSS('--font'),
                color: getCSS('--primary-color'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Nome das redes',
                font: {
                    family: getCSS('--font'),
                    color: getCSS('--primary-color'),
                    size: 20
                }
            },
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Bilhões de usuários ativos',
                font: {
                    family: getCSS('--font'),
                    color: getCSS('--primary-color'),
                    size: 20
                }
            },
        },
    };

    criarGrafico(data, layout);
    incluirLinha();
};

export { redesComMaisUsuarios };