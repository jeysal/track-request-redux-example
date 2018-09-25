import { of, concat, throwError } from 'rxjs';
import { mergeMap, catchError, startWith } from 'rxjs/operators';

import {
  markRequestAsFailed,
  markRequestAsPending,
  markRequestAsSuccessful,
} from '../actions/request';

/**
 * Emits a markRequestAsSuccessful after an emission,
 * emits a markRequestAsFailed before an error,
 * and emits a markRequestAsPending immediately.
 * For use in redux-observable epics;
 * should typically be used shortly after mapping to a request,
 * and always before catching errors to display them.
 */
export const trackRequest = (name, payload) => resp$ =>
  resp$.pipe(
    mergeMap(resp => of(resp, markRequestAsSuccessful(name, payload))),
    catchError(err =>
      concat(of(markRequestAsFailed(name, payload)), throwError(err)),
    ),
    startWith(markRequestAsPending(name, payload)),
  );
