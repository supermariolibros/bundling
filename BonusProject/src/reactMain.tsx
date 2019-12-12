import React from "react";
import ReactDOM from "react-dom";
import { StupidComponent } from "./stupidComponent";
const mystylo = require('./mystyles.scss');
console.log(`Estamos en : ${process.env.NODE_ENV}`);
console.log(`con URL : ${process.env.URL}`);

ReactDOM.render(
  <div className={mystylo.pinkBackground}>
    <h1>Hello from React DOM</h1>
    <StupidComponent/>
  </div>,

  document.getElementById("root")
);
