import React from "react";
export default class Item extends React.Component {
    phrases = [
        "Make America great again!",
        "We need to build the wall!",
        "We have this building sold to China",
        "I hire people, they do a web site.",
        "And remember the $5 billion web site?... I have so many web sites, I have them all over the place.",
        "It’s nice. I don’t need anybody’s criminals.",
        "That’s the kind of thinking you need for this country.",
        "These liberal clowns!",
        "Graduated last in their class--dummy!",
        "I've just made it. That's true, I'm the most successful."
    ]
    style = {

    }
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render() {
        const n = this.getRandomInt(0,this.phrases.length-1)
        return <div>
            {this.props.number +" " +this.phrases[n]}
        </div>
    }
}