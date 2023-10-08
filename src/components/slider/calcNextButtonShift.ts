const calcNextScrollShift = (element: HTMLElement): number => {
  const { clientWidth: shiftStep, scrollWidth } = element;
  const currentShift: number =
    +element.style.left.substring(0, element.style.left.indexOf('px')) ||
    +element.style.left;
  const maxShift = -scrollWidth + shiftStep;
  const nextShift = currentShift - shiftStep;
  return nextShift <= maxShift ? maxShift : nextShift;
};

export default calcNextScrollShift;
