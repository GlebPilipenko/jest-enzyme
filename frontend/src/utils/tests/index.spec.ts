import {getLetterMatchCount} from '../';

describe(`getLetterMatchCount`, () => {
  const secretWord = `party`;

  test(`returns correct count when there are no matching letters`, () => {
    const letterMatchCount = getLetterMatchCount(`bonus`, secretWord);
    expect(letterMatchCount).toHaveLength(0);
  });

  test(`returns correct count when there are three matching letters`, () => {
    const letterMatchCount = getLetterMatchCount(`train`, secretWord);
    expect(letterMatchCount).toHaveLength(3);
  });

  test(`returns correct count when there are duplicate letters in the guess`, () => {
    const letterMatchCount = getLetterMatchCount(`papa`, secretWord);
    expect(letterMatchCount).toHaveLength(2);
  });
});