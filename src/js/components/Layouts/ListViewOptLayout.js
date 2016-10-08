import React from "react";
import ListViewOpt from "./../ListView/ListViewOpt"

export default class ListViewOptLayout extends React.Component {
  render() {
    return (
      <div style={{height:'1800px'}}>
        <ListViewOpt renderRowAtIndex={0} rowHeight={30} numRows={300000} />
      </div>
    );
  }
}
