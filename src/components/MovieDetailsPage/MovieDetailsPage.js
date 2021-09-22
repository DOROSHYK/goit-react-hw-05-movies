import React, { Component } from 'react';
import { getMovieById } from '../../services/api';
import { NavLink, Route } from 'react-router-dom';
import styles from './MovieDetailsPage.module.css';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import Error from '../Error/Error';
import noPosterImage from '../../utils/no-poster.jpg';
import routes from '../../routes';

class MoviesDetailsPage extends Component {
  state = {
    film: {},
    from: '',
  };

  componentDidMount() {
    getMovieById(this.props.match.params.movieId).then(film =>
      this.setState({ film }),
    );
  }

  goBackHandler = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      this.props.history.push(state.from);
      return;
    }
    this.props.history.push(routes.movies);
  };

  render() {
    const { film } = this.state;
    if (film) {
      const {
        poster_path,
        title,
        original_title,
        budget,
        overview,
        release_date,
        runtime,
        vote_average,
        id,
      } = film;
      return (
        <div className={styles.movieDetailsContainer}>
          {/* <button onClick={this.goBackHandler}>Go back</button> */}
          <div className={styles.filmCard}>
            <h3 className={styles.title}>{title && original_title}</h3>

            <div className={styles.imageWrp}>
              <img
                width="240px"
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : noPosterImage
                }
                alt={title && original_title}
              />
            </div>

            <div className={styles.textContent}>
              <p>
                <span className={styles.smallHeaders}>runtime:</span> {runtime}{' '}
                minutes
              </p>
              <h4 className={styles.smallHeaders}>Overview</h4>
              <p>{overview}</p>
              <p>
                <span className={styles.smallHeaders}>release-date:</span>{' '}
                {release_date}
              </p>
              <p>
                <span className={styles.smallHeaders}>average-vote:</span>{' '}
                {vote_average}
              </p>
              <p>
                <span className={styles.smallHeaders}>budget:</span> {budget} $
              </p>
            </div>
          </div>

          {this.props.location.state ? (
            <div>
              <NavLink
                className={styles.blockLink}
                to={{
                  pathname: `${this.props.match.url}/cast`,
                  state: { from: this.props.location.state.from },
                }}
              >
                Cast
              </NavLink>
              <NavLink
                className={styles.blockLink}
                to={{
                  pathname: `${this.props.match.url}/reviews`,
                  state: { from: this.props.location.state.from },
                }}
              >
                Reviews
              </NavLink>
            </div>
          ) : (
            <div>
              <NavLink className={styles.blockLink} to={`/movies/${id}/cast`}>
                Cast
              </NavLink>
              <NavLink
                className={styles.blockLink}
                to={`/movies/${id}/reviews`}
              >
                Reviews
              </NavLink>
            </div>
          )}

          <Route
            path={`${this.props.match.path}/cast`}
            component={Cast}
          ></Route>
          <Route
            path={`${this.props.match.path}/reviews`}
            component={Reviews}
          ></Route>
        </div>
      );
    } else {
      return <Error />;
    }
  }
}
export default MoviesDetailsPage;
