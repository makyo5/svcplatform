import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import { BrowserRouter, Route } from "react-router-dom";

import { NavListComponent } from "../Component/NavListComponent";
import { SubRoutes } from "../routes";

class HomeLayout extends Component {

    render() {
        return (
            <Container>
                <BrowserRouter>
                <Grid>
                    <Grid.Row>Title PlaceHolder</Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={2}>
                            <NavListComponent />
                        </Grid.Column>
                        <Grid.Column width={14}>
                                {SubRoutes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.main}
                                    />
                            ))}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </BrowserRouter>
            </Container>
        );
    }
}

export default HomeLayout;