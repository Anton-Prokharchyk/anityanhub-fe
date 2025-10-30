'use client';

import React, { MouseEvent } from 'react';
import cn from 'classnames';

import { toggleDisplaySelectDropdown } from './selectHelpers';
import styles from './select.module.scss';

export default function Select({
  children,
  placeholder,
}: {
  children: React.ReactNode;
  placeholder: string;
}) {
  return (
    <div>
      <div
        onClick={(e: MouseEvent<HTMLDivElement>) =>
          toggleDisplaySelectDropdown(e)
        }
        className={styles.select}
      >
        {placeholder}
      </div>
      <div className={cn(styles['select-content'], styles.hidden)}>
        {children}
      </div>
    </div>
  );
}
