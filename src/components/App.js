import React, { Component } from "react";
import { GameActionBar, GamePlayground } from "./containers";
import ErrorBoundary from "./containers/Errors/ErrorBoundary";
import "../styles/App.css";

class App extends Component {
  // renders the header and deck components using error boundaries
  render() {
    return (
      <div className="container-fluid">
        <ErrorBoundary>
          <GameActionBar />
          <br />
        </ErrorBoundary>

        <ErrorBoundary>
          <GamePlayground />
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;
