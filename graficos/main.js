import { visualizarInformacoesGlobaisRedesSociais } from "./informacoesGlobais.js";
import { redesComMaisUsuarios } from "./quantidadeUsuarios.js";
import { motivos } from "./motivos.js";
import { redesFavoritas } from "./redesFavoritas.js";

(function main() {
    visualizarInformacoesGlobaisRedesSociais()
    redesComMaisUsuarios()
    motivos()
    redesFavoritas()
}) ()