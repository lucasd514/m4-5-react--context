import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { GameContext } from "../components/GameContext";

const Home = ({
  calculateCookiesPerSecond,
  stuff,
  cookies,
  setCookies,
  setItems,
  items,
}) => {
  const { numCookies } = useContext(GameContext);

  React.useEffect(() => {
    document.title = `${numCookies} cookies - Cookie Clicker Workshop`;

    return () => {
      document.title = "Cookie Clicker Workshop";
    };
  });

  return (
    <Wrapper>
      <Title>Cookie game</Title>
      <Link to="/game">Go to game</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 32px;
`;

export default Home;
