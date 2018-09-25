import { combineReducers } from 'redux';

import contributors from './contributors';
import request from './request';

export default combineReducers({ contributors, request });
