import { BehaviorSubject } from 'rxjs';

const intialState = {
  items: [],
  input: ''
};

export default new BehaviorSubject(intialState);
