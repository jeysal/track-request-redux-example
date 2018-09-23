import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
  render() {
    const { names } = this.props;
    return (
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ names }) => ({ names });

export default connect(
  mapStateToProps,
  null,
)(List);
