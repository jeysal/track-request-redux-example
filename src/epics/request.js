import { timer } from 'rxjs';
import { filter, mapTo, mergeMap, takeUntil } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import {
  markRequestAsProlonged,
  MARK_REQUEST_AS_PENDING,
  MARK_REQUEST_AS_SUCCESSFUL,
  MARK_REQUEST_AS_FAILED,
} from '../actions/request';

const prolongedRequestEpic = action$ =>
  action$.pipe(
    ofType(MARK_REQUEST_AS_PENDING),
    mergeMap(({ name, payload }) =>
      timer(750).pipe(
        mapTo(markRequestAsProlonged(name, payload)),
        takeUntil(
          action$.pipe(
            ofType(MARK_REQUEST_AS_SUCCESSFUL, MARK_REQUEST_AS_FAILED),
            filter(req => req.name === name && req.payload === payload),
          ),
        ),
      ),
    ),
  );

export default prolongedRequestEpic;
