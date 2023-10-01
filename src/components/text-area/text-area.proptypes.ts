import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

export interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  placeholder?: string;
}
