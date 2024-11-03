import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonById } from '../services/getPokemonById';
import { getPokemonReducer } from '../store/store';

const CounterPokemon = () => {
  const dispatch = useDispatch();
  const { counter, pokemon } = useSelector(getPokemonReducer);

  useEffect(() => {
    dispatch(getPokemonById(counter));
  }, [counter, dispatch]);

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
