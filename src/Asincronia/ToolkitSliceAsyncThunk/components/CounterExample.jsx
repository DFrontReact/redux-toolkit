import { useSelector, useDispatch } from 'react-redux';
import { getPokemonStore } from '../store/store';
import { decreaseCounter, increaseCounter } from '../store/pokemon-slice';

const CounterExample = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector(getPokemonStore);
  const increaseHandler = () => dispatch(increaseCounter());
  const decreaseHandler = () => counter > 1 && dispatch(decreaseCounter());

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '50%',
        }}
      >
        <button onClick={decreaseHandler}>-</button>
        <p>{counter}</p>
        <button onClick={increaseHandler}>+</button>
      </div>
    </div>
  );
};

export default CounterExample;
