import React from 'react';
import Typography from '@material-ui/core/Typography';
import Login from '../Components/UserForms/Login';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		marginTop: '1em'
	}
});

function Landing() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Grid container>
				<Grid item sm={12} md={12} ls={12}>
					<Typography variant="h4" align="center" className={classes.root}>
						Welcome to Pokket
					</Typography>
				</Grid>
				<Grid item sm={12} md={12} lg={12}>
					<Login />
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default Landing;
