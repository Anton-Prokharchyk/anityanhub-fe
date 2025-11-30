import React from 'react';

import styles from './mainWrapper.module.scss';

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={styles['main-wrapper']}>{children}</section>;
}
