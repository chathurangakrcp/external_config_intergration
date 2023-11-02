import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: null,
    };
  }

  componentDidMount() {
    this.fetchConfig();
  }

  fetchConfig = async () => {
    try {
      const response = await fetch("./config.json");
      const data = await response.json();
      this.setState({ config: data });
    } catch (error) {
      console.error("Error fetching configuration:", error);
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
