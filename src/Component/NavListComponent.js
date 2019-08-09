import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button, Item } from "semantic-ui-react";

import { SubRoutes } from "../routes";


const NavListComponent = () => (
    <Item.Group> 
        <Item>
            <Link to="/dashboard">
                <Button content="仪表" />
            </Link>
        </Item>
        <Item>
            <Link to="/clinic">
            <Button content="门诊" />
            </Link>
        </Item>
        <Item>
            <Link to="/inp">
            <Button content="住院" />
            </Link>
        </Item>
        <Item>
            <Link to="/zkb">
            <Button content="质控" />
            </Link>
        </Item>
        <Item>
            <Link to="/xxk">
                <Button content="信息科" />
            </Link>
        </Item>
        
    </Item.Group>
)

export { NavListComponent};