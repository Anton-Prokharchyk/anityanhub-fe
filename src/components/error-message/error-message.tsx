import React from 'react';

import ErrorMessageProptypes from '@/components/error-message/error-message.proptypes';

import styles from './error-message.module.scss';

export default function ErrorMessage({
  children,
  Tag = 'p',
}: ErrorMessageProptypes) {
  return <Tag className={styles['error-message']}>{children}</Tag>;
}
