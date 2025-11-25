'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, ErrorMessage, Input } from 'anityanhub-ui-lib';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as y from 'yup';
import { registration, RegistrationInput } from '../api/user.api';

const validationSchema = y.object({
  name: y
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

export default function Registration() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: RegistrationInput) => {
    console.log('submit', data);
    console.log('submit', errors);
    await registration(data);
  };

  return (
    <div className='register-form-wrapper' style={{ backgroundColor: 'white' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='name'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              error={Boolean(errors?.name)}
              type='text'
              style={{ marginTop: '30px' }}
              placeholder='name'
            />
          )}
        />
        <ErrorMessage style={{ fontSize: '12px', padding: '4px' }}>
          {errors?.name?.message}
        </ErrorMessage>
        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              error={Boolean(errors?.password)}
              type='password'
              style={{ marginTop: '30px' }}
              placeholder='password'
            />
          )}
        />

        <ErrorMessage style={{ fontSize: '12px', padding: '4px' }}>
          {errors?.password?.message}
        </ErrorMessage>
        <Button
          style={{ marginTop: '65px' }}
          type='submit'
          appearance='primary'
        >
          Sign up
        </Button>
      </form>
    </div>
  );
}
