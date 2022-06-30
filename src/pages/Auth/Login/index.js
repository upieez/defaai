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
			<Input>Email address</Input>
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
				New here? <a href='/auth/signup'>Signup</a>
			</TextWrapper>
		</>
	);
};

export default Login;
