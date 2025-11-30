import { MouseEvent } from 'react';

import styles from './select-option.module.scss';

export const selectOption = (event: MouseEvent<HTMLDivElement>) => {
  console.log(event.currentTarget);
};

export const toggleSelected = (event: MouseEvent<HTMLDivElement>) => {
  if (event.currentTarget.classList.contains(styles.selected)) {
    event.currentTarget.classList.remove(styles.selected);
  } else {
    event.currentTarget.classList.add(styles.selected);
  }
};
