import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider, connect} from "react-redux";
import {default as thunk} from 'redux-thunk';
import promise from 'redux-promise';
import rootReducer from "./reducers/reducers";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var store = createStore(rootReducer,
	applyMiddleware(thunk, promise)
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Route path="/" component={App}></Route>
			</div>
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
