import React from "react";

import ListViewOpt from "./ListView/ListViewOpt"
export default class Layout extends React.Component {
  render() {
    return (
      <div style={{height:900}}>
        <ListViewOpt renderRowAtIndex={0} rowHeight={30} numRows={300000} />
      </div>
    );
  }
}
