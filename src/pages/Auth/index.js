import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Container = styled.div`
	height: 100%;
	margin: 0 auto;
	margin-top: 200px;
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
`;

const Auth = () => {
	return (
		<Container>
			<ThreeCircleImage
				height={583}
				width={601}
				src='/images/three_circle.png'
			/>
			<FormWrapper>
				<Outlet />
			</FormWrapper>
		</Container>
	);
};

export default Auth;
