import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface SearchBarProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder?: string;
}
