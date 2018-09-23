import { defer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';

import { SHOW_CONTRIBUTORS, updateNames } from '../actions';

const fetchNames = async (owner, repo) => {
  let resp;
  do {
    try {
      resp = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/stats/contributors`,
        { headers: { accept: 'application/vnd.github.v3+json' } },
      );
      if (!resp.ok) throw new Error(resp.statusText);
    } catch (err) {
      alert(err);
    }
  } while (resp.status === 202);

  const contributors = Array.from(await resp.json());
  const names = contributors.map(({ author: { login } }) => login);
  return updateNames(names);
};

const fetchContributorsEpic = action$ =>
  action$.pipe(
    ofType(SHOW_CONTRIBUTORS),
    switchMap(({ owner, repo }) => defer(() => fetchNames(owner, repo))),
  );

export default combineEpics(fetchContributorsEpic);
