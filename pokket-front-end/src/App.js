import './App.css';
import Dashboard from './Pages/Dashboard';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import theme from './Styles/Theme';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<div className="App">
			<MuiThemeProvider theme={theme}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Dashboard />
				</ThemeProvider>
			</MuiThemeProvider>
		</div>
	);
}

export default App;
