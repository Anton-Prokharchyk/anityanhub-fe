'use client';

import React from 'react';

import { Typography } from '@/components';

import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Typography Tag='p'>4memory designed by Only_eXtr1m</Typography>
      <Typography Tag='p'>2020</Typography>
    </footer>
  );
}
