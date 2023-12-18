'use client';

import React from 'react';

import {
  Button,
  ErrorMessage,
  Input,
  SearchBar,
  TextArea,
  Typography,
} from '@/components';

import styles from './page.module.scss';

export default function Main() {
  return (
    <main className={styles.main}>
      <Button buttonType='primary'>button</Button>
      <div
        style={{
          backgroundColor: 'white',
          width: 100,
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button buttonType='dark'>button</Button>
      </div>
      <Button buttonType='none'>button</Button>
      <Button buttonType='bordered'>button</Button>
      <Input placeholder='Enter name' />
      <TextArea placeholder='Write a comment ...' />
      <Typography Tag='p'>P tag</Typography>
      <Typography Tag='span'>span tag</Typography>
      <Typography Tag='h1' color='primary'>
        h1 tag
      </Typography>
      <Typography Tag='h2' color='error'>
        h2 tag
      </Typography>
      <Typography Tag='h3' color='disabled'>
        h3 tag
      </Typography>
      <Typography Tag='h4' color='accent'>
        h4 tag
      </Typography>
      <Typography Tag='h5'>h5 tag</Typography>
      <Typography Tag='h6'>h6 tag</Typography>
      <SearchBar placeholder='Search' />
      <ErrorMessage Tag='span'>ERROR</ErrorMessage>
      <ErrorMessage Tag='span'>ERROR</ErrorMessage>
      <ErrorMessage Tag='p'>ERROR</ErrorMessage>
      <ErrorMessage Tag='p'>ERROR</ErrorMessage>
    </main>
  );
}
