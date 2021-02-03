import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import BillSection from './BillSection';
import PayBillModal from './PayBillModal';
import AddNewBillModal from './AddNewBillModal';

const StyledHeader = styled.header`
	text-align: center;
	width: 100%;
	max-width: 500px;
	margin: auto;
`;

const useStyles = makeStyles((theme) => ({
	flex: {
		display: 'flex',
		justifyContent: 'flex-end',
		[theme.breakpoints.down('sm')]: {
			display: 'block',
			marginBottom: '1.5em'
		}
	}
}));

function Main() {
	const classes = useStyles();

	const [ openPayBillModal, setOpenPayBillModal ] = useState(false);
	const [ openAddNewBillModal, setOpenAddNewBillModal ] = useState(false);

	const handleOpenPayBillModal = () => {
		setOpenPayBillModal(true);
	};

	const handleClosePayBillModal = () => {
		setOpenPayBillModal(false);
	};

	const handleOpenAddNewBillModal = () => {
		setOpenAddNewBillModal(true);
	};

	const handleCloseAddNewBillModal = () => {
		setOpenAddNewBillModal(false);
	};

	return (
		<div>
			<Grid container justify="center">
				<Grid item xs={12} sm={10} md={10} lg={10} className={classes.flex}>
					<Button variant="contained" size="small" onClick={handleOpenAddNewBillModal}>
						Add New Bill
					</Button>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<StyledHeader>
						<Typography variant="h6">Bills Due This Week</Typography>
						<Typography variant="h4">$563</Typography>
						<Typography variant="subtitle1">3 Bills</Typography>
					</StyledHeader>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<BillSection handleOpenPayBillModal={handleOpenPayBillModal} />
					<BillSection handleOpenPayBillModal={handleOpenPayBillModal} />
				</Grid>
			</Grid>
			<AddNewBillModal
				openAddNewBillModal={openAddNewBillModal}
				handleCloseAddNewBillModal={handleCloseAddNewBillModal}
			/>
			<PayBillModal openPayBillModal={openPayBillModal} handleClosePayBillModal={handleClosePayBillModal} />
		</div>
	);
}

export default Main;
