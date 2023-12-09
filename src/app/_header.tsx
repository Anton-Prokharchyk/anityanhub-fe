'use client';

import React from 'react';
import Image from 'next/image';

import { SearchBar } from '@/components';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['left-header']}>
        <Image
          width={70}
          height={70}
          src='/images/main-logo-img.jpg'
          alt='logo'
        />
        <SearchBar
          style={{ width: '300px', height: '40px' }}
          placeholder='Search'
          className={styles['search-bar']}
        />
      </div>
      <div className={styles['right-header']}>
        <nav>NAVIGATION</nav>
        <div>SIGN IN/UP</div>
      </div>
    </header>
  );
}
