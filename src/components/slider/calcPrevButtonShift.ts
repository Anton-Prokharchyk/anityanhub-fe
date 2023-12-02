import getNumberFromPixels from '@/components/slider/getNumberFromPixels';

const calcPrevScrollShift = (element: HTMLElement): number => {
  const { clientWidth: shiftStep } = element;
  const currentShift: number = getNumberFromPixels(element.style.left);
  const maxShift: number = 0;
  const nextShift = currentShift + shiftStep;
  return nextShift >= maxShift ? maxShift : nextShift;
};

export default calcPrevScrollShift;
