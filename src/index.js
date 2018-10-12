import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Importamos los componentes
//import Header from './components/Header';
import SearchContainer from './containers/SearchContainer';
// import DetailsContainer from './containers/DetailsContainer';

ReactDOM.render(
    //<Header />,
    <SearchContainer />,
    // <DetailsContainer />,,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
