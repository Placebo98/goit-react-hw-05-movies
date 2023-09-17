import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { List, LinkStyle } from '../Layout/layoyt.styled';

export const Layout = () => {
  return (
    <div>
      <nav>
        <List>
          <li>
            <LinkStyle to="/">Home</LinkStyle>
          </li>
          <li>
            <LinkStyle to="/movies">Movies</LinkStyle>
          </li>
        </List>
      </nav>{' '}
      <hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
