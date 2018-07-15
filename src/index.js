import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import {createStore} from "redux";
import {Provider, connect} from "react-redux";
import rootReducer from "./reducers/reducers";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var store = createStore(rootReducer);

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
