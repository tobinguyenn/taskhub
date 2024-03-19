import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function createOnClickHandler(handler) {
  return function onClickHandler(event) {
    handler(event);
  };
}
