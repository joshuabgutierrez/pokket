import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const StyledForm = styled.form`
	margin-top: 3em;
	padding: 1em;
	border: 1px solid ${(props) => props.theme.palette.primary.main};
	border-radius: 5px;
`;

function NewGoalForm() {
	return (
		<StyledForm action="">
			<Grid container spacing={2}>
				<Grid item lg={12}>
					<Typography variant="h6">Add a new goal</Typography>
				</Grid>
				<Grid item lg={6}>
					<TextField label="What's your goal" variant="outlined" size="small" />
				</Grid>
				<Grid item lg={6}>
					<TextField type="number" label="Amount Goal" variant="outlined" size="small" />
				</Grid>
				<Grid item lg={6}>
					<Button variant="contained" size="small">
						Add new goal
					</Button>
				</Grid>
			</Grid>
		</StyledForm>
	);
}

export default NewGoalForm;
