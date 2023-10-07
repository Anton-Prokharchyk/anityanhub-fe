import React, {
  FunctionComponentElement,
  HTMLAttributes,
  MouseEvent,
  ReactElement,
  ReactNode,
} from 'react';
import cn from 'classnames';

import { SliderProps } from '@/components/slider/slider.proptypes';

import styles from './slider.module.scss';

export function Slider({
  children,
  ...props
}: SliderProps): FunctionComponentElement<ReactElement> {
  const onNextButtonSliderClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    const a = e.currentTarget.children[1]
      .children[0] as HTMLAttributes<ReactNode>;
    if (a.style) a.style.left = '-300px';
  };

  const onPrevButtonSliderClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    const a = e.currentTarget.children[1]
      .children[0] as HTMLAttributes<ReactNode>;
    if (a.style) a.style.left = '0px';
  };

  const sliderClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    const firstEventTarget = e.target as HTMLDivElement;
    let classesArray: Array<string> = [];
    if (firstEventTarget.className)
      classesArray = classesArray.concat(firstEventTarget.className.split(' '));
    if (classesArray.includes('next-button')) onNextButtonSliderClickHandler(e);
    if (classesArray.includes('prev-button')) onPrevButtonSliderClickHandler(e);
  };

  return (
    <div className={styles.slider} onClick={sliderClickHandler} {...props}>
      <div className={cn(styles['prev-button'], 'prev-button')}>
        <div className={cn(styles['button-right'], 'prev-button')} />
        <div className={cn(styles['button-left'], 'prev-button')} />
      </div>
      <div className={styles['slider-items-wrapper']}>
        <div className={styles['slider-items-container']}>{children}</div>
      </div>
      <div className={cn(styles['next-button'], 'next-button')}>
        <div className={cn(styles['button-right'], 'next-button')} />
        <div className={cn(styles['button-left'], 'next-button')} />
      </div>
    </div>
  );
}
