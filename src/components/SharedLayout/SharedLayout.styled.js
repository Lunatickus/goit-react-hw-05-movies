import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  font-size: 24px;
  color: black;

  &.active {
    color: purple;
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: purple;
  }
`;
