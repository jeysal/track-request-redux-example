import React, { Component } from 'react';
import { showContributors } from '../../actions';
import { connect } from 'react-redux';

class Form extends Component {
  changeOwner = ({ target: { value } }) => {
    this.setState({ owner: value });
  };

  changeRepo = ({ target: { value } }) => {
    this.setState({ repo: value });
  };

  submit = event => {
    const { owner, repo } = this.state;
    this.props.onSubmit(owner, repo);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>
          Owner{' '}
          <input
            id="owner"
            type="text"
            name="owner"
            onChange={this.changeOwner}
          />
        </label>
        <br />
        <label>
          Repo{' '}
          <input id="repo" type="text" name="repo" onChange={this.changeRepo} />
        </label>
        <br />
        <button type="submit">Show contributors</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (owner, repo) => dispatch(showContributors(owner, repo)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Form);
