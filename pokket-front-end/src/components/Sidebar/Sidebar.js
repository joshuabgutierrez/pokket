import React from 'react';
import {
	Divider,
	Drawer,
	Hidden,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	useTheme
} from '@material-ui/core';
import { GiNetworkBars as DashboardIcon } from 'react-icons/gi';
import { RiMoneyDollarCircleLine as TransactionsIcon } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	drawer: {
		zIndex: '0',
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0
		}
	},
	drawerPaper: {
		width: drawerWidth
	},
	toolbar: theme.mixins.toolbar
}));

function Sidebar(props) {
	const classes = useStyles();
	const theme = useTheme();
	const { window, handleDrawerToggle, mobileOpen } = props;

	const container = window !== undefined ? () => window().document.body : undefined;

	const drawer = (
		<div>
			<div className={classes.toolbar} />
			<Divider />
			<List>
				<ListItem button key={2} component={Link} to="/">
					<ListItemIcon>
						<DashboardIcon size={25} />
					</ListItemIcon>
					<ListItemText primary="Dashboard" />
				</ListItem>
				<ListItem button key={1} component={Link} to="/transactions">
					<ListItemIcon>
						<TransactionsIcon size={25} />
					</ListItemIcon>
					<ListItemText primary="Transactions" />
				</ListItem>
			</List>
		</div>
	);

	return (
		<nav className={classes.drawer} aria-label="mailbox folders">
			<Hidden smUp implementation="css">
				<Drawer
					container={container}
					variant="temporary"
					anchor={theme.direction === 'rtl' ? 'right' : 'left'}
					open={mobileOpen}
					onClose={handleDrawerToggle}
					classes={{
						paper: classes.drawerPaper
					}}
					ModalProps={{
						keepMounted: true // Better open performance on mobile.
					}}
				>
					{drawer}
				</Drawer>
			</Hidden>
			<Hidden xsDown implementation="css">
				<Drawer
					classes={{
						paper: classes.drawerPaper
					}}
					variant="permanent"
					open
				>
					{drawer}
				</Drawer>
			</Hidden>
		</nav>
	);
}

export default Sidebar;
