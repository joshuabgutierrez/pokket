import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import {
	FormControl,
	FormControlLabel,
	Grid,
	InputAdornment,
	InputLabel,
	makeStyles,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
	TextField
} from '@material-ui/core';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
	root: {
		width: '140px'
	},
	direction: {
		flexDirection: 'row'
	},
	textfield: {
		width: '90px'
	},
	spacing: {
		marginBottom: '1em'
	}
});

const Subform = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

function BudgetForm() {
	const classes = useStyles();
	const [ category, setCategory ] = useState('');
	const [ frequency, setFrequency ] = useState('');

	return (
		<div>
			<Typography variant="h6" className={classes.spacing}>
				Create a budget
			</Typography>
			<form>
				<Grid container spacing={4}>
					<Grid item lg={10}>
						<InputLabel>Choose a category</InputLabel>
						<FormControl className={classes.root}>
							<Select value={category} onChange={(e) => setCategory(e.target.value)}>
								<MenuItem value="Auto & Transport">Auto & Transport</MenuItem>
								<MenuItem value="Bills & Utilities">Bills & Utilities</MenuItem>
								<MenuItem value="Entertainment">Entertainment</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item lg={10}>
						<InputLabel>How often will this happen?</InputLabel>
						<FormControl component="fieldset">
							<RadioGroup
								aria-label="budget frequency"
								name="frequency"
								value={frequency}
								onChange={(e) => setFrequency(e.target.value)}
								className={classes.direction}
							>
								<FormControlLabel
									value="Every month"
									control={<Radio size="small" />}
									label="Every month"
								/>
								<FormControlLabel
									value="Every few months"
									control={<Radio size="small" />}
									label="Every few months"
								/>
								<FormControlLabel value="Once" control={<Radio size="small" />} label="Once" />
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item lg={7}>
						{frequency === 'Every few months' ? (
							<React.Fragment>
								<InputLabel>What is your spending cycle?</InputLabel>
								<Subform>
									<Typography variant="body2">I spend</Typography>
									<TextField
										className={classes.textfield}
										variant="outlined"
										size="small"
										InputProps={{
											startAdornment: <InputAdornment position="start">$</InputAdornment>
										}}
									/>
									<Typography variant="body2">every</Typography>
									<TextField className={classes.textfield} variant="outlined" size="small" />
									<Typography variant="body2">months (3-12)</Typography>
								</Subform>
							</React.Fragment>
						) : (
							<React.Fragment>
								<InputLabel>Amount</InputLabel>
								<TextField
									className={classes.textfield}
									variant="outlined"
									size="small"
									InputProps={{
										startAdornment: <InputAdornment position="start">$</InputAdornment>
									}}
								/>
							</React.Fragment>
						)}
					</Grid>
					<Grid item lg={10}>
						<Button variant="contained">Save</Button>
					</Grid>
				</Grid>
			</form>
		</div>
	);
}

export default BudgetForm;
