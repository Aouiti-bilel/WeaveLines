import React, { Component } from "react";

import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  }
}

export default App;
