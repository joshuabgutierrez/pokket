import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import theme from './theme/MaterialTheme';

function App() {
	return (
		<div>
			<Router>
				<ThemeProvider theme={theme}>
					<Home />
				</ThemeProvider>
			</Router>
		</div>
	);
}

export default App;
