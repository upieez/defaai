import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	padding: 32px;
	padding-top: 0px;
	padding-left: 0px;
	border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

const Sidebar = () => {
	return (
		<Wrapper>
			<img src='/logo.png' alt='logo' width={34} height={33} />
		</Wrapper>
	);
};

export default Sidebar;
