import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../../constant/styles';
import Input, { Label, TextInput } from '../../../components/Input';
import Button from '../../../components/Button';

const ButtonWrapper = styled.div`
	text-align: center;
	width: inherit;
`;

const StyledInput = styled(Input)`
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
		color: ${colors.green};
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

const Signup = () => {
	return (
		<>
			<StyledInput name='fullName'>Full name</StyledInput>
			<StyledInput name='email'>Email address</StyledInput>
			<PasswordInput name='password' type='password'>
				Password
				<p>Strong</p>
			</PasswordInput>
			<ButtonWrapper>
				<Link to='/video/actor'>
					<LoginButton>Signup</LoginButton>
				</Link>
			</ButtonWrapper>
			<TextWrapper>
				Already user?{' '}
				<Link
					to='/auth/login'
					onClick={() => {
						sessionStorage.setItem('loggedIn', 'true');
					}}>
					Login
				</Link>
			</TextWrapper>
		</>
	);
};

export default Signup;
