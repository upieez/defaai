import styled from 'styled-components';

const Container = styled.div`
	margin-bottom: 20px;
	padding-bottom: 27px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
	font-size: 22px;
`;

const Topbar = () => {
	return (
		<Container>
			<Header>Sign In</Header>
		</Container>
	);
};

export default Topbar;
