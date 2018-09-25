import {
  MARK_REQUEST_AS_PENDING,
  MARK_REQUEST_AS_PROLONGED,
  MARK_REQUEST_AS_SUCCESSFUL,
  MARK_REQUEST_AS_FAILED,
} from '../actions/request';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case MARK_REQUEST_AS_PENDING:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          [action.payload]: 'pending',
        },
      };
    case MARK_REQUEST_AS_PROLONGED:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          [action.payload]: 'prolonged',
        },
      };
    case MARK_REQUEST_AS_SUCCESSFUL:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          [action.payload]: 'successful',
        },
      };
    case MARK_REQUEST_AS_FAILED:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          [action.payload]: 'failed',
        },
      };
    default:
      return state;
  }
};
