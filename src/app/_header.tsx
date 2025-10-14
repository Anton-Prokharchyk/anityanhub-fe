'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, SearchBar, Typography } from 'anityanhub-ui-lib';

import LoginModal from '@/app/login-modal';
import Logo from '@/../public/ath-main-logo.svg';
import ProfileModal from '@/app/profile-modal';

import styles from './header.module.scss';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  return (
    <header className={styles['header-wrapper']}>
      <div className={styles['top-header']}>
        <div className={styles['left-header']}>
          <Logo alt='logo' />
          <SearchBar
            style={{ width: '300px', height: '40px' }} // TODO: add height and width into searchbar props
            placeholder='Search'
            className={styles['search-bar']}
          />
        </div>
        <div className={styles['right-header']}>
          <div
            className={styles['login-container']}
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? (
              <div
                className={styles.profile}
                style={{ cursor: 'pointer' }}
                onClick={() => setIsProfileModalOpen(!isProfileModalOpen)}
              >
                <div className={styles['profile-info-container']}>
                  <Typography className={styles.username} Tag='span'>
                    Username
                  </Typography>
                  <Typography className={styles.status} Tag='span'>
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
              <div className={styles.login}>
                <Button appearance='none' style={{ padding: '0' }}>
                  <Link href='https://google.com'>SIGN UP</Link>
                </Button>
                /
                <Button
                  onClick={() => setIsLoginModalOpen(true)}
                  appearance='none'
                  style={{ padding: '0' }}
                >
                  SIGN IN
                </Button>
              </div>
            )}
            {isProfileModalOpen && <ProfileModal />}
          </div>
        </div>
        {isLoginModalOpen && (
          <LoginModal setIsLoginModalOpen={setIsLoginModalOpen} />
        )}
      </div>
      <div className={styles['bot-header']}>
        <nav className={styles['navigation-container']}>
          <ul className={styles['navigation-list']}>
            <li className={styles['navigation-list-item']}>Home</li>
            <li className={styles['navigation-list-item']}>Genre</li>
            <li className={styles['navigation-list-item']}>Rooms</li>
            <li className={styles['navigation-list-item']}>Manga</li>
            <li className={styles['navigation-list-item']}>Ongoing</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
