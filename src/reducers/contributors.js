import { SHOW_CONTRIBUTORS, UPDATE_NAMES } from '../actions/contributors';

const initialState = {
  names: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CONTRIBUTORS:
      return initialState;
    case UPDATE_NAMES:
      const { names } = action;
      return { ...state, names };
    default:
      return state;
  }
};
