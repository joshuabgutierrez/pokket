import Home from './Pages/Home';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import theme from './Styles/Theme';
import { ThemeProvider } from 'styled-components';
import { TabPanelValueContextProvider } from './Contexts/TabPanelValueContext';
import { ModalContextProvider } from './Contexts/ModalContext';

function App() {
	return (
		<div>
			<MuiThemeProvider theme={theme}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<TabPanelValueContextProvider>
						<ModalContextProvider>
							<Home />
						</ModalContextProvider>
					</TabPanelValueContextProvider>
				</ThemeProvider>
			</MuiThemeProvider>
		</div>
	);
}

export default App;
