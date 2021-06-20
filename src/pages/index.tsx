import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";
import { Header } from "./header";
import { GlobalStyles } from "./styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HR = styled.hr`
  background-color: #555;
  border-width: 1px;
  opacity: 0.5;
  width: 100%;
`;

const Main = styled.main`
  color: var(--color-light);
  display: flex;
  flex-direction: column;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.2em;
  justify-content: center;
  line-height: 2em;
  max-width: 768px;
  margin: 0 auto;
`;

const H2 = styled.h2`
  font-family: "Courier New", Courier, monospace;
  text-align: center;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto auto;
`;

// markup
function IndexPage() {
  return (
    <Wrapper>
      <GlobalStyles />
      <title>UMD Anokha</title>
      <Header />
      <StaticImage alt="team" placeholder="blurred" src="../images/cute.jpg" />
      <Main>
        <section id="about">
          <H2>About Us</H2>
          <p>
            Anokha is the University of Maryland's one and only co-ed South
            Asian American Fusion A Cappella group. Anokha or अनोखा in Hindi
            means rare or unique. Comprised of a group of talented young men and
            women, Anokha seeks to spread Indian and American culture and music
            to the community by performing popular Indian film and pop songs, in
            an array of languages including Hindi, Tamil, and Punjabi, as well
            as by performing English pop, rock, R&B, and alternative music.
            Founded in 2001, Anokha has established itself as one of the oldest
            and most unique South Asian Fusion A Cappella teams in the country.
          </p>
        </section>

        <section>
          <ul>
            <li>
              1<sup>st</sup> Place, Jeena 2020 @ UT Austin
            </li>
            <li>
              2<sup>nd</sup> Place, Jeena 2019 @ UT Austin
            </li>
            <li>Invited to ASA's National A Cappella Competition</li>
            <li>
              1<sup>st</sup> Place, SingStrong Shruti 2019 @ NYU
            </li>
            <li>
              1<sup>st</sup> Place, Sahana 2018 @ UCLA
            </li>
            <li>
              3<sup>rd</sup> Place, Jeena 2018 @ UT Austin
            </li>
          </ul>
        </section>

        <HR />

        <section id="current">
          <H2>Meet the Team</H2>
          <ImageGrid>
            <StaticImage
              alt="UMD Anokha"
              src="../images/headshots/aarthi.jpg"
              imgStyle={{
                borderRadius: 200,
              }}
            />
            <StaticImage
              alt="UMD Anokha"
              src="../images/headshots/andrew.jpg"
              imgStyle={{
                borderRadius: 200,
              }}
            />
            <StaticImage
              alt="UMD Anokha"
              src="../images/headshots/ojas.jpg"
              imgStyle={{
                borderRadius: 200,
              }}
            />
            <StaticImage
              alt="UMD Anokha"
              src="../images/headshots/medha.jpg"
              imgStyle={{
                borderRadius: 200,
              }}
            />
            <StaticImage
              alt="UMD Anokha"
              src="../images/headshots/sasvi.jpg"
              imgStyle={{
                borderRadius: 200,
              }}
            />
          </ImageGrid>
        </section>
      </Main>
    </Wrapper>
  );
}

export default IndexPage;
