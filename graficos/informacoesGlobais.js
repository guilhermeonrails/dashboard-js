import { incluirTexto } from "./common.js"

const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobaisRedesSociais() {
    const res = await fetch(url)
    const dados = await res.json()
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9).toLocaleString('pt-BR')
    const pessoasNoMundo = dados.total_pessoas_mundo / 1e9
    // const pessoasNaoConectadas = pessoasNoMundo - pessoasConectadas

    const texto = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> delas estão em alguma rede social e passam em média <span>${horas} horas e ${minutos} minutos</span> conectadas diariamente?` + `<br>Isso significa que <span>63%</span> da população mundial está conectada em uma rede. <br>Este relatório tem como objetivo analisar as principais redes sociais e seu impacto no comportamento humano.`
    

    const container = document.getElementById('graficos-container');
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = texto;
    container.appendChild(paragrafo);
}

export {visualizarInformacoesGlobaisRedesSociais}
