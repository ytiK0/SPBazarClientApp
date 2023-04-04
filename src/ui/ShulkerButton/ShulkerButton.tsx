import React, {FC} from 'react';
import styles from './shulkerbutton.css';

export interface IShulkerButton {
  onClick: () => void,
  buttonText: string
}

export const ShulkerButton: FC<IShulkerButton> = ({buttonText, onClick}) => {
  return (
      <button onClick={onClick}
              type={"button"}
              className={styles.button}>
        {buttonText}
      </button>
  );
}
