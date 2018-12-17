import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showContributors } from '../../actions/contributors';
import { getNames, getContributorsRequest } from '../../selectors/contributors';

import Spinner from '../Spinner';

class List extends Component {
  componentDidMount() {
    this.props.fetchContributors();
  }

  componentDidUpdate(prevProps) {
    const { owner, repo } = this.props.match.params;
    const { owner: prevOwner, repo: prevRepo } = prevProps.match.params;

    if (owner !== prevOwner || repo !== prevRepo) {
      this.props.fetchContributors();
    }
  }

  render() {
    const {
      names,
      requestState: { placeholder },
    } = this.props;

    if (placeholder) {
      return <Spinner />;
    }

    return (
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (
  state,
  {
    match: {
      params: { owner, repo },
    },
  },
) => ({
  names: getNames(state),
  requestState: getContributorsRequest(owner, repo)(state),
});

const mapDispatchToProps = (
  dispatch,
  {
    match: {
      params: { owner, repo },
    },
  },
) => ({
  fetchContributors: () => dispatch(showContributors(owner, repo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
