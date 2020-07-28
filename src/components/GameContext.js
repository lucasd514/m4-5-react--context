import React from "react";
import usePersisted from "../hooks/use-presisted.hook";
import useInterval from "../hooks/use-interval.hook";
export const GameContext = React.createContext(null);

export const GameProvider = ({ children }) => {
  const [numCookies, setNumCookies] = usePersisted("use-cookies", 1000);

  const [purchasedItems, setPurchasedItems] = usePersisted("items", {
    cursor: 0,
    grandma: 0,
    farm: 0,
  });

  const stuff = [
    { id: "cursor", name: "Cursor", cost: 10, value: 1 },
    { id: "grandma", name: "Grandma", cost: 100, value: 10 },
    { id: "farm", name: "Farm", cost: 1000, value: 80 },
  ];

  const calculateCookiesPerSecond = (purchasedItems) => {
    return Object.keys(purchasedItems).reduce((acc, itemId) => {
      const numOwned = purchasedItems[itemId];
      const item = stuff.find((item) => item.id === itemId);
      const value = item.value;

      return acc + value * numOwned;
    }, 0);
  };

  useInterval(() => {
    setNumCookies(
      Number(numCookies) + calculateCookiesPerSecond(purchasedItems)
    );
  }, 1000);

  return (
    <GameContext.Provider
      value={{
        numCookies: Number(numCookies),
        setNumCookies,
        purchasedItems,
        setPurchasedItems,
        stuff,
        calculateCookiesPerSecond,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
