import React, { HTMLAttributes, MouseEvent, ReactNode, useEffect } from 'react';
import cn from 'classnames';

import { SliderProps } from '@/components/slider/slider.proptypes';

import styles from './slider.module.scss';

export function Slider({
  children,
  ...props
}: SliderProps): React.ReactElement {
  useEffect(() => console.log(children));
  const onNextButtonSliderClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    console.log('onPrevButtonSliderClickHandler');
    const a = e.currentTarget.children[1]
      .children[0] as HTMLAttributes<ReactNode>;
    if (a.style) a.style.left = '-300px';
  };
  const onPrevButtonSliderClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    console.log('onPrevButtonSliderClickHandler');
    const a = e.currentTarget.children[1]
      .children[0] as HTMLAttributes<ReactNode>;
    if (a.style) a.style.left = '0px';
  };

  const sliderClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e.target);
    const firstEventTarget = e.target as HTMLDivElement;
    let classesArray: Array<string> = [];
    if (firstEventTarget.className)
      classesArray = classesArray.concat(firstEventTarget.className.split(' '));
    // console.log(
    //   'classesArray',
    //   classesArray.concat(firstEventTarget.className.split(' ')),
    //   classesArray.includes('next-button')
    // );
    if (classesArray.includes('next-button')) onNextButtonSliderClickHandler(e);
    if (classesArray.includes('prev-button')) onPrevButtonSliderClickHandler(e);

    // console.log(
    //   'slider children',
    //   e.currentTarget.childNodes
    //   // e.currentTarget.children[1].children[0],
    //   // e.currentTarget.children[1].children[0].scrollWidth,
    //   // e.currentTarget.children[1].children[0].offsetWidth,
    //   // e.currentTarget.children[1].children[0].offsetLeft,
    //   // e.currentTarget.children[1].children[0].clientWidth,
    //   // e.currentTarget.children[1].children[0].clientLeft
    // );
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
