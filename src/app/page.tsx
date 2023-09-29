'use client';

import React, { useEffect } from 'react';

import { Button, Typography } from '@/components';
import Image from 'next/image';

import { Input } from '@/components/input/input';
import styles from './page.module.scss';

export default function Home() {
  useEffect(() => {
    console.log('rerender');
    return () => console.log('unmount');
  });

  return (
    <main className={styles.main}>
      <Image
        width={300}
        height={300}
        src='/images/main-logo-img.jpg'
        alt='logo'
      />
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
      <Input placeholder='Input' />
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
    </main>
  );
}
