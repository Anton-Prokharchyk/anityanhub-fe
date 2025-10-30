import { MouseEvent } from 'react';

import styles from './select.module.scss';

export const toggleDisplaySelectDropdown = (
  event: MouseEvent<HTMLDivElement>
) => {
  if (event.currentTarget.nextSibling) {
    const selectContent: HTMLDivElement = event.currentTarget
      .nextSibling as HTMLDivElement;
    if (selectContent.classList.contains(styles.hidden)) {
      selectContent.classList.remove(styles.hidden);
    } else {
      selectContent.classList.add(styles.hidden);
    }
  }
};
