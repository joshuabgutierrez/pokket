import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { BsPlus } from 'react-icons/bs';
import BudgetDescription from './BudgetDescription';
import styled from 'styled-components';
import { ModalContext } from '../../Contexts/ModalContext';
import BudgetModal from './BudgetModal';

const StyledText = styled(Typography)`
    font-weight: 700;
    transform: ${(props) => (props.position === 'income' ? 'translate(50%, 6em)' : 'translate(50%, 10em)')};
`;

const StyledArticle = styled.article`
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
	padding: 0.5em 1.25em;
	min-height: 200px;
`;

const StyledData = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Line = styled.div`
	display: block;
	padding: 0.005em;
	background-color: rgba(0, 0, 0, 0.5);
	width: 100%;
	margin: 1em 0;
`;

const useStyles = makeStyles({
	root: {
		marginBottom: '1em'
	}
});

function Budget() {
	const classes = useStyles();
	const { handleOpen } = useContext(ModalContext);

	return (
		<div>
			<Typography variant="h4" align="center" className={classes.root}>
				Your budget
			</Typography>
			<Grid container>
				<Grid item lg={2}>
					<StyledText variant="body1" position="income">
						Income
					</StyledText>
					<StyledText variant="body1" position="spending">
						Spending
					</StyledText>
				</Grid>
				<Grid item lg={8}>
					<Grid container spacing={7}>
						<Grid item lg={12}>
							<Button variant="contained" startIcon={<BsPlus />} size="small" onClick={handleOpen}>
								Create a budget
							</Button>
						</Grid>
						<Grid item lg={12}>
							<BudgetDescription />
						</Grid>
					</Grid>
				</Grid>
				<Grid item lg={2}>
					<StyledArticle>
						<Typography variant="h6" align="center">
							You have budgeted
						</Typography>
						<StyledData>
							<span>Income:</span>
							<span>$3,500</span>
						</StyledData>
						<StyledData>
							<span>Spending:</span>
							<span>$1,500</span>
						</StyledData>
						<StyledData>
							<span>Goals:</span>
							<span>$0</span>
						</StyledData>
						<Line />
						<StyledData>
							<span>Left Over</span>
							<span>$1,500</span>
						</StyledData>
					</StyledArticle>
				</Grid>
			</Grid>
			<BudgetModal />
		</div>
	);
}

export default Budget;
