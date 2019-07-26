import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./Myredux/index";

import { BrowserRouter, Route,  Switch } from "react-router-dom";

import LoginLayout from "./Layout/LoginLayout";
import  AuthRoute  from "./Layout/AuthRoute";

const aa=()=>(<div>aaaa auth</div>)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/Login" component={LoginLayout} />
          <AuthRoute path="/au" component={aa} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
