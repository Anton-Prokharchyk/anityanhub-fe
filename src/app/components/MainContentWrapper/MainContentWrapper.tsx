import React from 'react';

import styles from './mainContentWrapper.module.scss';

export default function MainContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={styles['main-content-wrapper']}>{children}</section>
  );
}
