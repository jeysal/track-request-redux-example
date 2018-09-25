export const SHOW_CONTRIBUTORS = 'SHOW_CONTRIBUTORS';
export const UPDATE_NAMES = 'UPDATE_NAMES';

export const showContributors = (owner, repo) => ({
  type: SHOW_CONTRIBUTORS,
  owner,
  repo,
});
export const updateNames = names => ({ type: UPDATE_NAMES, names });
