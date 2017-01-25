'use strict';

// external modules
import React from 'react';
import ReactDOM from 'react-dom';

// using es6s destructuring feature to pull out all the required variables from the `react-route` module
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

// load foundation
$(document).foundation();

// custom app css
require('style!css!sass!applicationStyles');

// the `IndexRoute` component lets `react` know which component is our default (index) route to render
// we then nest further `Route` components to define the components we want rendered at which route
ReactDOM.render(
    <p>React Boilerplate</p>,
    document.getElementById('app')
);
