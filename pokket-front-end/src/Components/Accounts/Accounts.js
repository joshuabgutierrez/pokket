import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import AccountInfo from './AccountInfo';
import { BsPlus } from 'react-icons/bs';
import AccountModal from './AccountModal';
import { ModalContext } from '../../Contexts/ModalContext';

function Accounts() {
	const { handleOpen } = useContext(ModalContext);
	return (
		<div>
			<Typography variant="h5">Your accounts</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<AccountInfo />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<AccountInfo />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Button variant="outlined" size="small" startIcon={<BsPlus />} onClick={handleOpen}>
						Add account
					</Button>
				</Grid>
			</Grid>
			<AccountModal />
		</div>
	);
}

export default Accounts;
