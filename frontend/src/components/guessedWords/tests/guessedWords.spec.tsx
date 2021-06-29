import {Component} from 'react';
import {findByDataTestAttr} from 'src/test';
import {GuessedWords} from 'src/components';
import {shallow, ShallowWrapper} from 'enzyme';
import {GuessedWordsPropsType} from 'src/types';

const defaultProps = {
  guessedWords: [
    {guessedWord: 'train', letterMatchCount: 3}
  ],
};

const setup = (props: GuessedWordsPropsType = defaultProps) => {
  const setupProps = {...defaultProps, ...props};

  return shallow(<GuessedWords {...setupProps} />);
};

describe(`if there are no words guessed`, () => {
  let wrapper: ShallowWrapper<{}, Component['state'], Component>;
  beforeEach(() => {
    wrapper = setup({guessedWords: []});
  });

  test(`components <GuessedWords /> render without error`, () => {
    const component = findByDataTestAttr(wrapper, `component-guessed-words`);
    expect(component).toHaveLength(1);
  });

  test(`renders instruction to guess a word`, () => {
    const instructions = findByDataTestAttr(wrapper, `guess-instructions`);
    expect(instructions.text()).not.toHaveLength(0);
  });
});

describe(`if there are words guessed`, () => {
  const guessedWords = [
    {guessedWord: `train`, letterMatchCount: 3},
    {guessedWord: `agile`, letterMatchCount: 1},
    {guessedWord: `party`, letterMatchCount: 5},
  ];
  let wrapper: ShallowWrapper<{}, Component['state'], Component>;

  beforeEach(() => {
    wrapper = setup({guessedWords})
  });

  test(`renders without error`, () => {
    const guessedWordsDiv = findByDataTestAttr(wrapper, `component-guessed-words`);
    expect(guessedWordsDiv).toHaveLength(1);
  });

  test(`renders (guessed words) section without error`, () => {
    const guessedWordsNode = findByDataTestAttr(wrapper, `guessed-words`);
    expect(guessedWordsNode).toHaveLength(1);
  });

  test(`should be correct number of guessed words`, () => {
    const guessedWordNodes = findByDataTestAttr(wrapper, `guessed-word`);
    expect(guessedWordNodes).toHaveLength(guessedWords.length);
  });
});
