import { createSelector } from 'reselect';

const getRequestState = ({ request }) => request;
const getRequestsByName = name =>
  createSelector(getRequestState, requests => requests[name] || {});
export const getRequest = (name, payload) =>
  createSelector(getRequestsByName(name), requests => requests[payload]);
