export const MARK_REQUEST_AS_PENDING = 'MARK_REQUEST_AS_PENDING';
export const MARK_REQUEST_AS_PROLONGED = 'MARK_REQUEST_AS_PROLONGED';
export const MARK_REQUEST_AS_SUCCESSFUL = 'MARK_REQUEST_AS_SUCCESSFUL';
export const MARK_REQUEST_AS_FAILED = 'MARK_REQUEST_AS_FAILED';

export const markRequestAsPending = (name, payload) => ({
  type: MARK_REQUEST_AS_PENDING,
  name,
  payload,
});
export const markRequestAsProlonged = (name, payload) => ({
  type: MARK_REQUEST_AS_PROLONGED,
  name,
  payload,
});
export const markRequestAsSuccessful = (name, payload) => ({
  type: MARK_REQUEST_AS_SUCCESSFUL,
  name,
  payload,
});
export const markRequestAsFailed = (name, payload) => ({
  type: MARK_REQUEST_AS_FAILED,
  name,
  payload,
});
