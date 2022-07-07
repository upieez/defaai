import styled from 'styled-components';

import Tags from '../../components/Tags';
import ThreeDots from '../../icons/ThreeDots';

const Container = styled.div`
	margin-top: 17px;
`;

const Card = styled.div`
	width: 286px;
	height: 238px;
	border-radius: 6px;
	background-color: #f4f4f4;

	padding: 5px;
	padding-bottom: 14px;

	@media only screen and (max-width: 400px) {
		width: 200px;
	}
`;

const ImageContainer = styled.div`
	position: relative;

	img {
		width: 276px;
		height: 155px;

		@media only screen and (max-width: 400px) {
			width: 190px;
			height: 112px;
		}
	}
`;

const IconContainer = styled.div`
	position: absolute;
	right: 10px;
	top: 0;
`;

const CardBody = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
`;

const TagsContainer = styled.div`
	display: flex;
	margin-top: 13px;
	justify-content: center;
	flex-wrap: wrap;
`;

const Browse = () => {
	return (
		<Container>
			<Card>
				<ImageContainer>
					<img
						src='/images/YoYo_preview.png'
						alt=''
						srcset=''
						width={276}
						height={155}
					/>
					<IconContainer>
						<ThreeDots />
					</IconContainer>
				</ImageContainer>
				<CardBody>
					Saying Hi to users!
					<TagsContainer>
						<Tags>Email</Tags>
						<Tags>Marketing</Tags>
						<Tags>Greeting</Tags>
					</TagsContainer>
				</CardBody>
			</Card>
		</Container>
	);
};

export default Browse;
