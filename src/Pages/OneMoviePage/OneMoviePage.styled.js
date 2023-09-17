import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SingleFilmDataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilmWrapper = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  gap: 50px;
`;

export const FilmInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  padding: 0;
  padding-left: 30px;
`;

export const CastReviewsContainer = styled.div`
  display: flex;
  /* gap: 20px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// export const AddInfoTitle = styled.h2`
//   font-size: 40px;
//   margin: 0;
//   margin-bottom: 20px;
// `;

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 20px;
  gap: 20px;
`;

export const ItemLink = styled(Link)`
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  text-decoration: none;
  border: 0;
  cursor: pointer;
  width: 150px;
  height: 40px;
  color: #0a0909;
  border-radius: 10px;
  background-color: #c466b2;
  transition: background-color 200ms linear;

  &:hover,
  &:focus {
    background-color: #e9c864;
  }
`;

export const BackButton = styled(Link)`
  margin-bottom: 30px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  width: 150px;
  height: 40px;
  color: #000000;
  font-weight: 600;
  border-radius: 10px;
  background-color: #c466b2;
  transition: box-shadow 200ms linear, background-color 200ms linear;

  &:hover,
  &:focus {
    background-color: #e9c864;
  }
`;
