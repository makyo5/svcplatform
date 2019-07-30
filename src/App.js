import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./Myredux/index";

import { BrowserRouter, Route,  Switch, Router } from "react-router-dom";

import LoginLayout from "./Layout/LoginLayout";
import HomeLayout from "./Layout/HomeLayout";
import AuthRoute from "./Layout/AuthRoute";



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/Login" component={LoginLayout} />
          <AuthRoute path="/Home" component={HomeLayout} />
        </Switch>
        </BrowserRouter>
    </Provider>
  );
}

export default App;