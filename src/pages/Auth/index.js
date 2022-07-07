import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Container = styled.div`
	height: 100%;
	margin: 0 auto;
	margin-top: 200px;

	@media only screen and (max-width: 400px) {
		margin-top: 100px;
	}
`;

const ThreeCircleImage = styled.img`
	position: fixed;
	right: 0;
	top: 0;
	z-index: -1;
`;

const FormWrapper = styled.div`
	width: 360px;
	height: 100px;
	padding: 20px;

	@media only screen and (max-width: 400px) {
		width: 90%;
		padding: 0;
	}
`;

const Auth = () => {
	return (
		<Container>
			<FormWrapper>
				<Outlet />
			</FormWrapper>
			<ThreeCircleImage
				height={583}
				width={601}
				src='/images/three_circle.png'
			/>
		</Container>
	);
};

export default Auth;
