import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import styled from 'styled-components';
import GoalsSection from './GoalsSection';
import AddNewGoalModal from './AddNewGoalModal';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

function Main() {
	const [ open, setOpen ] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Grid container spacing={6}>
				<Grid item xs={12}>
					<StyledHeader>
						<Typography variant="h6" color="initial">
							Your goals here
						</Typography>
						<Button size="small" variant="contained" onClick={handleOpen}>
							Add New Goal
						</Button>
					</StyledHeader>
				</Grid>
				<Grid item xs={12}>
					<GoalsSection />
				</Grid>
			</Grid>
			<AddNewGoalModal open={open} handleClose={handleClose} />
		</div>
	);
}

export default Main;
