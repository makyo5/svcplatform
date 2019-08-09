import React from "react";
import LoginLayout from "./Layout/LoginLayout";

import * as ZkbComponent from "./Component/ZkbComponent";
import XxkMainLayout from "./Layout/XxkMainLayout";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home</div>,
    main: () => <div>This is home</div>
  }, {
    path: "/login",
    sidebar: () => <div>Login</div>,
    main: () => <LoginLayout />
  }, {
    path: "/About",
    sidebar: () => <div>about</div>,
    main: () => <h2>This is about</h2>
  }, {
    path: "/User",
    sidebar: () => <div>user</div>,
    main: () => <h2>This is User</h2>
  }
]

const SubRoutes = [
  {
    path: "/dashboard",
    exact:true,
    title: "总体",
    sidebar: () => <div>dash</div>,
    main:()=> <div>dashboard data</div>
  },  {
    path: "/clinic",
    title:"门诊数据",
    sidebar: () => <div>clinic</div>,
    main:()=> <div>this is clinic content</div>
  }, {
    path: "/inp",
    title: "住院数据",
    sidebar: () => <div>inpdata</div>,
    main:()=><div>inp data</div>
  }, {
    path: "/zkb",
    title:"质控办",
    sidebar: () => <div>zkb</div>,
    main: () => <ZkbComponent.ZkbMainLayout />    
  }, {
    path: "/zkb/blsj",
    title: "不良事件",
    sidebar: () => <div>blsj不良事件</div>,
    main:()=><div><ZkbComponent.ZkbBlsjComponent /></div>
  }, {
    path: "/xxk",
    sidebar: () => <div>信息科</div>,
    main: () => <div><XxkMainLayout/></div>
  }
]


export { routes, SubRoutes };