import React, { Component } from "react";
import { Route,Link } from "react-router-dom";
import { Container, Grid, Segment } from "semantic-ui-react";

import { SubRoutes } from "../../routes";


const ZkbNav = () => (
    <Segment.Group horizontal>
        <Segment>
            <Link to="/zkb">
                质控办-主页
            </Link>
        </Segment>
        <Segment>
            <Link to="/zkb/blsj">
                不良事件
            </Link>
        </Segment>
    </Segment.Group>
)


class ZkbMainLayout extends Component {

    render() {
        return (
            <Container>
                <Grid>
                    <Grid.Row>
                        <ZkbNav />
                    </Grid.Row>
                </Grid>
                <Grid>
                <Route />
                </Grid>
            </Container>
        )
    }
}

export default ZkbMainLayout;