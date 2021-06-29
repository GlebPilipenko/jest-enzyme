import {useEffect, useState} from 'react';
import './Counter.css';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState(``);

  const plus = () => setCount(count + 1);
  const minus = () => setCount(count - 1);
  const isDisabled = () => count === 0;
  const getCurrentValue = () => errorMessage.length > 0 ? errorMessage : count;

  useEffect(() => {
    if (count === 0) {
      return setErrorMessage(`+_+ Error +_+`);
    }

    setErrorMessage(``);
  }, [count])

  return (
    <div
      className='counter'
      data-test='component-counter'
    >
      <h1
        data-test='counter-display'>
        The counter is currently&nbsp;
        <span data-test='count'>{getCurrentValue()}</span>
      </h1>
      <button
        onClick={plus}
        data-test='increment-button'
      >
        Increment counter
      </button>
      <button
        onClick={minus}
        disabled={isDisabled()}
        data-test='decrement-button'
      >
        Decrement counter
      </button>
    </div>
  );
};
