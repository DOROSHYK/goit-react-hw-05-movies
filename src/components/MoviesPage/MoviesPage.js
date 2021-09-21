import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getByQuery } from '../../services/api';
import Spinner from '../Spinner/Spinner';
import SearchForm from '../SearchForm/SearchForm';
import getQueryParams from '../../utils/getQueryParams';

class MoviesPage extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
    showAnnouncement: false,
  };

  componentDidMount() {
    const query = getQueryParams(this.props.location.search);
    if (query.query) {
      this.fetchWithQuery(query.query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (nextQuery && prevQuery !== nextQuery && nextQuery.length > 2) {
      this.fetchWithQuery(nextQuery);
    }
  }

  fetchWithQuery = query => {
    this.setState({ loading: true });
    getByQuery(query)
      .then(data => {
        if (!data.results.length) {
          this.setState({ showAnnouncement: true });
        } else {
          this.setState({ showAnnouncement: false, movies: data.results });
        }
      })
      .catch(err => this.setState({ error: err }))
      .finally(() => this.setState({ loading: false }));
  };

  submitQueryChangedHandler = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, loading, showAnnouncement } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.submitQueryChangedHandler} />
        {loading ? (
          <Spinner />
        ) : showAnnouncement ? (
          <p>No results. Try again</p>
        ) : movies.length ? (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <NavLink
                  to={{
                    pathname: `${this.props.match.path}/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {movie.title ? movie.title : movie.original_title}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

export default MoviesPage;
