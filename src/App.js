import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

import "./App.css";
import "./colortheme.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import MyWork from "./pages/MyWork";
import Contact from "./pages/Contact";

class App extends Component {
  state = {
    theme: 1,
    currentTheme: "dark",
    themes: {
      light: {
        "background-color": "#d4d4dc",
        "text-color": "#141518",
        "cta-border-color": "#141518",
        "highlight-col": "#feda6a",
        "sub-heading-col": "#8d8d8d",
        "tag-col": "#8d8d8d",
        "text-highlight": "#141518"
      },
      dark: {
        "background-color": "#1d1e22",
        "text-color": "#d4d4dc",
        "text-highlight": "#feda6a",
        "cta-border-color": "#feda6a",
        "highlight-col": "#feda6a",
        "sub-heading-col": "#8d8d8d",
        "tag-col": "#676767",
        "code-method": "#feda6a",
        "code-var": "#39C2E6",
        "code-col": "#CFCFD3",
        "code-alt": "#9899C5",
        "code-string": "#ABE67E",
        "code-dot": "#3C3E46"
      }
    },
    checked: true
  };

  setTheme() {
    const theme = this.state.themes[this.state.currentTheme];
    Object.keys(theme).forEach(key => {
      const cssKey = `--${key}`;
      const cssValue = theme[key];
      document.body.style.setProperty(cssKey, cssValue);
    });
  }

  toggleTheme = () => {
    if (this.state.currentTheme === "light" && this.state.checked === false) {
      this.setState({ checked: true, currentTheme: "dark" });
    } else {
      this.setState({ currentTheme: "light", checked: false });
    }
  };

  componentDidMount() {
    this.setTheme();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentTheme !== prevState.currentTheme) {
      this.setTheme();
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <div className="appBody">
            <Route
              path="/"
              exact
              render={() => (
                <Home
                  toggleTheme={this.toggleTheme}
                  checked={this.state.checked}
                />
              )}
            />
            <Route path="/about" exact component={About} />
            <Route path="/skills" exact component={Skills} />
            <Route path="/mywork" exact component={MyWork} />
            <Route path="/contact" exact component={Contact} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
