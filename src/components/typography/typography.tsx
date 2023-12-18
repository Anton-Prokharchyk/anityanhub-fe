import React from 'react';
import cn from 'classnames';

import { TypographyProps } from '@/components/typography/typography.proptypes';

import styles from './typography.module.scss';

export function Typography({
  children,
  color = 'primary',
  Tag = 'span',
  weight = 'normal',
  // TODO: add fontSize property
  ...props
}: TypographyProps): React.ReactElement {
  const classes = cn({
    [styles.primary]: color === 'primary',
    [styles.accent]: color === 'accent',
    [styles.error]: color === 'error',
    [styles.disabled]: color === 'disabled',
    [styles.normal]: weight === 'normal',
    [styles.bold]: weight === 'bold',
    [styles.light]: weight === 'light',
  });
  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
