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
    const { searchQuery } = this.state;
    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={searchQuery}
          onChange={this.changeHandler}
          // required
        ></input>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
