'use client';

import React from 'react';
import {
  Button,
  ErrorMessage,
  Input,
  SearchBar,
  Textarea,
  Typography,
} from 'anityanhub-ui-lib';

import styles from './page.module.scss';

export default function Main() {
  return (
    <main className={styles.main}>
      <Button appearance='primary'>button</Button>
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
        <Button appearance='dark'>button</Button>
      </div>
      <Button appearance='none'>button</Button>
      <Button appearance='bordered'>button</Button>
      <Input placeholder='Enter name' />
      <Textarea placeholder='Write a comment ...' />
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
