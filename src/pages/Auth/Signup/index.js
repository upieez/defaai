import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../../constant/styles';
import Input, { Label } from '../../../components/Input';
import Button from '../../../components/Button';

const ButtonWrapper = styled.div`
	text-align: center;
	width: inherit;
`;

const PasswordInput = styled(Input)`
	${Label} {
		width: 360px;
		display: flex;
		justify-content: space-between;
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
			<Input name='fullName'>Full name</Input>
			<Input name='email'>Email address</Input>
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
