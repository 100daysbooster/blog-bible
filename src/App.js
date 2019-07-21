import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import React, { Component } from 'react';

import { history } from './redux/config';
import configStore from './redux/config';

import {
	Switch
} from 'react-router-dom';

import {
	Home
} from './views';

import {

} from './components';

import NotificationsSystem from 'reapop';
import theme from 'reapop-theme-wybo';

const store = configStore();

const App = () => (
	<Provider store={store}>
		<div>
			<ConnectedRouter history={history}>
				<Switch>
					<div>
						<Route exact path="/" component={Home} />
					</div>
				</Switch>
			</ConnectedRouter>
			<NotificationsSystem theme={theme} />
		</div>
	</Provider>
)

export default App;