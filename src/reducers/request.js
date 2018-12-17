import {
  MARK_REQUEST_AS_PENDING,
  MARK_REQUEST_AS_PROLONGED,
  MARK_REQUEST_AS_SUCCESSFUL,
  MARK_REQUEST_AS_FAILED,
} from '../actions/request';

const initialState = {};

export default (state = initialState, action) => {
  const byName = state[action.name] || {};
  switch (action.type) {
    case MARK_REQUEST_AS_PENDING:
      const byPayload = byName[action.payload] || {};
      return {
        ...state,
        [action.name]: {
          ...byName,
          [action.payload]: {
            status: 'pending',
            placeholder: byPayload.placeholder || false,
          },
        },
      };
    case MARK_REQUEST_AS_PROLONGED:
      return {
        ...state,
        [action.name]: {
          ...byName,
          [action.payload]: { status: 'prolonged', placeholder: true },
        },
      };
    case MARK_REQUEST_AS_SUCCESSFUL:
      return {
        ...state,
        [action.name]: {
          ...byName,
          [action.payload]: { status: 'successful', placeholder: false },
        },
      };
    case MARK_REQUEST_AS_FAILED:
      return {
        ...state,
        [action.name]: {
          ...byName,
          [action.payload]: { status: 'failed', placeholder: false },
        },
      };
    default:
      return state;
  }
};
