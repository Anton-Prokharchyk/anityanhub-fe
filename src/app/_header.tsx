'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { SearchBar, Typography } from '@/components';
import LoginModal from '@/app/login-modal';
import ProfileModal from '@/app/profile-modal';

import styles from './header.module.scss';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(true);

  return (
    <header className={styles.header}>
      <div className={styles['left-header']}>
        <Image width={70} height={70} src='/icons/main-icon.ico' alt='logo' />
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
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? (
            <div
              className={styles.profile}
              style={{ cursor: 'pointer' }}
              onClick={() => setIsProfileModalOpen(!isProfileModalOpen)}
            >
              <div className={styles['profile-info-container']}>
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
            <div
              onClick={() => setIsLoginModalOpen(true)}
              className={styles.login}
            >
              SIGN UP / SIGN IN
            </div>
          )}
          {isProfileModalOpen && <ProfileModal />}
        </div>
      </div>
      {isLoginModalOpen && (
        <LoginModal setIsLoginModalOpen={setIsLoginModalOpen} />
      )}
    </header>
  );
}
