import {FC} from 'react';
import {Input} from '../input';
import {PropsType} from './types';
import {Congrats} from '../congrats';
import {GuessedWords} from '../guessedWords';

export const Jotto: FC<PropsType> = ({
  success = false,
  guessedWords = [],
  }) => {
  return (
    <div
      data-test='component-jotto'
      className='container'
    >
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  )
};
