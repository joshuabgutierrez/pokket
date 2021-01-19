import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { GiNetworkBars as DashboardIcon, GiArcheryTarget as GoalsIcon } from 'react-icons/gi';
import { RiMoneyDollarCircleLine as TransactionsIcon } from 'react-icons/ri';
import {
	FaPiggyBank as BudgetIcon,
	FaMoneyBillAlt as BillsIcon,
	FaRegCreditCard as AccountsIcon
} from 'react-icons/fa';
import { CgProfile as ProfileIcon } from 'react-icons/cg';

function SidebarItems() {
	return (
		<React.Fragment>
			<List>
				<ListItem button key={1} component={Link} to="/">
					<ListItemIcon>
						<DashboardIcon size={25} />
					</ListItemIcon>
					<ListItemText primary="Dashboard" />
				</ListItem>
				<ListItem button key={2} component={Link} to="/transactions">
					<ListItemIcon>
						<TransactionsIcon size={25} />
					</ListItemIcon>
					<ListItemText primary="Transactions" />
				</ListItem>
				<ListItem button key={3} component={Link} to="/budget">
					<ListItemIcon>
						<BudgetIcon size={25} />
					</ListItemIcon>
					<ListItemText primary="Budget" />
				</ListItem>
				<ListItem button key={4} component={Link} to="/bills">
					<ListItemIcon>
						<BillsIcon size={25} />
					</ListItemIcon>
					<ListItemText primary="Bills" />
				</ListItem>
				<ListItem button key={5} component={Link} to="/goals">
					<ListItemIcon>
						<GoalsIcon size={25} />
					</ListItemIcon>
					<ListItemText primary="Goals" />
				</ListItem>
				<ListItem button key={6} component={Link} to="/accounts">
					<ListItemIcon>
						<AccountsIcon size={25} />
					</ListItemIcon>
					<ListItemText primary="Accounts" />
				</ListItem>
				<ListItem button key={7} component={Link} to="/profile">
					<ListItemIcon>
						<ProfileIcon size={25} />
					</ListItemIcon>
					<ListItemText primary="Profile" />
				</ListItem>
			</List>
		</React.Fragment>
	);
}

export default SidebarItems;
