import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { getSession, logOut } from '../utils/api/session';

function NavBar(props) {
	const {
		handleDrawerToggle, classes,
	} = props;
	const loggedUser = useSelector((state) => state.loggedUser);
	const location = useLocation();

	useEffect(() => {
		getSession();
	}, []);
	const userData = () => {
		if (loggedUser.user) {
			return (
				<Typography
					variant="h6"
					style={{ color: 'inherit', textDecoration: 'inherit', paddingRight: '20px' }}
				>
					{loggedUser.user.name}
					<Button
						variant="contained"
						onClick={() => logOut()}
						style={{ marginLeft: '20px' }}
					>
						Cerrar Sesión
					</Button>
				</Typography>
			);
		}
		return (
			<a href={`/api/v1/app/login?redirect=${location.pathname}`}>
				<Button variant="contained">Iniciar sesión</Button>
			</a>
		);
	};

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
				<Typography variant="h6" noWrap className={classes.title}>
					DAT - Taquillas
				</Typography>
				{userData()}
			</Toolbar>
		</AppBar>
	);
}

export default NavBar;
