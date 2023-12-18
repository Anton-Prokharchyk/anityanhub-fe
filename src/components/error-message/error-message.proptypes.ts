import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export default interface ErrorMessageProptypes
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children?: ReactNode;
  Tag?: 'p' | 'span';
}
