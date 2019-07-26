import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginLayout from "./Layout/LoginLayout";

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div>home</div>,
        main: () => <div>This is home</div>
    }, {
        path: "/login",
        siderbar: () => <div>Login</div>,
        main:()=><LoginLayout/>
    },{
        path: "/xxk",
        sidebar: ()=><div>the siderbar</div>,
        main: () =><div>xxk</div>
      },
      {
        path: "/About",
        sidebar: () => <div>about</div>,
        main: () => <h2>This is about</h2>
      },
      {
        path: "/User",
        sidebar: () => <div>user</div>,
        main: () => <h2>This is User</h2>
      }
]

export default routes;