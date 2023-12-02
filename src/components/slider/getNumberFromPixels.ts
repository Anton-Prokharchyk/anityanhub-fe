const getNumberFromPixels = (pixelString: string): number =>
  Number(pixelString.substring(0, pixelString.indexOf('px')) || pixelString);

export default getNumberFromPixels;
