import Home from './Pages/Home';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import theme from './Styles/Theme';
import { ThemeProvider } from 'styled-components';
import { TabPanelValueContextProvider } from './Contexts/TabPanelValueContext';
import { ModalContextProvider } from './Contexts/ModalContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import SignUp from './Components/UserForms/Signup';
import { TransactionsContextProvider } from './Contexts/TransactionsContext';

function App() {
	return (
		<div>
			<Router>
				<MuiThemeProvider theme={theme}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<TabPanelValueContextProvider>
							<ModalContextProvider>
								<TransactionsContextProvider>
									<Switch>
										<Route exact path="/" component={Landing} />
										<Route exact path="/dashboard" component={Home} />
										<Route exact path="/register" component={SignUp} />
									</Switch>
								</TransactionsContextProvider>
							</ModalContextProvider>
						</TabPanelValueContextProvider>
					</ThemeProvider>
				</MuiThemeProvider>
			</Router>
		</div>
	);
}

export default App;
