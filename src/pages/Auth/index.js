import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { THREE_CIRCLE_IMAGE } from '../../constant';

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
			<ThreeCircleImage height={583} width={601} src={THREE_CIRCLE_IMAGE} />
			<FormWrapper>
				<Outlet />
			</FormWrapper>
		</Container>
	);
};

export default Auth;
