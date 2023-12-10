'use client';

import React from 'react';

import { Button, Input, SearchBar, TextArea, Typography } from '@/components';

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
      <Typography tag='p'>P tag</Typography>
      <Typography tag='span'>span tag</Typography>
      <Typography tag='h1' color='primary'>
        h1 tag
      </Typography>
      <Typography tag='h2' color='error'>
        h2 tag
      </Typography>
      <Typography tag='h3' color='disabled'>
        h3 tag
      </Typography>
      <Typography tag='h4' color='accent'>
        h4 tag
      </Typography>
      <Typography tag='h5'>h5 tag</Typography>
      <Typography tag='h6'>h6 tag</Typography>
      <SearchBar placeholder='Search' />
    </main>
  );
}
