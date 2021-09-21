import React, { Component } from 'react';
import { getReviews } from '../../services/api';
import Spinner from '../Spinner/Spinner';

class Reviews extends Component {
  state = {
    reviews: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    getReviews(this.props.match.params.movieId)
      .then(data => {
        if (data.results) {
          this.setState({ reviews: data.results });
        }
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { reviews, loading } = this.state;

    return loading ? (
      <Spinner />
    ) : reviews.length ? (
      <ul>
        {reviews.map(({ id, author, content, url }) => (
          <li key={id}>
            <h5>{author}</h5>
            <p>{content}</p>
            <a href={url}>Link for review</a>
          </li>
        ))}
      </ul>
    ) : (
      <p>this movie has not review</p>
    );
  }
}

export default Reviews;
