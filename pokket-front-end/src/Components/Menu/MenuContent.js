import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ImMeter } from 'react-icons/im';
import { GrTransaction } from 'react-icons/gr';
import { AiFillCreditCard } from 'react-icons/ai';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { GiTrophyCup } from 'react-icons/gi';
import { AiFillSetting } from 'react-icons/ai';

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		color: '#000',
		textTransform: 'capitalize'
	},

	marginSpacing: {
		marginTop: '2.5em'
	},
	paddingSpacing: {
		paddingBottom: '2.5em'
	},
	labelIcon: {
		fontSize: '16px',
		minWidth: 100
	}
}));

export default function VerticalTabs() {
	const classes = useStyles();
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={`${classes.root} ${classes.marginSpacing}`}>
			<Tabs
				orientation="vertical"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				TabIndicatorProps={{ style: { width: '5px' } }}
			>
				<Tab
					className={`${classes.root} ${classes.paddingSpacing} ${classes.labelIcon}`}
					icon={<ImMeter />}
					label="Overview"
					{...a11yProps(0)}
				/>
				<Tab
					className={`${classes.root} ${classes.paddingSpacing} ${classes.labelIcon}`}
					icon={<GrTransaction />}
					label="Transactions"
					{...a11yProps(1)}
				/>
				<Tab
					className={`${classes.root} ${classes.paddingSpacing} ${classes.labelIcon}`}
					icon={<AiFillCreditCard />}
					label="Accounts"
					{...a11yProps(2)}
				/>
				<Tab
					className={`${classes.root} ${classes.paddingSpacing} ${classes.labelIcon}`}
					icon={<AiOutlineDollarCircle />}
					label="Budget"
					{...a11yProps(3)}
				/>
				<Tab
					className={`${classes.root} ${classes.paddingSpacing} ${classes.labelIcon}`}
					icon={<GiTrophyCup />}
					label="Goals"
					{...a11yProps(4)}
				/>
				<Tab
					className={`${classes.root} ${classes.paddingSpacing} ${classes.labelIcon}`}
					icon={<AiFillSetting />}
					label="Settings"
					{...a11yProps(5)}
				/>
			</Tabs>
		</div>
	);
}
