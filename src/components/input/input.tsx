import React from 'react';
import cn from 'classnames';

import { InputProps } from '@/components/input/input.proptypes';

import styles from './input.module.scss';

export function Input({
  placeholder,
  ...props
}: InputProps): React.ReactElement {
  const classes = cn(styles.input);
  return <input className={classes} placeholder={placeholder} {...props} />;
}
