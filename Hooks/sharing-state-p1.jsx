
import { useState, useEffect } from 'react';

let listeners = [];
let state = { counter: 0 };

const setState = (newState) => {
  state = { ...state, ...newState };
  listeners.forEach((listener) => {
    listener(state);
  });
};

const useCustom = () => {
  const newListener = useState()[1];
  useEffect(() => {
    listeners.push(newListener);
  }, []);
  return [state, setState];
};

export default useCustom;


/*---------*/

import React from 'react';
import useCustom from './customHook';

const Counter = () => {
  const [globalState, setGlobalState] = useCustom();

  const add1Global = () => {
    const newCounterValue = globalState.counter + 1;
    setGlobalState({ counter: newCounterValue });
  };

  return (
    <div>
      <p>
        counter:
        {globalState.counter}
      </p>
      <button type="button" onClick={add1Global}>
        +1 to global
      </button>
    </div>
  );
};

export default Counter;


/*----------------PS------------------------*/
const useCustom = () => {
  const newListener = useState()[1];
  useEffect(() => {
    // Called just after component mount
    listeners.push(newListener);
    return () => {
      // Called just before the component unmount
      listeners = listeners.filter(listener => listener !== newListener);
    };
  }, []);
  return [state, setState];
};