import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FormControl, Grid, makeStyles, useMediaQuery } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

function SignupForm() {
	const classes = useStyles();
	const isScreenExtraSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));

	return (
		<form>
			<Grid container>
				<Grid item xs={12} sm={12} md={12} lg={12} className={classes.spacing}>
					<Grid container>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<FormControl fullWidth={isScreenExtraSmall}>
								<label htmlFor="First Name">
									<Typography variant="body1">First Name</Typography>
								</label>
								<TextField id="first_name" value="" variant="outlined" size="small" />
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<FormControl fullWidth={isScreenExtraSmall}>
								<label htmlFor="Last Name">
									<Typography variant="body1">Last Name</Typography>
								</label>
								<TextField id="last_name" value="" variant="outlined" size="small" />
							</FormControl>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} className={classes.spacing}>
					<Grid container>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<FormControl fullWidth={isScreenExtraSmall}>
								<label htmlFor="Username">
									<Typography variant="body1">Username</Typography>
								</label>
								<TextField id="username" value="" size="small" variant="outlined" />
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<FormControl fullWidth={isScreenExtraSmall}>
								<label htmlFor="Email Address">
									<Typography variant="body1">Email Address</Typography>
								</label>
								<TextField type="email" id="email_address" value="" size="small" variant="outlined" />
							</FormControl>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} className={classes.spacing}>
					<Grid container>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<FormControl fullWidth={isScreenExtraSmall}>
								<label htmlFor="Password">
									<Typography variant="body1">Password</Typography>
								</label>
								<TextField type="password" id="password" value="" size="small" variant="outlined" />
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<FormControl fullWidth={isScreenExtraSmall}>
								<label htmlFor="Confirm Password">
									<Typography variant="body1">Confirm Password</Typography>
								</label>
								<TextField
									type="password"
									id="confirm_password"
									value=""
									size="small"
									variant="outlined"
								/>
							</FormControl>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Button variant="contained" color="primary">
						Create Account
					</Button>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} className={classes.topSpacing}>
					<section className={classes.sectionStyles}>
						<Typography variant="subtitle2">Already have an account?</Typography>
						<Link to="/" className={classes.linkStyles}>
							<Typography variant="subtitle2" color="primary">
								Sign In
							</Typography>
						</Link>
					</section>
				</Grid>
			</Grid>
		</form>
	);
}

export default SignupForm;
