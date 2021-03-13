import { Divider, Grid, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const StyledLinearProgressBar = styled(LinearProgress)`
    height: 10px;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.1);
    margin: 0.5em 0;
`;

const StyledDetailsContainer = styled.div`
	border: 2px solid #000;
	padding: 1em;
	margin-bottom: 1em;
`;

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
`;

const useStyles = makeStyles((theme) => ({
	barColorPrimary: {
		backgroundColor: '#00BD56'
	},
	flex: {
		flex: 1
	},
	divider: {
		marginRight: '1em',
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	}
}));

// Customized Progress Linear Bar
function LinearBar(props) {
	const { color, ...other } = props;
	const classes = useStyles(props);
	return <StyledLinearProgressBar classes={{ barColorPrimary: classes.barColorPrimary }} {...other} />;
}

function GoalDetails() {
	const classes = useStyles();
	return (
		<StyledDetailsContainer>
			<Grid container alignItems="center" spacing={3}>
				<Grid item xs={12}>
					<Typography variant="subtitle2">Projected Date</Typography>
					<Typography variant="button">Mar 20 2021</Typography>
				</Grid>
				<Divider orientation="vertical" flexItem component="span" className={classes.divider} />
				<Grid item xs={12} md={10} className={classes.flex}>
					<Grid container>
						<Grid item xs={12}>
							<StyledHeader>
								<Typography variant="body1">Buy a house</Typography>
								<Typography variant="body1">$100 of $20,000</Typography>
							</StyledHeader>
							<main>
								<LinearBar value={35} status="normal" variant="determinate" />
							</main>
							<footer>
								<Typography variant="body2" align="right">
									Not Completed Yet
								</Typography>
							</footer>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</StyledDetailsContainer>
	);
}

export default GoalDetails;
