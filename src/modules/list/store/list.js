import { BehaviorSubject } from 'rxjs';

const intialState = {
  items: [],
  input: ''
};

const list = new BehaviorSubject(intialState);

/**
 *
 * @param {*} item
 */
export const addItem = item =>
  list.next({
    ...list.getValue(),
    input: '',
    items: list.getValue().items.concat({ name: item })
  });

/**
 *
 * @param {*} input
 */
export const updateInput = input =>
  list.next({
    ...list.getValue(),
    input
  });

export const list$ = list.asObservable();
