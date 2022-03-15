/*
- Clicar no pokemon a direita, o cartao a esquerda é escondido e é aberto um novo cartão

- listagem
- cartao pokemon
*/

const listaSelecaoPokemons = document.querySelectorAll(".pokemon");
const pokemonsCard = document.querySelectorAll(".cartao-pokemon")
listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemon = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemon)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const navegacaoAtiva = document.querySelector('.ativo')
        navegacaoAtiva .classList.remove('ativo')

        const navegacaoParaAtivar = document.getElementById(idPokemonSelecionado)
        navegacaoParaAtivar.classList.add('ativo')
    })
})

