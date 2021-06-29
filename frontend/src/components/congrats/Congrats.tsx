import {FC} from 'react';
import {CongratsPropsType} from './types';

export const Congrats: FC<CongratsPropsType> = ({success}) => {
    if (success) {
      return (
        <div data-test='components-congrats'>
         <span data-test="congrats-message">
           Congratulations! You guessed the world!
         </span>
        </div>
      );
    }

    return <div data-test='components-congrats' />
};
