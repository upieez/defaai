import styled from 'styled-components';

const Wrapper = styled.button`
	width: 99px;
	height: 35px;
	border-radius: 6px;
	border-style: none;
	background-color: #ebf2ff;
	font-family: 'Poppins';
	color: #3860ad;
`;

const Button = ({ children, className }) => {
	return <Wrapper className={className}>{children}</Wrapper>;
};

export default Button;
