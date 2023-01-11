import React, { useReducer } from 'react';

interface currentstate {
  value: string;
}

interface fetching {
  type: 'fetching';
  fetching: string;
}

interface ideal {
  type: 'ideal';
  ideal: string;
}
interface succes {
  type: 'succes';
  succes: string;
}

interface error {
  type: 'error';
  error: string;
}

type Action = fetching | ideal | succes | error;
const initState = { value: '' };
const Reducer = (state: currentstate, action: Action) => {
  switch (action.type) {
    case 'fetching':
      return { value: action.fetching };
    case 'ideal':
      return { value: action.ideal };
    case 'succes':
      return { value: action.succes };
    case 'error':
      return { value: action.error };
  }
};

export const Update = () => {
  const [state, dispatch] = useReducer(Reducer, initState);
  return (
    <div>
      <h1>{state.value}</h1>
      <button onClick={() => dispatch({ type: 'fetching', fetching: 'fetching' })}>fetching</button>
      <button onClick={() => dispatch({ type: 'ideal', ideal: 'ideal' })}>ideal</button>
      <button onClick={() => dispatch({ type: 'succes', succes: 'succes' })}>succes</button>
      <button onClick={() => dispatch({ type: 'error', error: 'error' })}>error</button>
    </div>
  );
};
