import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

//COMPONENTS
import Navbar from "./0_components/0_buttons/Navbar";

// PAGES
import Home from "./1_pages/Home";
import TheInitiative from "./1_pages/TheInitiative";
import TheOriginalSix from "./1_pages/TheOriginalSix";
import BecomeAnAvenger from "./1_pages/BecomeAnAvenger";

import CaptainAmerica from "./1_pages/0_heroes/CaptainAmerica";
import IronMan from "./1_pages/0_heroes/IronMan";
import Thor from "./1_pages/0_heroes/Thor";
import Hulk from "./1_pages/0_heroes/Hulk";
import BlackWidow from "./1_pages/0_heroes/BlackWidow";
import Hawkeye from "./1_pages/0_heroes/Hawkeye";

//STYLES
import { GlobalStyle } from "./2_styles/0_base/GlobalStyle";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div id="App">
          <div id="main_box">
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={1500}
                    classNames="fade"
                    onExit={node => {
                      node.style.position = "fixed";
                      node.style.top = 0 * window.scrollY + "px";
                    }}
                  >
                    <Switch location={location}>
                      <Route path="/" exact component={Home} />
                      <Route path="/the-initiative" component={TheInitiative} />
                      <Route
                        path="/the-original-six"
                        component={TheOriginalSix}
                      />
                      <Route
                        path="/become-an-avenger"
                        component={BecomeAnAvenger}
                      />

                      <Route
                        path="/captain-america"
                        component={CaptainAmerica}
                      />
                      <Route path="/iron-man" component={IronMan} />
                      <Route path="/thor" component={Thor} />
                      <Route path="/hulk" component={Hulk} />
                      <Route path="/black-widow" component={BlackWidow} />
                      <Route path="/hawkeye" component={Hawkeye} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </div>
          <Navbar />
        </div>
        <GlobalStyle />
      </Router>
    );
  }
}
