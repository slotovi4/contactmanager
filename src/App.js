import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Layout/Header/Header";
import AddContact from "./components/Contacts/AddContact/AddContact";
import About from "./components/Pages/About/About";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about/" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
