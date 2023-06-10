import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import { Link, useLocation } from 'react-router-dom';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 18px;
  background-color: #008c26;
  color: #fff;
  font-size: 1.2rem;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Nav = ({ onSearch }) => {
  const location = useLocation();
  
  return location.pathname !== '/' && (
    <NavContainer>
      <div>
        <NavLink to="/home" style={{fontWeight: "bold", fontSize: "1.2rem"}}>
          Home
        </NavLink>
        <NavLink to="/favorites" style={{fontWeight: "bold", fontSize: "1.2rem"}}>
          Favorites
        </NavLink>
        <NavLink to="/about" style={{fontWeight: "bold", fontSize: "1.2rem"}}>
          About
        </NavLink>
      </div>
      <SearchBar onSearch={onSearch}/>
    </NavContainer>
  );
};

export default Nav;
