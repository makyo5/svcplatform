import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import store from "../Myredux";


class AuthRoute extends Component{
    constructor(props) {
        super(props);
        this.state={
            isLogin: this.props.isLogin
        }
    }
    

    render() {
        let isLogin = this.state.isLogin;
        const { component: Component, ...rest } = this.props;
        console.log(store.getState());
        return (
            <Route {...rest} render={
                props => {
                    return isLogin ? <Component {...props} />: <Redirect to="/login" />
                }
            }
            />
        )

    }
}

const mapStateToProps = state => {
    return {
      isLogin: state.isLogin
    }
}
  
export default connect(
    mapStateToProps
)(AuthRoute);