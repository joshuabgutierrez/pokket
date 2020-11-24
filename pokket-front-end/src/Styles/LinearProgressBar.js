import { LinearProgress, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledText = styled(Typography)`
    font-weight: 700;
`;

const StyledLinearProgressBar = styled(LinearProgress)`
    height: 10px;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.1);
`;

const useStyles = makeStyles({
	barColorPrimary: {
		backgroundColor: (props) =>
			props.status === 'normal' ? '#00BD56' : props.status === 'warning' ? '#FAA613' : '#FF3C38'
	}
});

function LinearBar(props) {
	const { color, ...other } = props;
	const classes = useStyles(props);
	return <StyledLinearProgressBar classes={{ barColorPrimary: classes.barColorPrimary }} {...other} />;
}

// Proptypes
LinearBar.propTypes = {
	status: PropTypes.oneOf([ 'normal', 'warning', 'danger' ]).isRequired
};

function LinearProgressBar({ status }) {
	return (
		<div>
			<StyledTitle>
				<Typography variant="body1">
					Auto and Transport:{' '}
					<StyledText component={'span'} display="inline" variant="body1">
						Gas and Maintenance
					</StyledText>
				</Typography>
				<StyledText variant="body1" align="right">
					$33 of $200
				</StyledText>
			</StyledTitle>
			<LinearBar status={status} variant="determinate" value={70} />
		</div>
	);
}

export default LinearProgressBar;
