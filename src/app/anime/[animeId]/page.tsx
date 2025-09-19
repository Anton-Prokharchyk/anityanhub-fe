import React from 'react';
import { Textarea, Button, Typography } from 'anityanhub-ui-lib';

import data from '@/seed';
import Image from 'next/image';

import styles from './detailsPage.module.scss';

type Anime = {
  id: string;
  name: string;
  description: string;
  img: string;
  type: string;
  episodes: string;
  status: string;
  genre: string;
  source: string;
  release: string;
  studio: string;
  'MPAA rank': string;
  peggy: string;
  duration: number;
  dubbing: string;
  sameAs: { id: string; name: string; img: string }[];
};

const animes: Anime[] = data;

export default function DetailsPage() {
  return (
    <div className={styles['details-page']}>
      <div className={styles['details-page-wrapper']}>
        <div className={styles['actions-menu']}>
          <div className={styles['image-wrapper']}>
            <Image
              src={animes[0].img}
              alt='title-image'
              width={200}
              height={300}
              style={{ width: 200, height: 300 }}
            />
          </div>
          <Button appearance='primary'>Watch</Button>
          <Button appearance='bordered'>Create room</Button>
          <Button appearance='dark'>Add in your list</Button>
        </div>
        <div className={styles.title}>
          <Typography Tag='h1'>{animes[0].name}</Typography>
          <div className={styles['title-description']}>
            <p>Type: {animes[0].type}</p>
            <p>Episodes: {animes[0].episodes}</p>
            <p>Status: {animes[0].status}</p>
            <p>Genre: {animes[0].genre}</p>
            <p>Source: {animes[0].source}</p>
            <p>Release: {animes[0].release}</p>
            <p>Studio: {animes[0].studio}</p>
            <p>MPAA rank: {animes[0]['MPAA rank']}</p>
            <p>PEGY: {animes[0].peggy}</p>
            <p>Duration: {animes[0].duration}</p>
            <p>Dubbing: {animes[0].dubbing}</p>
          </div>
        </div>
        <div className={styles.description}>
          <Typography Tag='h2'>Description:</Typography>
          <div className={styles['description-body']}>
            {animes[0].description}
          </div>
        </div>
        <div className={styles['same-as']}>
          <Typography Tag='h2'>Same as:</Typography>
          <div className={styles['same-as-body']}>
            {animes[1].sameAs.map((sameAsElement) => (
              <figure key={sameAsElement.id}>
                <Image
                  src={sameAsElement.img}
                  alt='same-as-title-image'
                  width={200}
                  height={300}
                  style={{ width: 200, height: 300 }}
                />
                <figcaption className={styles['same-as-title']}>
                  {sameAsElement.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className={styles.comments}>
          <Typography Tag='h2'>Comments:</Typography>
          <div className={styles['comments-block']}>
            <div className={styles['comments-block-wrapper']}>
              <figure className={styles['comment-author-info']}>
                <Image
                  src={animes[0].sameAs[0].img}
                  alt='comment-author-avatar'
                  width={60}
                  height={90}
                  style={{ width: 60, height: 90 }}
                ></Image>
                <figcaption className={styles['comment-author-name']}>
                  username
                </figcaption>
              </figure>
              <div className={styles['comment-body']}>
                <div className={styles['comment-text']}>comment</div>
                <div className={styles['comment-actions-wrapper']}>
                  <div className={styles['comment-likes']}>999 likes</div>
                  <Button className={styles['reply-button']} appearance='none'>
                    Reply
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles['add-comment-wrapper']}>
              <figure className={styles['add-comment-author-info']}>
                <Image
                  src={animes[0].sameAs[0].img}
                  alt='comment-author-avatar'
                  width={60}
                  height={90}
                  style={{ width: 60, height: 90 }}
                ></Image>
                <figcaption className={styles['add-comment-author-name']}>
                  username
                </figcaption>
              </figure>
              <div className={styles['add-comment-body']}>
                <Textarea
                  placeholder='Add comment'
                  className={styles['add-comment-text']}
                  minLength={1}
                  maxLength={5000}
                  rows={3}
                ></Textarea>
                <Button
                  className={styles['add-comment-button']}
                  appearance='primary'
                >
                  Add comment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
