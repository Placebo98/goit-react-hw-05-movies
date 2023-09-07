import HomePage from 'Pages/Home/HomePage';
import { OneMoviePage } from 'Pages/OneMoviePage/OneMoviePage';
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
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:id" element={<OneMoviePage />} />
      </Routes>
    </div>
  );
};
