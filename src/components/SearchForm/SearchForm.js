import React, { Component } from 'react';

class SearchForm extends Component {
  state = {
    searchQuery: '',
  };

  changeHandler = e => {
    const value = e.target.value;
    this.setState({ searchQuery: value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.searchQuery}
          onChange={this.changeHandler}
          required
        ></input>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
