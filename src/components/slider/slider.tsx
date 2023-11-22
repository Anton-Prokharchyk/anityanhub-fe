import React, {
  Children,
  KeyboardEvent,
  MouseEvent,
  MutableRefObject,
  useRef,
} from 'react';
import cn from 'classnames';

import { SliderProps } from '@/components/slider/slider.proptypes';
import onKeyDown from '@/components/slider/onKeyDownHandler';
import calcNextScrollShift from '@/components/slider/calcNextButtonShift';
import calcPrevScrollShift from '@/components/slider/calcPrevButtonShift';

import styles from './slider.module.scss';

export default function Slider({
  children,
  type,
  width,
  height,
  ...props
}: SliderProps) {
  const childrenArray = Children.toArray(children);
  const sliderItemsContainer: MutableRefObject<HTMLDivElement | null> =
    useRef(null);

  const onNextButtonSliderClickHandler = () => {
    const nextShift = calcNextScrollShift(
      sliderItemsContainer.current as HTMLDivElement
    );
    if (sliderItemsContainer.current?.style)
      sliderItemsContainer.current.style.left = `${nextShift}px`;
  };

  const onPrevButtonSliderClickHandler = () => {
    const nextShift = calcPrevScrollShift(
      sliderItemsContainer.current as HTMLDivElement
    );
    if (sliderItemsContainer.current?.style)
      sliderItemsContainer.current.style.left = `${nextShift}px`;
  };

  // const onDotClickHandler = (e) => {
  //   console.log(e.currentTarget);
  //   e.currentTarget.classList.add(styles.active);
  // };

  const onDotClickHandler = (
    e:
      | MouseEvent<HTMLDivElement | Element>
      | KeyboardEvent<HTMLDivElement | Element>
  ) => {
    const element = e.currentTarget as HTMLDivElement;
    const childrenHTMLCollection = element.parentElement?.children;
    if (childrenHTMLCollection) {
      const dotsArray = Array.from(childrenHTMLCollection) as HTMLDivElement[];
      dotsArray.forEach((dot) => {
        dot.classList.forEach((className: string, index, array) => {
          if (className.includes('active')) array.remove(className);
        });
      });
    }
    e.currentTarget.classList.add(styles.active);
  };
  // const sliderDots: ReactElement[] = childrenArray.map(() => (
  //   <div onClick={(e) => onDotClickHandler(e)} className={styles.dot} />
  // ));

  return (
    <div
      style={{ width: width || undefined, height: height || undefined }}
      className={cn(styles.slider, styles[type])}
      {...props}
    >
      <div
        role='button'
        tabIndex={0}
        onClick={() => onPrevButtonSliderClickHandler()}
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
          onKeyDown(e, onPrevButtonSliderClickHandler)
        }
        className={styles['prev-button']}
      >
        <div className={styles['button-right']} />
        <div className={styles['button-left']} />
      </div>
      <div className={styles['slider-items-wrapper']}>
        <div
          ref={sliderItemsContainer}
          className={styles['slider-items-container']}
        >
          {childrenArray.map((slide, index) => (
            <div key={index} className={styles['slider-item']}>
              {slide}
            </div>
          ))}
          <div className={styles['dots-container']}>
            {childrenArray.map((value, index) => (
              <div
                key={index}
                onClick={(e) => onDotClickHandler(e)}
                className={styles.dot}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        role='button'
        tabIndex={0}
        onClick={() => onNextButtonSliderClickHandler()}
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
