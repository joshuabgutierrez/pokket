import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';

function Header() {
	return (
		<React.Fragment>
			<Grid container justify="space-between">
				<Grid item={5}>
					<Typography variant="h4" color="secondary" align="left">
						OVERVIEW
					</Typography>
				</Grid>
				<Grid item={5}>
					<Grid container spacing={1}>
						<Grid item md={7}>
							<Button variant="contained" color="primary">
								This Week
							</Button>
						</Grid>
						<Grid item md={5}>
							<Button variant="contained" color="secondary">
								October
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default Header;
