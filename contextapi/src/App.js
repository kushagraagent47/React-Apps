import React, { useState, Fragment } from "react";
import "./App.css";
import Provider from "./provider.js";
import Context from "./context.js";

const App = () => {
  return (
    <div className="App">
      <h1>Context API</h1>
      <Provider>
        <Context.Consumer>
          {(context) => (
            <Fragment>
              <h3>Email: {context.data.accept}</h3>
              {/* <h3>
                Auth: {context.data.loggedin ? "Logged In" : "Logged Out"}
              </h3> */}
              <button onClick={() => context.isMissionAccepted()}>Check</button>
            </Fragment>
          )}
        </Context.Consumer>
      </Provider>
    </div>
  );
};

export default App;
