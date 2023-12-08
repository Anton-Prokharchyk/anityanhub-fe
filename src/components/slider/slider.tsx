import React, {
  Children,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';

import { SliderProps } from '@/components/slider/slider.proptypes';
import calcNextScrollShift from '@/components/slider/calcNextButtonShift';
import calcPrevScrollShift from '@/components/slider/calcPrevButtonShift';
import getNumberFromPixels from '@/components/slider/getNumberFromPixels';

import styles from './slider.module.scss';

const ENTER_KEY_NAME = 'Enter';

export default function Slider({
  children,
  type,
  width,
  height,
  ...props
}: SliderProps) {
  const childrenArray = Children.toArray(children);
  const sliderItemsContainer = useRef<HTMLDivElement>(null);
  const sliderDotsContainer = useRef<HTMLDivElement>(null);
  const [currentSlideNumber, setCurrentSlideNumber] = useState<number>(0);

  const changeCurrentSlide = () => {
    const element = sliderItemsContainer.current;
    if (element) {
      element.style.left = `-${element.clientWidth * currentSlideNumber}px`;
    }
  };

  const setActiveSliderDot = () => {
    if (sliderDotsContainer.current) {
      const dotsArray = Array.from(sliderDotsContainer.current?.children);
      dotsArray.forEach((dot) => {
        if (dot) {
          dot.classList.forEach((className: string, index: number, array) => {
            if (className.includes('active')) array.remove(className);
          });
        }
      });
      dotsArray.forEach((child) => {
        if (+child.id === currentSlideNumber)
          child.classList.add(styles.active);
      });
    }
  };

  const onDotClickHandler = (
    e:
      | MouseEvent<HTMLDivElement | Element>
      | KeyboardEvent<HTMLDivElement | Element>
  ) => {
    const element = e.currentTarget;
    setCurrentSlideNumber(+element.id);
    setActiveSliderDot();
  };

  const onSliderButtonClickHandler = (
    e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>
  ) => {
    const { id } = e.currentTarget;
    const element = sliderItemsContainer.current;
    if (element) {
      switch (id) {
        case 'next-button':
          element.style.left = `${calcNextScrollShift(element)}px`;
          break;
        case 'prev-button':
          element.style.left = `${calcPrevScrollShift(element)}px`;
          break;
        default:
          return;
      }
      setCurrentSlideNumber(
        Math.abs(getNumberFromPixels(element.style.left) / element.clientWidth)
      );
    }
  };

  useEffect(() => {
    changeCurrentSlide();
    setActiveSliderDot();
  }, [changeCurrentSlide, currentSlideNumber, setActiveSliderDot]);

  setActiveSliderDot();

  return (
    <div
      style={{ width: width || undefined, height: height || undefined }}
      className={cn(styles.slider, styles[type])}
      {...props}
    >
      <div
        role='button'
        tabIndex={0}
        id='prev-button'
        onClick={(e) => onSliderButtonClickHandler(e)}
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
          e.key === ENTER_KEY_NAME && onSliderButtonClickHandler(e)
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
        </div>
        <div ref={sliderDotsContainer} className={styles['dots-container']}>
          {childrenArray.map((value, index) => (
            <div
              key={index}
              id={index.toString()}
              role='button'
              tabIndex={0}
              onClick={(e) => onDotClickHandler(e)}
              onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
                e.key === ENTER_KEY_NAME && onSliderButtonClickHandler(e)
              }
              className={styles.dot}
            />
          ))}
        </div>
      </div>
      <div
        role='button'
        tabIndex={0}
        id='next-button'
        onClick={(e) => onSliderButtonClickHandler(e)}
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
          e.key === ENTER_KEY_NAME && onSliderButtonClickHandler(e)
        }
        className={styles['next-button']}
      >
        <div className={styles['button-right']} />
        <div className={styles['button-left']} />
      </div>
    </div>
  );
}
