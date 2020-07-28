import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";
import usePersisted from "../hooks/use-presisted.hook";
import { GameContext } from "../components/GameContext";

function App(props) {
  const {
    numCookies,
    setNumCookies,
    purchasedItems,
    setPurchasedItems,
    stuff,
    calculateCookiesPerSecond,
  } = useContext(GameContext);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home
            cookies={numCookies}
            setCookies={setNumCookies}
            items={purchasedItems}
            setItems={setPurchasedItems}
            stuff={stuff}
            calculateCookiesPerSecond={calculateCookiesPerSecond}
          />
        </Route>
        <Route path="/game">
          <Game
            cookies={numCookies}
            setCookies={setNumCookies}
            items={purchasedItems}
            setItems={setPurchasedItems}
            stuff={stuff}
            calculateCookiesPerSecond={calculateCookiesPerSecond}
          />
        </Route>
      </Router>
    </>
  );
}

export default App;
