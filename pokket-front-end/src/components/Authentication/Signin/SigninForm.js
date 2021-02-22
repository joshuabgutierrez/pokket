import { Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	spacing: {
		marginBottom: '2em'
	},
	topSpacing: {
		marginTop: '1em'
	},
	sectionStyles: {
		display: 'flex',
		alignItems: 'center'
	},
	linkStyles: {
		textDecoration: 'none',
		marginLeft: '0.5em'
	}
});

function SigninForm() {
	const classes = useStyles();
	return (
		<form>
			<Grid container justify="center">
				<Grid item xs={10} sm={6} md={10} lg={10}>
					<Grid container>
						<Grid item xs={12} sm={12} md={12} lg={12} className={classes.spacing}>
							<FormControl fullWidth>
								<label htmlFor="identifier">
									<Typography variant="body1">Username or Email Address</Typography>
								</label>
								<TextField id="identifier" value="" variant="outlined" size="small" />
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={12} className={classes.spacing}>
							<FormControl fullWidth>
								<label htmlFor="password">
									<Typography variant="body1">Password</Typography>
								</label>
								<TextField id="password" value="" variant="outlined" size="small" />
							</FormControl>
						</Grid>
						<Grid item sm={12} md={12} lg={12}>
							<Button variant="contained" fullWidth color="primary">
								Sign In
							</Button>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={12} className={classes.topSpacing}>
							<section className={classes.sectionStyles}>
								<Typography variant="subtitle2">Already have an account?</Typography>
								<Link to="/register" className={classes.linkStyles}>
									<Typography variant="subtitle2" color="primary">
										Sign In
									</Typography>
								</Link>
							</section>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</form>
	);
}

export default SigninForm;
