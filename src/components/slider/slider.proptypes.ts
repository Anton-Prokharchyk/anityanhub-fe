import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface SliderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  type: 'full-width' | 'mini';
}
