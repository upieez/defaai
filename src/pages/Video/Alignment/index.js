import styled from 'styled-components';

import Button from '../../../components/Button';

const Container = styled.div`
	margin-top: 29px;

	> * {
		margin-right: 22px;
	}

	@media only screen and (max-width: 400px) {
		display: block;
		white-space: nowrap;
		overflow: scroll;
	}
`;

const AlignmentButton = styled(Button)`
	background-color: #f1f1f1;
	font-size: 16px;
	color: #999999;
`;

const LeftButton = styled(AlignmentButton)`
	width: 129px;
	height: 50px;
`;

const CenterButton = styled(AlignmentButton)`
	width: 156px;
	height: 50px;
	border: 1px solid #3860ad;
	color: #3860ad;
	background-color: #ebf2ff;
`;

const RightButton = styled(AlignmentButton)`
	width: 143px;
	height: 50px;
`;

const Alignment = () => {
	return (
		<Container>
			<LeftButton>Left</LeftButton>
			<CenterButton>Center</CenterButton>
			<RightButton>Right</RightButton>
		</Container>
	);
};

export default Alignment;
