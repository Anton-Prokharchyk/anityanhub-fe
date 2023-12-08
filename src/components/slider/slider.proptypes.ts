import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface SliderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  width?: string;
  height?: string;
  type: 'full-width' | 'mini';
}
