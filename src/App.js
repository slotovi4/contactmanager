import React from "react";
import "./App.css";
import Contact from "./components/Contact";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>The App Component</h1>
        <Contact />
      </div>
    );
  }
}

export default App;
