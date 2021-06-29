import {FC} from 'react';
import {GuessedWordsPropsType, WordPropsType} from 'src/types';

export const GuessedWords: FC<GuessedWordsPropsType> = ({guessedWords}) => {
  let contents: any;
  const text = `Try to guess the secret word!`;

  if (guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">{text}</span>
    );
  } else {
    const guessedWordsRows = guessedWords.map((word: WordPropsType, index: number) => (
        <tr key={index} data-test='guessed-word'>
          <td>{word.guessedWord}</td>
          <td>{word.letterMatchCount}</td>
        </tr>
      )
    );

    contents = (
      <div data-test='guessed-words'>
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {guessedWordsRows}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div data-test="component-guessed-words">
      {contents}
    </div>
  );
};
