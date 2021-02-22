import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from './components/Authentication/Signin/Signin';
import Signup from './components/Authentication/Signup/Signup';
import Home from './components/Home/Home';
import theme from './theme/MaterialTheme';

function App() {
	return (
		<div>
			<Router>
				<ThemeProvider theme={theme}>
					<Switch>
						<Route exact path="/">
							<Signin />
						</Route>
						<Route exact path="/register">
							<Signup />
						</Route>
						<Home />
					</Switch>
				</ThemeProvider>
			</Router>
		</div>
	);
}

export default App;
