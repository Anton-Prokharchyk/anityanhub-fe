'use client';

import React, { useEffect, useState } from 'react';

import { Slider, Typography } from '@/components';

import styles from './home.module.scss';

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
    <main className={styles['content-section']}>
      <Slider type='full-width' width='100%' height='100vh'>
        {animeCollection.map((animeItem: Anime) => (
          <div
            key={animeItem.id}
            className='slider-card'
            style={{ backgroundColor: 'red', width: '100%', height: '100%' }}
          >
            {animeItem.title}
          </div>
        ))}
      </Slider>
      <div className={styles['popular-section']}>
        <div className={styles.description}>
          <Typography Tag='span'>Watch more</Typography>
          <Typography Tag='span' color='accent'>
            Popular
          </Typography>
        </div>

        <Slider type='mini' width='100%'>
          {animeCollection.map((animeItem: Anime) => (
            <div
              key={animeItem.id}
              className='slider-card'
              style={{
                backgroundColor: 'red',
                width: '200px',
                height: '285px',
              }}
            >
              {animeItem.title}
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles['ongoing-section']}>
        <div className={styles.description}>
          <Typography Tag='span'>Watch more</Typography>
          <Typography Tag='span' color='accent'>
            Ongoing
          </Typography>
        </div>
        <Slider type='mini' width='100%'>
          {animeCollection.map((animeItem: Anime) => (
            <div
              key={animeItem.id}
              className='slider-card'
              style={{
                backgroundColor: 'red',
                width: '200px',
                height: '285px',
              }}
            >
              {animeItem.title}
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles['recommended-section']}>
        <div className={styles.description}>
          <Typography Tag='span'>Watch more</Typography>
          <Typography Tag='span' color='accent'>
            Recommended
          </Typography>
        </div>

        <Slider type='mini' width='100%'>
          {animeCollection.map((animeItem: Anime) => (
            <div
              key={animeItem.id}
              className='slider-card'
              style={{
                backgroundColor: 'red',
                width: '200px',
                height: '285px',
              }}
            >
              {animeItem.title}
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
}
