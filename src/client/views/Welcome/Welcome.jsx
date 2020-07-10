import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../../public/images/logo.png';
import './styles.css';

const Welcome = () => {
	const location = useLocation();

	const logo = (
		<div className="logo">
			<img src={Logo} alt="Taquillas" /> Taquillas
		</div>
	);

	const loginButton = (
		<a href={`/api/v1/app/login?redirect=${location.pathname}`} className="loginButton"><div>Iniciar Sesión</div></a>
	);

	return (<div className="welcomeSection">{logo}{loginButton}</div>);
};

export default Welcome;
