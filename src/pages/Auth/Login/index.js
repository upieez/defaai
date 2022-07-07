import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../../constant/styles';
import Input, { Label, TextInput } from '../../../components/Input';
import Button from '../../../components/Button';

const ButtonWrapper = styled.div`
	text-align: center;
	width: inherit;
`;

const EmailInput = styled(Input)`
	${TextInput} {
		@media only screen and (max-width: 400px) {
			width: 100%;
		}
	}
`;

const PasswordInput = styled(Input)`
	${Label} {
		width: 360px;
		display: flex;
		justify-content: space-between;

		@media only screen and (max-width: 400px) {
			width: auto;
		}
	}

	${TextInput} {
		@media only screen and (max-width: 400px) {
			width: 100%;
		}
	}

	p {
		color: ${colors.blue};
	}
`;

const LoginButton = styled(Button)`
	background-color: ${colors.green};
	color: ${colors.white};
`;

const TextWrapper = styled.div`
	text-align: center;
	margin-top: 63px;
	width: inherit;

	a {
		text-decoration: none;
		color: ${colors.blue};
	}
`;

const Login = () => {
	return (
		<>
			<EmailInput>Email address</EmailInput>
			<PasswordInput>
				Password
				<p>Forgot?</p>
			</PasswordInput>
			<ButtonWrapper>
				<Link to='/video/actor'>
					<LoginButton>Login</LoginButton>
				</Link>
			</ButtonWrapper>
			<TextWrapper>
				New here?{' '}
				<Link
					to='/auth/signup'
					onClick={() => {
						sessionStorage.setItem('loggedIn', 'true');
					}}>
					Signup
				</Link>
			</TextWrapper>
		</>
	);
};

export default Login;
