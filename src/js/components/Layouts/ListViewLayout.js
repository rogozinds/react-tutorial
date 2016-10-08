import React from "react";
import ListView from "./../ListView/ListView"
import { Button } from 'react-bootstrap';
export default class ListViewLayout extends React.Component {
  render() {
    return (
      <div style={{height:900}}>
        <ListView numRows={3000} />
      </div>
    );
  }
}
