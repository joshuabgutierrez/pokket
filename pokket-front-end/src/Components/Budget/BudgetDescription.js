import { Grid } from '@material-ui/core';
import React from 'react';
import LinearProgressBar from '../../Styles/LinearProgressBar';

function BudgetDescription() {
	return (
		<div>
			<Grid container spacing={8}>
				<Grid item lg={10}>
					<LinearProgressBar status="normal" />
				</Grid>
				<Grid item lg={10}>
					<Grid container spacing={4}>
						<Grid item lg={12}>
							<LinearProgressBar status="normal" />
						</Grid>
						<Grid item lg={12}>
							<LinearProgressBar status="normal" />
						</Grid>
						<Grid item lg={12}>
							<LinearProgressBar status="warning" />
						</Grid>
						<Grid item lg={12}>
							<LinearProgressBar status="danger" />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default BudgetDescription;
