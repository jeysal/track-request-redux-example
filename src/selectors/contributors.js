import { createSelector } from 'reselect';

import { getRequest } from './request';

export const getContributors = ({ contributors }) => contributors;
export const getNames = createSelector(
  getContributors,
  ({ names }) => names,
);

export const CONTRIBUTORS_REQUEST = 'CONTRIBUTORS_REQUEST';
export const getContributorsRequest = (owner, repo) =>
  // getRequest(CONTRIBUTORS_REQUEST, `${owner}/${repo}`);
  getRequest(CONTRIBUTORS_REQUEST);
