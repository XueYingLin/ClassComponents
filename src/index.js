import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component {
  //"C"declare you "CLASS"
  constructor() {
    //"C" build out your "CONSTRUCTOR"React
    super();
    this.state = {
      //you can read, delete, and update at state
      name: "Ryan" //read name property
    };
  }
  render() {
    //"R" don't forget to call your "RENDER"
    return (
      <div className="App">
        <h1>Hello {this.state.name}</h1>
        <h2>Start editing to see magic happen!</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
