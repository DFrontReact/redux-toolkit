import { useSelector, useDispatch } from 'react-redux';
import { decreaseCounter, increaseCounter } from '../store/counter-pokemon-reducer/actions';
import { getPokemonReducer } from '../store/store';

const CounterExample = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector(getPokemonReducer);
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
