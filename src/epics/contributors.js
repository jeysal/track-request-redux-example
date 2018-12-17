import { defer, EMPTY } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { SHOW_CONTRIBUTORS, updateNames } from '../actions/contributors';
import { CONTRIBUTORS_REQUEST } from '../selectors/contributors';
import { trackRequest } from '../util/request';

const fetchNames = async (owner, repo) => {
  let resp;
  do {
    resp = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/stats/contributors`,
      { headers: { accept: 'application/vnd.github.v3+json' } },
    );
    if (!resp.ok) throw new Error(resp.statusText);
  } while (resp.status === 202);

  const contributors = Array.from(await resp.json());
  const names = contributors.map(({ author: { login } }) => login);
  return updateNames(names);
};

const fetchContributorsEpic = action$ =>
  action$.pipe(
    ofType(SHOW_CONTRIBUTORS),
    switchMap(({ owner, repo }) =>
      defer(() => fetchNames(owner, repo)).pipe(
        // trackRequest(CONTRIBUTORS_REQUEST, `${owner}/${repo}`),
        trackRequest(CONTRIBUTORS_REQUEST),
        catchError(err => {
          alert(err);
          return EMPTY;
        }),
      ),
    ),
  );

export default fetchContributorsEpic;
