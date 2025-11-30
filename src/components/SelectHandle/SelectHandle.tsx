import React from 'react';

import styles from './select-handle.module.scss';

export default function SelectHandle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles['select-handle']}>{children}</div>;
}
