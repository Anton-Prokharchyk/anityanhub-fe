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
          style={{ width: '300px', height: '40px' }} // TODO: add height and width into searchbar props
          placeholder='Search'
          className={styles['search-bar']}
        />
      </div>
      <div className={styles['right-header']}>
        <nav className={styles['navigation-container']}>
          <ul className={styles['navigation-list']}>
            <li className={styles['navigation-list-item']}>Home</li>
            <li className={styles['navigation-list-item']}>Genre</li>
            <li className={styles['navigation-list-item']}>Rooms</li>
            <li className={styles['navigation-list-item']}>Manga</li>
            <li className={styles['navigation-list-item']}>Ongoing</li>
          </ul>
        </nav>
        <div className={styles['login-container']}>SIGN UP / SIGN IN</div>
      </div>
    </header>
  );
}
