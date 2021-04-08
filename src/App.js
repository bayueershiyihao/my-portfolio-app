import React from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import "./App.css";

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <FirstPage />
        <SecondPage />
      </div>
    );
  }
}

export default App;
