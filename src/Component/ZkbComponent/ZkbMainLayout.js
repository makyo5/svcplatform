import React, { Component } from "react";
import { Route,Link } from "react-router-dom";
import { Container, Grid, Segment } from "semantic-ui-react";

import { SubRoutes } from "../../routes";


const ZkbNav = () => (
    <Segment.Group horizontal>
        <Segment>
            主页
        </Segment>
        <Segment>
            不良事件
        </Segment>
    </Segment.Group>
)

const ZkbScreen = () => (
    <div>
        
    </div>
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
                    <ZkbScreen />
                </Grid>
            </Container>
        )
    }
}

export default ZkbMainLayout;