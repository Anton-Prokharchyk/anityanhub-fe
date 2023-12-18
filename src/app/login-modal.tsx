'use client';

import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Link from 'next/link';
import * as y from 'yup';

import { Button, ErrorMessage, Input, Typography } from '@/components';

import { yupResolver } from '@hookform/resolvers/yup';
import styles from './login-modal.module.scss';

interface LoginModalProps {
  setIsLoginModalOpen: Dispatch<SetStateAction<boolean>>;
}

type Inputs = {
  login: string;
  password: string;
};

const validationSchema = y.object({
  login: y
    .string()
    .required('Field is required')
    .min(4, 'Should be minimum 4 characters')
    .max(14, 'Should be maximum 14 characters')
    .trim(),
  password: y
    .string()
    .required('Field is required')
    .min(4, 'Should be minimum 4 characters')
    .max(14, 'Should be maximum 14 characters')
    .trim(),
});

export default function LoginModal({ setIsLoginModalOpen }: LoginModalProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(validationSchema) });

  const onSubmit = useCallback(
    handleSubmit((data: Inputs) => console.log(data)),
    []
  );
  const onBackgroundClick = useCallback(
    (): void => setIsLoginModalOpen(false),
    [setIsLoginModalOpen]
  );
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
            Tag='p'
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
                type='text'
                placeholder='login'
                error={Boolean(errors.login)}
              />
            )}
            name='login'
          />
          <ErrorMessage style={{ fontSize: '12px', padding: '4px' }}>
            {errors.login?.message}
          </ErrorMessage>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                error={Boolean(errors.password)}
                type='password'
                style={{ marginTop: '30px' }}
                placeholder='password'
              />
            )}
            name='password'
          />
          <ErrorMessage style={{ fontSize: '12px', padding: '4px' }}>
            {errors?.password?.message}
          </ErrorMessage>
          <div className={styles['forgot-password']}>
            <Button style={{ padding: '0', margin: '8px' }} appearance='none'>
              Forgot password
            </Button>
          </div>
          <Button
            style={{ marginTop: '65px' }}
            type='submit'
            appearance='primary'
          >
            Sign In
          </Button>
          <Button appearance='none'>
            <Link href='https://www.google.com'>Sign Up</Link>
          </Button>
        </div>
      </form>
    </div>
  );
}
