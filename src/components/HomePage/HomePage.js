import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getTrendingMovies } from '../../services/api';
import routes from '../../routes';
import Spinner from '../Spinner/Spinner';
import st from './HomePage.module.css';
class HomePage extends Component {
  state = {
    films: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    getTrendingMovies()
      .then(data => {
        this.setState({ films: data.results });
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { films, loading } = this.state;
    return (
      <section className={st.container}>
        <div className={st.filmCardContainer}>
          <h2>Trending this week</h2>
          {loading ? (
            <Spinner />
          ) : films.length ? (
            <ul className={st.filmCard}>
              {films.map(film => (
                <li key={film.id} className={st.filmCardList}>
                  <NavLink
                    to={{
                      pathname: `${routes.movies}/${film.id}`,
                      state: { from: this.props.location },
                    }}
                    className={st.filmCardLink}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                      alt=""
                      className={st.posterSize}
                    />
                    <h2 className={st.title}>
                      {film.title ? film.title : film.original_name}
                    </h2>
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>
    );
  }
}

export default HomePage;
