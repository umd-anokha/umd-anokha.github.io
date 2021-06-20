import { Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import styled, { createGlobalStyle, css } from "styled-components";

const StyledImage = styled(GatsbyImage)`
  background-color: var(--color-transparent-background);
  border-radius: 5px;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 1s;
`;

interface Props {
  file: string;
  name: string;
}

// export function Headshot({}: Props) {
//   return <StyledImage ></StyledImage>;
// }
