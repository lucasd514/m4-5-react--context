import React, { useState, useEffect } from "react";

function usePersisted(name, initialValue) {
  window.localStorage.clear();

  //This is to get the Value from Local Storage and put it in a state variable
  const [value, setValue] = useState(() => {
    //This functions decides if to return the initial value or
    //return a value from localStorage
    // console.log(name);
    // console.log(initialValue);
    // console.log(window.localStorage);
    const storageValue = window.localStorage.getItem(name);
    // console.log(storageValue);
    if (
      storageValue === 0 ||
      storageValue === "undefined" ||
      storageValue === null
    ) {
      console.log("no value");
      return initialValue;
    } else {
      console.log("we have value");
      return JSON.parse(storageValue);
    }
  });

  console.log("this is the value", value);

  //   Take the value and put it in Local Storage
  useEffect(() => {
    window.localStorage.setItem(name, JSON.stringify(value));
  }, [name, value]);

  //Very Important
  return [value, setValue];
}

export default usePersisted;
