import React from 'react';
import { Divider, Drawer, Hidden, makeStyles, useTheme } from '@material-ui/core';
import SidebarProfile from './SidebarProfile';
import SidebarItems from './SidebarItems';

const drawerWidth = 240;

// Material-UI Styling
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
// !Material-UI-Styling

function Sidebar(props) {
	const classes = useStyles();
	const theme = useTheme();
	const { window, handleDrawerToggle, mobileOpen } = props;

	const container = window !== undefined ? () => window().document.body : undefined;

	const drawer = (
		<div>
			<div className={classes.toolbar} />
			<SidebarProfile />
			<Divider />
			<SidebarItems />
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
