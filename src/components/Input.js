import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;

export const Label = styled.label`
	font-size: 14px;
	margin-bottom: 6px;
	line-height: 21px;
	font-weight: 400;
`;

export const TextInput = styled.input`
	width: 360px;
	height: 40px;
	border: 1px solid #999999;
	border-radius: 6px;
	padding: 15px;
	padding-top: 9px;
	padding-bottom: 8px;
	outline: none;

	&:focus {
		border: 1px solid #5c90f3;
	}
`;

const Input = ({ className, children, name, type = 'text' }) => {
	return (
		<Container className={className}>
			<Label for={name}>{children}</Label>
			<TextInput type={type} id={name} name={name} />
		</Container>
	);
};

export default Input;
