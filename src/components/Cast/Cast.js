import { Component } from 'react';
import defaultImg from '../../utils/default-img.png';
import styles from './cast.module.css';
import Spinner from '../Spinner/Spinner';
import { getCast } from '../../services/api';

class Cast extends Component {
  state = {
    cast: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    getCast(this.props.match.params.movieId)
      .then(data => this.setState({ cast: data.cast }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { cast, loading } = this.state;
    return loading ? (
      <Spinner />
    ) : cast.length ? (
      <ul className={styles.castList}>
        {cast.map(({ id, profile_path, name }) => (
          <li key={id}>
            <img
              width="140px"
              height="210px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : defaultImg
              }
              alt={name}
            />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No information about cast</p>
    );
  }
}

export default Cast;
