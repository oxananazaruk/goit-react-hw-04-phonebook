import styled from 'styled-components';

export const List = styled.ul`
  list-style: square;
  display: flex;
  gap: ${p => p.theme.spacing(2)};
  flex-direction: column;
  align-items: center;
`;

export const ListItem = styled.li`
  font-weight: 500;
  font-size: 18px;
`;
