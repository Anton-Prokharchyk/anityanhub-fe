'use client';

import React from 'react';

import { Typography } from 'anityanhub-ui-lib';

import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Typography Tag='p'>Anityanhub designed by antony666</Typography>
      <Typography Tag='p'>2025</Typography>
    </footer>
  );
}
