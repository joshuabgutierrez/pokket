import React from 'react';
import { Avatar, makeStyles, Typography } from '@material-ui/core';

// Material-UI Styling
const useStyles = makeStyles((theme) => ({
	root: {
		padding: '1.5em 0',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	large: {
		width: theme.spacing(8),
		height: theme.spacing(8)
	}
}));
// !Material-UI Styling

function SidebarProfile() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Avatar
				alt="Mary Doe"
				src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
				className={classes.large}
			/>
			<Typography variant="h6">Mary Doe</Typography>
			<Typography variant="body2">Web Developer</Typography>
		</div>
	);
}

export default SidebarProfile;
