import React from "react";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Layout/Header/Header";
import AddContact from "./components/Contacts/AddContact/AddContact";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
