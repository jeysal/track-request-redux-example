import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { owner: '', repo: '' };
  }

  changeOwner = ({ target: { value } }) => {
    this.setState({ owner: value });
  };

  changeRepo = ({ target: { value } }) => {
    this.setState({ repo: value });
  };

  render() {
    const { owner, repo } = this.state;
    return (
      <form>
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
        <Link to={`/${owner}/${repo}`}>
          {/* putting a button into an anchor like this is probably not spec-compliant at all,
          but it manages to trigger the navigation and prevent the form action
          both on form submit (e.g. return key) and on link click */}
          <button type="submit">Show contributors</button>
        </Link>
      </form>
    );
  }
}

export default Form;
