import React from 'react';
import cn from 'classnames';

import { InputProps } from '@/components/input/input.proptypes';

import styles from './input.module.scss';

export default function Input({
  placeholder,
  type,
  appearance,
  error = false,
  ...props
}: InputProps): React.ReactElement {
  const classes = cn(styles.input, { [styles.error]: error });
  return (
    <input
      type={type}
      className={classes}
      placeholder={placeholder}
      {...props}
    />
  );
}
