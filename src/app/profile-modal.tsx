'use client';

import React from 'react';

import { Typography } from '@/components';

import styles from './profile-modal.module.scss';

export default function ProfileModal() {
  return (
    <div className={styles['modal-container']}>
      <div className={styles['profile-info']}>
        <div className={styles.avatar}></div>
        <div className={styles.status}>
          <Typography tag='p'>Online </Typography>
          <Typography tag='p'>Away </Typography>
          <Typography tag='p'>Invisible</Typography>
        </div>
        <div className={styles.username}>Username</div>
      </div>
      <div className={styles.links}>
        <div className={styles.profile}>Profile</div>
        <div className={styles['anime-list']}>Anime list</div>
        <div className={styles.friends}>Friends</div>
        <div className={styles.mesasges}>Messages</div>
      </div>
      <div className={styles.actions}>
        <div className={styles.help}>Help</div>
        <div className={styles['sign-out']}>Sign out</div>
      </div>
    </div>
  );
}
