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
  let classes;

  switch (type) {
    case 'button':
    case 'submit':
      classes = cn(styles.btn, {
        [styles.primary]: appearance === 'primary',
        [styles.dark]: appearance === 'dark',
        [styles.bordered]: appearance === 'bordered',
        [styles.none]: appearance === 'none',
      });
      break;
    case 'password':
    case 'text':
    case 'email':
    case 'tel':
    case 'hidden':
      classes = cn(styles.input);
      break;
    default:
      break;
  }
  classes = cn(classes, { [styles.error]: error });
  return (
    <input
      type={type}
      className={classes}
      placeholder={placeholder}
      {...props}
    />
  );
}
