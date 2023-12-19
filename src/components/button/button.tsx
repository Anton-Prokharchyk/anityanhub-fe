import React from 'react';
import cn from 'classnames';

import { ButtonProps } from '@/components/button/button.proptypes';

import styles from './button.module.scss';

export default function Button({
  children,
  appearance = 'primary',
  ...props
}: ButtonProps): React.ReactElement {
  const classes = cn(styles.btn, {
    [styles.primary]: appearance === 'primary',
    [styles.dark]: appearance === 'dark',
    [styles.bordered]: appearance === 'bordered',
    [styles.none]: appearance === 'none',
  });
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
