import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  color: black;

  &.active {
    color: crimson;
  }
  &:hover:not(.active) {
    background-color: lightblue;
  }
`;
