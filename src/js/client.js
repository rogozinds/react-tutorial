import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute,hashHistory} from 'react-router';
import ListViewLayout from "./components/Layouts/ListViewLayout";
import ListViewOptLayout from "./components/Layouts/ListViewOptLayout";
import ToDoList from "./components/ToDoList/ToDoList";

const app = document.getElementById('app');
ReactDOM.render(
    <div>
        <Router history={hashHistory}>
            <Route path="/">
                <IndexRoute component={ToDoList}></IndexRoute>
                <Route path="listview" component={ListViewLayout}></Route>
                <Route path="listviewopt" component={ListViewOptLayout}></Route>
            </Route>
        </Router>
    </div>  , app
);
