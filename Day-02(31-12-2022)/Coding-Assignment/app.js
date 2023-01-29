import React from "react";
import ReactDOM from "react-dom/client";

// * Using Javascript
const jscontainer = document.getElementById("js-container");
const h1 = document.createElement("h1");
h1.innerText = "Using Javascript";
const h2 = document.createElement("h2");
h2.innerText = "Namaste React";
const h3 = document.createElement("h3");
h3.innerText = "Hello world";
jscontainer.append(h1, h2, h3);

//* Using React
//? creates react element and return javascript object
const headingOne = React.createElement(
  "h1",
  { key: "headingOne" },
  "Using React"
);
const headingTwo = React.createElement(
  "h2",
  { key: "headingTwo" },
  "Namaste React"
);
const headingThree = React.createElement(
  "h3",
  { key: "headingThree" },
  "Hello World"
);
//? nested react element
const reactContainer = React.createElement(
  "div",
  {
    id: "react-container",
  },
  [headingOne, headingTwo, headingThree]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingOne); //? This will overwrite by below render method.
root.render(reactContainer);
