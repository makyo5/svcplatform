import React, { Component } from "react";
import { connect } from "react-redux";
import { SetUserLoginIn } from "../Myredux/reducer";
import { Container, Grid, Button, Form, Icon } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

class LoginLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empno: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    let o = {};
    o[event.target.name] = event.target.value;
    this.setState(o);
  }

  handleLoginBtnClick = event => {
    event.preventDefault();
    if (this.state.empno === "1" && this.state.password === "1") {
      this.props.handleLoginBtnClick();
    }
  }

  render() {
    console.log(this.props.isLogin);
    if (this.props.isLogin===true) {
      return (
        <Redirect to="/home" />
      )
    }
    return (
      <Container>
        <Grid columns={3}>
          <Grid.Column>
            <Form>
              <Form.Field>
                <label>ID</label>
                <input
                  name="empno"
                  onChange={this.handleChange}
                  value={this.state.empno}
                />
              </Form.Field>
              <Form.Field>
                <label>password</label>
                <input
                name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </Form.Field>
              <Form.Field>
                <Button primary animated="vertical" onClick={this.handleLoginBtnClick}>
                  <Button.Content visible>
                    <Icon name="sign in alternate" />
                  </Button.Content>
                  <Button.Content hidden>
                  登陆
                  </Button.Content>
                </Button>
              </Form.Field>
            </Form>
          </Grid.Column>
          <Grid.Column>
            成都市第五人民医院信息服务
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.isLogin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLoginBtnClick:()=>dispatch(SetUserLoginIn)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginLayout);
