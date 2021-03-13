import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Transactions from '../../pages/Transactions';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Budget from '../../pages/Budget';
import Bills from '../../pages/Bills';
import Goals from '../../pages/Goals';
import Accounts from '../../pages/Accounts';
// import SuccessMessage from '../Messages/SuccessMessage';

const drawerWidth = 240;

// Material-UI Styling
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		minWidth: '100%',
		zIndex: '1',
		[theme.breakpoints.up('lg')]: {
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
// !Material-UI Styling

function Home() {
	const classes = useStyles();
	const [ mobileOpen, setMobileOpen ] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<div className={classes.root}>
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
					<Route exact path="/budget">
						<Budget />
					</Route>
					<Route exact path="/bills">
						<Bills />
					</Route>
					<Route exact path="/goals">
						<Goals />
					</Route>
					<Route exact path="/accounts">
						<Accounts />
					</Route>
					<Redirect to="/dashboard" />
				</Switch>
				{/* <SuccessMessage /> */}
			</main>
		</div>
	);
}

Home.propTypes = {
	window: PropTypes.func
};

export default Home;
