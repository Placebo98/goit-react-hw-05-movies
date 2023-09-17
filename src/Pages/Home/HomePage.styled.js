import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: #c466b2;
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 0;
`;

export const FilmLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding: 5px;
`;

export const Item = styled.li`
  list-style: none;
  background-color: #f7f7f7;
  padding: 3px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  box-shadow: rgba(189, 182, 189, 1);
`;
