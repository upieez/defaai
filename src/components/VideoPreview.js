import styled from 'styled-components';

import Button from './Button';
import { colors } from '../constant/styles';

const PreviewButton = styled(Button)`
	background-color: ${colors.light_blue};
	color: ${colors.blue};
	font-weight: 500;
`;

const ListenButton = styled(Button)`
	width: 82px;
`;

const Container = styled.div`
	max-width: 740px;
	max-height: 640px;
	border-radius: 20px;
	background-color: #f4f4f4;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const PreviewContainer = styled.div`
	position: relative;
	margin-bottom: 18px;
`;

const PreviewButtonWrapper = styled.div`
	position: absolute;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	bottom: 26px;
	text-align: center;
`;

const ScriptContainer = styled.div`
	width: 700px;
	height: 188px;
	position: relative;
	border-radius: 20px;
	background-color: ${colors.white};
	padding: 19px 34px 22px 30px;
	color: ${colors.grey};
`;

const ListenButtonWrapper = styled.div`
	position: absolute;
	left: 30px;
	bottom: 13px;
`;

const VideoPreview = () => {
	return (
		<Container>
			<PreviewContainer>
				<img src='/images/YoYo_preview.png' alt='preview' />
				<PreviewButtonWrapper>
					<PreviewButton>Preview</PreviewButton>
				</PreviewButtonWrapper>
			</PreviewContainer>
			<ScriptContainer>
				<p>
					Type or paste your videoscript here. You can also request a
					translation of an English script to any of 27 other languages
				</p>
				<ListenButtonWrapper>
					<ListenButton>Listen</ListenButton>
				</ListenButtonWrapper>
			</ScriptContainer>
		</Container>
	);
};

export default VideoPreview;
