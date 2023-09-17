import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  font-size: 28px;
  font-weight: 600;
  color: #c466b2;

  &:hover {
    color: #e9c864;
  }
`;
