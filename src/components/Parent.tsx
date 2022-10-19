import React from "react";
import {Child} from './Child';
import {IParentState} from './IParentState';

export class Parent extends React.Component<{}, IParentState> {
   
    constructor(props: any) {
        super(props);

        this.state = {
            name: 'Frarthur'
        };
    };

    //passing props

    render() {
        return (
            <Child name={this.state.name} />
        )
    }
}
