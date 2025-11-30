'use client';

import React, { ReactNode, MouseEvent, ReactElement } from 'react';

import { toggleSelected } from './selectOptionHelpers';
import styles from './select-option.module.scss';

export default function SelectOption({
  children,
  onClick = () => {},
  ...props
}: React.ComponentProps<'div'> & {
  children: ReactNode;
  onClick?: () => void;
}): ReactElement {
  return (
    <div
      className={styles['select-option']}
      onClick={(e: MouseEvent<HTMLDivElement>) => {
        toggleSelected(e);
        onClick(e);
      }}
      {...props}
    >
      {children}
    </div>
  );
}
