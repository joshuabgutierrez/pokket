import { AppBar, Badge, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { HiMenu as MenuIcon } from 'react-icons/hi';
import { BsFillBellFill as NotificationsIcon } from 'react-icons/bs';

const drawerWidth = 240;

// Material-UI Styling
const useStyles = makeStyles((theme) => ({
	appBar: {
		minWidth: '100%',
		zIndex: '1',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		[theme.breakpoints.up('lg')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth
		}
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('lg')]: {
			display: 'none'
		}
	},
	badgeStyle: {
		marginRight: '3em'
	}
}));
// !Material-UI Styling

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
			<Badge badgeContent={1} color="error" className={classes.badgeStyle}>
				<NotificationsIcon size={20} title="Bell icon with number of notifications" />
			</Badge>
		</AppBar>
	);
}

export default Navbar;
