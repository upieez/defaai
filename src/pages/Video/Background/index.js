import styled from 'styled-components';

import { UpArrow, DownArrow } from '../../../icons';
import { ImageWrapper } from '../Actor';

const mapImages = [
	{
		src: '/images/Upload.png',
		name: 'Upload',
	},
	{
		src: '/images/Office.png',
		name: 'Office',
	},
	{
		src: '/images/Space.png',
		name: 'Space',
	},
	{
		src: '/images/Noise.png',
		name: 'Noise',
	},
	{
		src: '/images/Meeting.png',
		name: 'Meeeting',
	},
	{
		src: '/images/Books.png',
		name: 'Books',
	},
	{
		src: '/images/Desk.png',
		name: 'Desk',
	},
];

const Container = styled.div`
	margin-top: 29px;
`;
const ImagesContainer = styled.div`
	width: 501px;
	height: 412px;
	color: #3860ad;
	background-color: #ebf2ff;
	border-radius: 6px;

	display: flex;
	flex-wrap: wrap;
	margin-top: 14px;
	justify-content: space-between;
`;
const ImagePreview = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	> ${ImageWrapper} {
		margin-top: 0;
		margin-right: 11px;

		&:nth-child(3n + 1) {
			margin-left: 15px;
		}
	}

	> p {
		text-align: center;
	}
`;
const Title = styled.div`
	display: flex;
	justify-content: space-between;
	padding-inline: 15px;
	width: 100%;
	align-items: center;
`;
const ColorsContainer = styled.div`
	max-width: 501px;
	color: #999999;
	padding-top: 15px;
	padding-bottom: 12px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const VideosContainer = styled.div`
	max-width: 501px;
	color: #999999;
	padding-top: 15px;
	padding-bottom: 12px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Background = () => {
	return (
		<Container>
			<ImagesContainer>
				<Title>
					<p>Images</p> <UpArrow />
				</Title>
				<ImagePreview>
					{mapImages.map((img) => {
						return (
							<ImageWrapper>
								<img src={img.src} alt='preview' />
								<p>{img.name}</p>
							</ImageWrapper>
						);
					})}
				</ImagePreview>
			</ImagesContainer>
			<ColorsContainer>
				<Title>
					<p>Solid Colours</p> <DownArrow />
				</Title>
			</ColorsContainer>
			<VideosContainer>
				<Title>
					<p>Videos</p> <DownArrow />
				</Title>
			</VideosContainer>
		</Container>
	);
};

export default Background;
