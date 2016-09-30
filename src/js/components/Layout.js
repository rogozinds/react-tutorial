import React from "react";

import ListViewOpt from "./ListView/ListViewOpt"
import Avatar from "./Avatar/Avatar"
export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div style={{height:900}}>
        <ListViewOpt renderRowAtIndex={0} rowHeight={30} numRows={300000} />
      </div>
    );
  }
}
