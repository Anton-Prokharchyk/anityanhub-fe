import { KeyboardEvent, KeyboardEventHandler } from 'react';

const ENTER_KEY_NAME = 'Enter';

const onKeyDown = (
  e: KeyboardEvent<HTMLElement>,
  handler: KeyboardEventHandler
) => {
  if (e.key === ENTER_KEY_NAME) handler(e);
};

export default onKeyDown;
