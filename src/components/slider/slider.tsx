import React, { KeyboardEvent, MouseEvent } from 'react';
import cn from 'classnames';

import { SliderProps } from '@/components/slider/slider.proptypes';
import onKeyDown from '@/components/slider/onKeyDownHandler';
import calcNextScrollShift from '@/components/slider/calcNextButtonShift';
import calcPrevScrollShift from '@/components/slider/calcPrevButtonShift';

import styles from './slider.module.scss';

export default function Slider({ children, type, ...props }: SliderProps) {
  const onNextButtonSliderClickHandler = (
    e:
      | MouseEvent<HTMLDivElement | Element>
      | KeyboardEvent<HTMLDivElement | Element>
  ) => {
    const sliderItemsContainer = e.currentTarget.previousElementSibling
      ?.firstChild as HTMLDivElement;
    const nextShift = calcNextScrollShift(sliderItemsContainer);
    if (sliderItemsContainer.style)
      sliderItemsContainer.style.left = `${nextShift}px`;
  };

  const onPrevButtonSliderClickHandler = (
    e:
      | MouseEvent<HTMLDivElement | Element>
      | KeyboardEvent<HTMLDivElement | Element>
  ) => {
    const sliderItemsContainer = e.currentTarget.nextElementSibling
      ?.firstChild as HTMLDivElement;
    const nextShift = calcPrevScrollShift(sliderItemsContainer);
    if (sliderItemsContainer.style)
      sliderItemsContainer.style.left = `${nextShift}px`;
  };

  return (
    <div className={cn(styles.slider, styles[type])} {...props}>
      <div
        role='button'
        tabIndex={0}
        onClick={(e: MouseEvent<HTMLDivElement>) =>
          onPrevButtonSliderClickHandler(e)
        }
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
          onKeyDown(e, onPrevButtonSliderClickHandler)
        }
        className={styles['prev-button']}
      >
        <div className={styles['button-right']} />
        <div className={styles['button-left']} />
      </div>
      <div className={styles['slider-items-wrapper']}>
        <div className={styles['slider-items-container']}>{children}</div>
      </div>
      <div
        role='button'
        tabIndex={0}
        onClick={(e: MouseEvent<HTMLDivElement>) =>
          onNextButtonSliderClickHandler(e)
        }
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
          onKeyDown(e, onNextButtonSliderClickHandler);
        }}
        className={styles['next-button']}
      >
        <div className={styles['button-right']} />
        <div className={styles['button-left']} />
      </div>
    </div>
  );
}
