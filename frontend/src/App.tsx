import React from 'react';
import {WordPropsType} from './types';
import {Jotto} from './components';

export const App = () => {
  const success = false;
  const guessedWords: WordPropsType[] = [];

  return (
    <div data-test='container-app'>
      {/*<Counter />*/}
      {/*<Congrats success={success} />*/}
      {/*<Input success={success} />*/}
      {/*<GuessedWords guessedWords={guessedWords} />*/}
      <Jotto
        success={success}
        guessedWords={guessedWords}
      />
    </div>
  );
};
