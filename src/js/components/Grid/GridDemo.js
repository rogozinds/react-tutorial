import React from "react";
import Grid from "./Grid"
export default class GridDemo extends React.Component {
    constructor() {
        super();

    };

    data = [{
        "group1": [
            {
                "name": "series/",
                "ref": "series/5/"
            }, {
                "name": "series4/",
                "ref": "series/4/"
            }, {
                "name": "series3/",
                "ref": "series/3/"
            }, {
                "name": "series2/",
                "ref": "series/2/"
            }
        ],
        "group2": [{
            "name": "film5/",
            "ref": "films/5/"
        }, {
            "name": "film4/",
            "ref": "films/4/"
        }, {
            "name": "film3/",
            "ref": "films/3/"
        }, {
            "name": "film2/",
            "ref": "films/2/"
        }
        ]
    ,
        "group3": [
            {
                "name": "foo/",
                "ref": "foo/5/"
            }, {
                "name": "foo4/",
                "ref": "foo/4/"
            }, {
                "name": "foo3/",
                "ref": "foo/3/"
            }, {
                "name": "foo2/",
                "ref": "foo/2/"
            }
        ]
    }
    ]
    mockData = [];

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateData() {
        for (var i = 0; i < 150; i++) {
            const l = this.data.length;
            this.mockData.push(this.data[0]);
        }
    }

    render() {
        this.generateData();
        return <div>
            <Grid data={this.mockData}></Grid>
        </div>
    }
}