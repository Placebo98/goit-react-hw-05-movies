import HomePage from 'Pages/Home/HomePage';
import MoviesPage from 'Pages/Movies/Movies';
import { OneMoviePage } from 'Pages/OneMoviePage/OneMoviePage';
import { Cast } from 'components/Cast/Cast';
import { Link, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        {/* <Route path="/movies/:id" element={<OneMoviePage />} /> */}
        <Route path="/movies/:id" element={<OneMoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route />
        </Route>
      </Routes>
    </div>
  );
};
