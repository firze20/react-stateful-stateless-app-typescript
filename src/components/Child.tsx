import React from "react";

import {IChildProps} from './IChildProps';

export class Child extends React.Component<IChildProps, {}> {
  
    render() {
        return(
            <h1>Hey, my name is {this.props.name}!</h1>
        )
    }
}