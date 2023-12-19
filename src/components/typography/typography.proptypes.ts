import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TypographyProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement & HTMLSpanElement & HTMLParagraphElement>,
    HTMLHeadingElement & HTMLSpanElement & HTMLParagraphElement
  > {
  children: ReactNode;
  Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  weight?: 'bold' | 'normal' | 'light';
  color?: 'primary' | 'accent' | 'error' | 'disabled';
  // TODO: add fontSize property
}
