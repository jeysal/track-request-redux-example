import React from 'react';

import { Route } from 'react-router-dom';

import Form from './components/contributors/Form';
import List from './components/contributors/List';

export default () => (
  <div>
    <Form />
    <Route path="/:owner/:repo" component={List} />
  </div>
);
