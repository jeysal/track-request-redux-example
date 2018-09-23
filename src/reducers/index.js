import { UPDATE_NAMES } from '../actions';

const initialState = {
  names: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAMES:
      const { names } = action;
      return { ...state, names };
    default:
      return state;
  }
};
