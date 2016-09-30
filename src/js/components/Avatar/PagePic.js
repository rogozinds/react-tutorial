import React from "react";
export default class PagePic extends React.Component {
    render(){
        return(
        <div>
            <img src={'https://graph.facebook.com/' + this.props.pagename + '/picture'} />
        </div>
        )
    }
}