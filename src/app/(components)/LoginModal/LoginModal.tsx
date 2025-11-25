'use client';

import { Dispatch, SetStateAction } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as y from 'yup';
import { Button, ErrorMessage, Input, Typography } from 'anityanhub-ui-lib';

import { login, LoginInput } from '@/app/api/user.api';

import styles from './login-modal.module.scss';

interface LoginModalProps {
  setIsLoginModalOpen: Dispatch<SetStateAction<boolean>>;
}

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
  } = useForm<LoginInput>({
    resolver: yupResolver(validationSchema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<LoginInput> = async (data) => {
    const { isLoggedIn } = await login(data);
    setIsLoginModalOpen(!isLoggedIn);
  };

  const onError = () => {
    console.log('error');
  };

  const onBackgroundClick = (): void => setIsLoginModalOpen(false);

  return (
    <div
      onClick={() => onBackgroundClick()}
      className={styles['login-modal-background']}
    >
      <form onSubmit={handleSubmit(onSubmit, onError)}>
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
          <Button appearance='none'>Sign Up</Button>
        </div>
      </form>
    </div>
  );
}
