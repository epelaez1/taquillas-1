import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm';
import Logo from '../../public/images/logo.png';
import './styles.css';

const SignUp = () => {
	const loggedUser = useSelector((state) => state.loggedUser);
	const history = useHistory();
	useEffect(() => {
		if (!loggedUser.email) {
			console.log(loggedUser);
			history.push('/');
		}
	}, [loggedUser]);
	const logo = (
		<div className="logo">
			<img src={Logo} alt="Taquillas" /> Taquillas
		</div>
	);

	return (
		<div className="signUpSection">
			{logo}
			<SignUpForm />
		</div>
	);
};

export default SignUp;
