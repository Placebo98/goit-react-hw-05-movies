import styled from 'styled-components';

export const CastContainer = styled.div`
  padding: 15px 10px;
`;

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 0;
  list-style: none;
`;

export const CastItem = styled.li`
  background-color: #f7f7f7;
  padding: 3px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  box-shadow: 1px 9px 28px -13px rgba(189, 182, 189, 1);
`;

export const CastImg = styled.img`
  border-radius: 10px;
  max-width: 100%;
`;

export const CastItemActorName = styled.p`
  font-size: 25px;
  margin: 10px 0;
`;

export const CastItemCharacterName = styled.p`
  font-size: 20px;
  margin: 10px 0;
`;
