import React from 'react';
import cn from 'classnames';

import { SearchBarProps } from '@/components/search-bar/search-bar.proptypes';
import SearchIcon from '@/components/search-bar/search-icon.svg';

import styles from './search-bar.module.scss';

export function SearchBar({
  placeholder,
  className,
  ...props
}: SearchBarProps): React.ReactElement {
  const classes = cn(styles.input);

  const searchBarFocusEventHandler = (e: React.FocusEvent<HTMLDivElement>) => {
    e.currentTarget.children[1].classList.add(styles.focused);
    e.currentTarget.classList.add(styles.focused);
  };
  const searchBarOnBlurEventHandler = (e: React.FocusEvent<HTMLDivElement>) => {
    e.currentTarget.children[1].classList.remove(styles.focused);
    e.currentTarget.classList.remove(styles.focused);
  };
  return (
    <div
      className={cn(styles['search-bar-wrapper'], className)}
      onFocus={(e) => searchBarFocusEventHandler(e)}
      onBlur={(e) => searchBarOnBlurEventHandler(e)}
      {...props}
    >
      <input className={classes} placeholder={placeholder} />
      <SearchIcon className={styles['search-icon']} />
    </div>
  );
}
