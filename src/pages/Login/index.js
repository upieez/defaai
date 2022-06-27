import styled from 'styled-components';

import { THREE_CIRCLE_IMAGE } from '../../constant';

const Container = styled.div`
	height: 100%;
`;

const ThreeCircleImage = styled.img`
	position: fixed;
	right: 0;
	top: 0;
`;

const FormWrapper = styled.div`
	width: 360px;
	height: 100px;
	padding: 20px;

	text-align: center;

	.email {
		display: flex;
		flex-direction: column;
		text-align: start;
	}

	.password {
		display: flex;
		flex-direction: column;

		.password-label {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			p {
				color: #3860ad;
			}
		}
	}

	button {
		width: 78px;
		height: 33px;
		background: #46b13d;

		font-family: 'Poppins';
		font-weight: 600;
		color: white;
		border-radius: 6px;
		border: none;
	}
`;

const Login = () => {
	return (
		<Container>
			<ThreeCircleImage height={583} width={601} src={THREE_CIRCLE_IMAGE} />
			<FormWrapper>
				<form action=''>
					<div className='email'>
						<label htmlFor=''>Email address</label>
						<input type='text' />
					</div>
					<div className='password'>
						<div className='password-label'>
							<label htmlFor=''>Password</label>
							<p>Forgot?</p>
						</div>
						<input type='text' />
					</div>
					<button>Login</button>
				</form>
				New here? Signup
			</FormWrapper>
		</Container>
	);
};

export default Login;
