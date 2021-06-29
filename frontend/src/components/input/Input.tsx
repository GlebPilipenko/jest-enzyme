import {InputPropsType} from './types';
import {MouseEvent, FC, useState, ChangeEvent} from 'react';

export const Input: FC<InputPropsType> = ({success}) => {
  const [value, setValue] = useState('');

  const handler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setValue(``);
  };

  if (success) {
    return <div data-test='component-input' />
  }

  return (
    <div data-test='component-input'>
      <form className='form-inline'>
        <input
          type='text'
          value={value}
          onChange={handler}
          data-test='input-box'
          className='mb-2 mx-sm-3'
          placeholder='enter guess'
        />
        <button
          onClick={onClick}
          data-test='submit-button'
          className='btn btn-primary mb-2'
        >
          Submit
        </button>
      </form>
    </div>
  );
};
