import React from 'react';
import cn from 'classnames';

import { SearchBarProps } from '@/components/search-bar/search-bar.proptypes';
import SearchIcon from '@/components/search-bar/search-icon.svg';

import styles from './search-bar.module.scss';

export function SearchBar({
  placeholder,
  ...props
}: SearchBarProps): React.ReactElement {
  const classes = cn(styles.input);

  const searchBarFocusEventHandler = (e: React.FocusEvent<HTMLDivElement>) => {
    e.currentTarget.children[1].classList.add(styles.focused);
  };
  const searchBarOnBlurEventHandler = (e: React.FocusEvent<HTMLDivElement>) => {
    e.currentTarget.children[1].classList.remove(styles.focused);
  };
  return (
    <div
      className={styles['search-bar-wrapper']}
      onFocus={(e) => searchBarFocusEventHandler(e)}
      onBlur={(e) => searchBarOnBlurEventHandler(e)}
    >
      <input className={classes} placeholder={placeholder} {...props} />
      <SearchIcon className={styles['search-icon']} />
    </div>
  );
}
