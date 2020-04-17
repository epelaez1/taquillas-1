import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

function NavBar(props) {
	const {
		handleDrawerToggle, classes,
	} = props;

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					className={classes.menuButton}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap>
					DAT - Taquillas
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default NavBar;
