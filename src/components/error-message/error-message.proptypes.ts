import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export default interface ErrorMessageProptypes
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement & HTMLSpanElement>,
    HTMLParagraphElement & HTMLSpanElement
  > {
  children?: ReactNode;
  Tag?: 'p' | 'span';
}
