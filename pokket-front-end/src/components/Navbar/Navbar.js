import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { HiMenu as MenuIcon } from 'react-icons/hi';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	appBar: {
		minWidth: '100%',
		zIndex: '1',
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth
		}
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none'
		}
	}
}));

function Navbar({ handleDrawerToggle }) {
	const classes = useStyles();
	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					className={classes.menuButton}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap>
					Pokket
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
