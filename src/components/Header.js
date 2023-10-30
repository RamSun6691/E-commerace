import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../styles/Button";

const Header = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  return (
    <MainHeader>
      <NavLink to="/">
        {isAuthenticated ? (
          <div>
            <img src={user.picture} alt={user.name}  width="120px"
            height="80px" />
          </div>
        ) : (
          <img
            src="https://images.unsplash.com/photo-1681753526674-357d5fd21e5c?auto=format&fit=crop&q=80&w=1991&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="dd"
            width="120px"
            height="80px"
          />
        )}
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;

export default Header;
