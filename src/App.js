import React, { Component } from "react";
// import Sncode from "./components/sncode";
import "./App.css";

import Nav from "./components/Nav";
import AddItem from "./components/AddItem";

export default class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <AddItem />
      </>
    );
  }
}
