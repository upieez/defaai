import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	margin-left: 26px;
`;

const Main = ({ children }) => {
	return <Container>{children}</Container>;
};

export default Main;
