import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  box-shadow: 1px 9px 28px -13px rgba(189, 182, 189, 1);
  transition: box-shadow 200ms linear, transform 200ms linear,
    color 200ms linear;

  &:hover {
    box-shadow: 0px 27px 23px -9px rgba(189, 182, 189, 1);
    transform: translateY(-7px);
    color: #ff4500;
  }
`;

export const Img = styled.img`
  border-radius: 10px;
  max-width: 100%;

  &:hover {
    color: #ff4500;
  }
`;

export const FilmTitle = styled.h2`
  font-size: 17px;
  padding: 10px;
  margin: 0;
  color: #c466b2;
  transition: color 200ms linear;

  &:hover {
    color: #e9c864;
  }
`;
