import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../Dashboard/Main';
import Transactions from '../Transactions/Main';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		minWidth: '100%',
		zIndex: '1',
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth
		}
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	}
}));

function Home() {
	const classes = useStyles();
	const [ mobileOpen, setMobileOpen ] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Navbar handleDrawerToggle={handleDrawerToggle} />
			<Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Switch>
					<Route exact path="/dashboard">
						<Dashboard />
					</Route>
					<Route exact path="/transactions">
						<Transactions />
					</Route>
					<Redirect to="/dashboard" />
				</Switch>
			</main>
		</div>
	);
}

Home.propTypes = {
	window: PropTypes.func
};

export default Home;
