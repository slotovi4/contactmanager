import React from "react";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="Johh Doe" email="jdoe@gmail.com" phone="555-555-5555" />
        <Contact
          name="Karen Smith"
          email="karen@gmail.com"
          phone="333-333-3333"
        />
      </div>
    );
  }
}

export default App;
