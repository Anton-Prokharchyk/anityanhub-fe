'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { SearchBar, Typography } from '@/components';

import styles from './header.module.scss';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
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
        <div
          className={styles['login-container']}
          style={{ cursor: 'pointer' }}
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? (
            <div className={styles.profile}>
              <div className={styles['profile-container']}>
                <Typography className={styles.username} tag='span'>
                  Username
                </Typography>
                <Typography className={styles.status} tag='span'>
                  Online
                </Typography>
              </div>
              <div
                className={styles.avatar}
                style={{
                  backgroundColor: 'white',
                  width: '55px',
                  height: '55px',
                }}
              />
            </div>
          ) : (
            <div className={styles.login}>SIGN UP / SIGN IN</div>
          )}
        </div>
      </div>
    </header>
  );
}
