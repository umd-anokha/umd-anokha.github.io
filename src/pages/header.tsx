import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import styled, { createGlobalStyle, css } from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-transparent-background);
  border-radius: 5px;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 1s;
`;

const linkCss = css`
  color: var(--color-gray);
  text-decoration: none;

  &:hover {
    filter: brightness(1.25);
  }

  &:visited {
    color: var(--color-gray);
  }
`;

const StyledInternalLink = styled(Link)`
  ${linkCss}
`;

const Nav = styled.nav`
  display: flex;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
`;

const NavList = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin: 0;
  justify-content: center;
`;

const NavListItem = styled.li`
  margin: 0 1em;
`;

const StyledLink = styled.a`
  ${linkCss}
`;

export function Header() {
  return (
    <StyledHeader>
      <Nav>
        <NavList>
          <NavListItem>
            <StyledInternalLink to="/">Home</StyledInternalLink>
          </NavListItem>
          <NavListItem>
            <StyledInternalLink to="#about">About</StyledInternalLink>
          </NavListItem>
          <NavListItem>
            <StyledInternalLink to="/">News</StyledInternalLink>
          </NavListItem>
        </NavList>
        <NavList>
          <NavListItem>
            <StyledInternalLink to="/">
              <StaticImage
                alt="UMD Anokha"
                height={64}
                src="../images/redanokha.png"
              />
            </StyledInternalLink>
          </NavListItem>
        </NavList>
        <NavList>
          <NavListItem>
            <StyledInternalLink to="#current">Members</StyledInternalLink>
          </NavListItem>
          <NavListItem>
            <StyledLink href="mailto:anokhaumd@gmail.com" target="_blank">
              Contact
            </StyledLink>
          </NavListItem>
          <NavListItem>
            <StyledInternalLink to="/">Alumni</StyledInternalLink>
          </NavListItem>
        </NavList>
      </Nav>
    </StyledHeader>
  );
}
