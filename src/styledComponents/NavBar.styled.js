import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 8px gray;
  gap: 20px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: black;

  &.active {
    color: crimson;
  }
  &:hover:not(.active) {
    background-color: lightblue;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
`;
