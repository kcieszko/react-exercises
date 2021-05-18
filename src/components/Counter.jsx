import { useState } from 'react';

import './Counter.css';

const Counter = ({ start }) => {
  const [counter, setCounter] = useState(start);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleChange = (event) => {
    setInputValue(+event.target.value);
  };

  const handleClick = () => {
    setCounter(inputValue);
  };

  const handleReset = () => {
    setCounter(start);
  };

  return (
    <div className='container' start={start}>
      <p>
        Counter component <strong>{counter}</strong>
      </p>
      <div>
        <button id='incr-btn' onClick={handleIncrement}>
          +
        </button>
        <button id='decr-btn' onClick={handleDecrement}>
          -
        </button>
      </div>
      <label>
        Set initial value
        <input
          type='number'
          value={inputValue}
          name={inputValue}
          onChange={handleChange}
        />
        <button id='change-btn' onClick={handleClick}>
          Change initial value
        </button>
        <button id='reset-btn' onClick={handleReset}>
          Reset
        </button>
      </label>
    </div>
  );
};

Counter.defaultProps = {
  start: 0,
};

export default Counter;
