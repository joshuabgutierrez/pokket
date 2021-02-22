import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import LeftShowcase from '../LeftShowcase';
import SignupForm from './SignupForm';
import styled from 'styled-components';

const StyledHeader = styled.header`margin: 2em 0;`;

function SignUp() {
	return (
		<div>
			<Grid container>
				<Grid item md={4} lg={4}>
					<LeftShowcase />
				</Grid>
				<Grid item xs={12} sm={12} md={8} lg={8}>
					<Grid container justify="center">
						<Grid item xs={10} sm={10} md={10} lg={8}>
							<StyledHeader>
								<Typography variant="h6">Manage all your assets efficiently with Pokket</Typography>
								<Typography variant="subtitle1">
									Let's get you all set up so you can verify your personal account and begin setting
									up your profile.
								</Typography>
							</StyledHeader>
						</Grid>
						<Grid item xs={10} sm={10} md={10} lg={8}>
							<SignupForm />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default SignUp;
