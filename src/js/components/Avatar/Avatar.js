import React from "react";
import PagePic from "./PagePic"
import PageLink from "./PageLink"
export default class Avatar extends React.Component {


    render() {
        return(
            <div>
                <PagePic pagename={this.props.pagename}></PagePic>
                <PageLink pagename={this.props.pagename}></PageLink>
            </div>
        )
    }
}