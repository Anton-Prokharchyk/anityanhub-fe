'use client';

import React from 'react';
import { Slider, Button } from 'anityanhub-ui-lib';
import cn from 'classnames';
import Image from 'next/image';

import data from '../seed';
import styles from './page.module.scss';

export default function Main() {
  return (
    <main className={styles.main}>
      <section className={cn(styles.popular)}>
        <div className={cn(styles['popular-wrapper'], 'max-width')}>
          <div className={styles['popular-header']}>
            <span>Popular</span>
            <Button appearance='none'>Watch all ...</Button>
          </div>
          <div className={styles['popular-content']}>
            <Slider type='mini'>
              {data.map((element) => (
                <div key={element.id}>
                  <figure>
                    <Image
                      alt='title-image'
                      src={element.img}
                      width={100}
                      height={100}
                      className={styles['popular-title-image']}
                    />
                    <figcaption className={styles['popular-title-figcap']}>
                      {element.name}
                    </figcaption>
                  </figure>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section className={styles['best-new-titles']}>
        <div className={cn(styles['best-new-titles-wrapper'], 'max-width')}>
          <div className={styles['best-new-titles-header']}>
            <span>Best new titles</span>
            <Button appearance='none'>Watch all ...</Button>
          </div>
          <div className={styles['best-new-titles-filter']}>
            <span>Filter</span>
          </div>

          <div className={styles['best-new-titles-content']}>
            <span>Content</span>
          </div>
        </div>
      </section>
      <section className={styles.updates}>
        <div className={cn(styles['updates-wrapper'], 'max-width')}>
          <div className={styles['updates-header']}>
            <span>Updates</span>
          </div>
          <div className={styles['updates-content']}>
            {data.map((element) => (
              <div className={styles['updates-title-item']} key={element.id}>
                <Image
                  alt='title-image'
                  src={element.img}
                  width={100}
                  height={100}
                  className={styles['updates-title-image']}
                />
                <div className={styles['updates-title-name']}>
                  <span>{element.name}</span>
                </div>
                <div className={styles['updates-title-series']}>
                  <span>1 series</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
