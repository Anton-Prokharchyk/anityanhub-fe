import getNumberFromPixels from '@/components/slider/getNumberFromPixels';

const calcNextScrollShift = (element: HTMLElement): number => {
  const { clientWidth: shiftStep, scrollWidth } = element;
  const currentShift: number = getNumberFromPixels(element.style.left);
  const maxShift = -scrollWidth + shiftStep;
  const nextShift = currentShift - shiftStep;
  return nextShift <= maxShift ? maxShift : nextShift;
};

export default calcNextScrollShift;
