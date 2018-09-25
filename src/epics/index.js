import { combineEpics } from 'redux-observable';

import contributors from './contributors';
import request from './request';

export default combineEpics(contributors, request);
