import styled from 'styled-components';

import { colors } from '../../../constant/styles';
import Button from '../../../components/Button';
import { PencilIcon } from '../../../icons';
import Input from '../../../components/Input';

const SaveButton = styled(Button)`
	width: 143px;
	background-color: ${colors.green};
	color: ${colors.white};
`;

const Container = styled.div`
	margin-top: 45px;
`;

const ImageContainer = styled.div`
	display: flex;
	align-items: center;
`;

const PencilWrapper = styled.div`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background-color: #ebf2ff;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 20px;
`;

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;

	label {
		font-family: 'Poppins';
		font-size: 14px;
		margin-bottom: 6px;
		line-height: 21px;
	}

	input {
		width: 360px;
		height: 40px;
		border: 1px solid #999999;
		border-radius: 6px;

		&:focus {
			border: 1px solid purple;
		}
	}
`;

const InputContainer = styled.div`
	width: 760px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-top: 23px;
	margin-bottom: 40px;

	@media only screen and (max-width: 400px) {
		width: auto;
	}
`;

const Profile = () => {
	return (
		<Container>
			<ImageContainer>
				<img src='/images/Profile.png' alt='profile' />
				<PencilWrapper>
					<PencilIcon />
				</PencilWrapper>
			</ImageContainer>
			<InputContainer>
				<Input name='firstName'>First Name</Input>
				<Input name='lastName'>Last Name</Input>
				<Input name='email'>Email Name</Input>
			</InputContainer>
			<SaveButton>Save Changes</SaveButton>
		</Container>
	);
};

export default Profile;
