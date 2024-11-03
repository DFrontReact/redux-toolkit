const CounterExample = () => {
  const increaseHandler = () => console.log("increse");
  const decreaseHandler = () => console.log("decrese");

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
