import React from "react";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contact />
      </div>
    );
  }
}

export default App;
