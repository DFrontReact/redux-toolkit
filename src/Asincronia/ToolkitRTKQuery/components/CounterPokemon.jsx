import { useSelector } from 'react-redux';
import { useGetPokemonByIdQuery } from '../store/api-slice';
import { getPokemonStore } from '../store/store';

const CounterPokemon = () => {
  const { counter } = useSelector(getPokemonStore);
  const { data:pokemon } = useGetPokemonByIdQuery(counter);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      Te ha tocado: {pokemon?.name}
      <img width="200" src={pokemon?.img ? pokemon.img : ""} />
    </div>
  );
};

export default CounterPokemon;
