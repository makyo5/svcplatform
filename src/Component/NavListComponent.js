import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button, Item } from "semantic-ui-react";

import { SubRoutes } from "../routes";


const NavListComponent = () => (
    <Item.Group>        
    {SubRoutes.map((route, index) => (
        <Item key={index}>
            <Link 
                key={index}
                to={route.path}
            >
                <Button content={route.title}/>
            </Link>
        </Item>
    ))}
    </Item.Group>
)

export { NavListComponent};