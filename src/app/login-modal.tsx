'use client';

import React, { Dispatch, SetStateAction } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Link from 'next/link';

import { Button, Input, Typography } from '@/components';

import styles from './login-modal.module.scss';

interface LoginModalProps {
  setIsLoginModalOpen: Dispatch<SetStateAction<boolean>>;
}

// type Inputs = {
//   username: string;
//   password: string;
// };

export default function LoginModal({ setIsLoginModalOpen }: LoginModalProps) {
  const { handleSubmit, control } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));
  const onBackgroundClick = (): void => setIsLoginModalOpen(false);
  return (
    <div
      onClick={() => onBackgroundClick()}
      className={styles['login-modal-background']}
    >
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={onSubmit}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={styles['login-modal-container']}
        >
          <Typography
            style={{ fontSize: '32px', marginBottom: '40px' }}
            tag='p'
            className={styles.title}
            color='primary'
          >
            Sign In
          </Typography>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                style={{ marginBottom: '30px' }}
                type='text'
                placeholder='login'
              />
            )}
            name='login'
          />
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input {...field} type='password' placeholder='password' />
            )}
            name='password'
          />
          <div className={styles['forgot-password']}>
            <Button style={{ padding: '0', margin: '8px' }} appearance='none'>
              Forgot password
            </Button>
          </div>
          <Input
            style={{ marginTop: '65px' }}
            value='Sign In'
            type='submit'
            appearance='primary'
          />
          <Button appearance='none'>
            <Link href='https://www.google.com'>Sign Up</Link>
          </Button>
        </div>
      </form>
    </div>
  );
}
