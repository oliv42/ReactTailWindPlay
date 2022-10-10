import React, { Component } from "react";
import "./App.css";
import Counts from "./components/Counts";

class App extends Component {
  render() {
    return (
      <div className="h-[100vh] bg-slate-500">
        <Counts />
      </div>
    );
  }
}

export default App;
