import React from "react";
export default class HelloWorld extends React.Component {
    constructor() {
        super();

    };
    render() {
        return ( <div style={{margin:'10px'}}>
            Hello, World!
        </div>
        );
    }
}