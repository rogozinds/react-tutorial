import React from "react";
export default class PagePic extends React.Component {
    render(){
        return(
        <div>
            <a href={'https://graph.facebook.com/' + this.props.pagename + '/picture'}>
                {this.props.pagename}
            </a>
        </div>
        )
    }
}