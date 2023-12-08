'use client';

import React, { useEffect, useState } from 'react';

import { Button, SearchBar, Slider, TextArea, Typography } from '@/components';
import Image from 'next/image';

import { Input } from '@/components/input/input';
import styles from './page.module.scss';

interface Anime {
  id: number;
  title: string;
}

export default function Home() {
  const [animeCollection, setAnimeCollection] = useState<Anime[] | []>([]);
  useEffect(() => {
    const collection: Array<{ id: number; title: string }> = [];
    for (let i = 0; i < 10; i += 1) {
      collection.push({ id: i, title: 'Your name' });
    }
    setAnimeCollection(collection);
  }, []);

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
      <Slider type='mini' width='300px'>
        {animeCollection.map((animeItem: Anime) => (
          <div
            key={animeItem.id}
            className='slider-card'
            style={{ backgroundColor: 'red', height: '300px' }}
          >
            {animeItem.title}
          </div>
        ))}
      </Slider>
      <Slider width='100wh' height='100vh' type='full-width'>
        {animeCollection.map((animeItem: Anime) => (
          <div
            key={animeItem.id}
            className='slider-card'
            style={{ backgroundColor: 'red', height: '100%' }}
          >
            {animeItem.title}
          </div>
        ))}
      </Slider>
    </main>
  );
}
