import { FavoritesView } from "./Favorites.js";

new FavoritesView("#app")

const tabela = document.getElementById("minha-tabela");
const imagem = document.getElementById("imagem-tabela");

tabela.addEventListener("DOMSubtreeModified", verificarTabela);

