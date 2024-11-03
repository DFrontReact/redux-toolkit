import { setPokemon } from "../store/counter-pokemon-reducer/actions";

export const getPokemonById = (id) => (dispatch) => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(resp => resp.json())
  .then(data=> {
    const result = {
      name: data?.name,
      img: data?.sprites?.front_default  ?? data?.sprites?.back_default
    };

    dispatch(setPokemon(result))
  }) 