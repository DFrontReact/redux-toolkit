const CounterPokemon = () => {
  const pokemon = undefined;

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
