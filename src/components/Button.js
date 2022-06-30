import styled from 'styled-components';

import { colors } from '../constant/styles';

const Wrapper = styled.button`
	width: fit-content;
	height: 35px;
	border-radius: 6px;
	border-style: none;
	background-color: ${(props) =>
		props.isActive ? colors.light_blue : colors.default};
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	color: ${colors.grey};
	padding: 6px 20px;
	cursor: pointer;
`;

const Button = ({ children, className, ...props }) => {
	return (
		<Wrapper className={className} {...props}>
			{children}
		</Wrapper>
	);
};

export default Button;
