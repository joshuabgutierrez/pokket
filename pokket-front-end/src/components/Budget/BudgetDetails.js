import React from 'react';
import { LinearProgress, makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const StyledLinearProgressBar = styled(LinearProgress)`
    height: 10px;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.1);
`;

const StyledDetails = styled.section`
	margin-bottom: 0.2em;
	padding: 0 0.5em;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const useStyles = makeStyles({
	barColorPrimary: {
		backgroundColor: (props) =>
			props.status === 'normal' ? '#00BD56' : props.status === 'warning' ? '#FAA613' : '#FF3C38'
	}
});

// Customized Progress Linear Bar
function LinearBar(props) {
	const { color, ...other } = props;
	const classes = useStyles(props);
	return <StyledLinearProgressBar classes={{ barColorPrimary: classes.barColorPrimary }} {...other} />;
}

function BudgetDetails() {
	return (
		<div>
			<StyledDetails>
				<Typography variant="subtitle2">Food & Dining: Groceries</Typography>
				<Typography variant="subtitle2">$100 of $1000</Typography>
			</StyledDetails>
			<LinearBar value={35} status="normal" variant="determinate" />
		</div>
	);
}

LinearBar.propTypes = {
	status: PropTypes.oneOf([ 'normal', 'warning', 'danger' ])
};

export default BudgetDetails;
