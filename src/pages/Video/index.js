import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

import Button from '../../components/Button';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;

const VideoPreview = styled.div`
	width: 50%;
`;

const Options = styled.div`
	width: 50%;
`;

const VideoPlayer = styled.div`
	width: 740px;
	height: 640px;
	border-radius: 20px;
	background-color: #f4f4f4;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const VideoContainer = styled.div`
	position: relative;
	margin-bottom: 18px;
`;

const ButtonWrapper = styled.div`
	position: absolute;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	bottom: 26px;
	text-align: center;
`;

const VideoScriptContainer = styled.div`
	width: 700px;
	height: 188px;
	position: relative;
	border-radius: 20px;
	background-color: #ffffff;
	padding: 19px 34px 22px 30px;
`;

const VideoScriptText = styled.p`
	color: #999999; ;
`;

const VideoScriptTextWrapper = styled.div`
	position: absolute;
	left: 30px;
	bottom: 13px;
`;

const Tabs = styled.div`
	display: flex;

	> :not(:first-child) {
		margin-left: 30px;
	}

	> a,
	a:hover,
	a:focus,
	a:active {
		text-decoration: none;
		color: inherit;
	}
`;

const Video = () => {
	return (
		<Container>
			<VideoPreview>
				<VideoPlayer>
					<VideoContainer>
						<img
							src='/images/YoYo_preview.png'
							alt=''
							width={700}
							height={393}
						/>
						<ButtonWrapper>
							<Button>Preview</Button>
						</ButtonWrapper>
					</VideoContainer>

					<VideoScriptContainer>
						<VideoScriptText>
							Type or paste your videoscript here. You can also request a
							translation of an English script to any of 27 other languages
						</VideoScriptText>
						<VideoScriptTextWrapper>
							<Button>Listen</Button>
						</VideoScriptTextWrapper>
					</VideoScriptContainer>
				</VideoPlayer>
			</VideoPreview>
			<Options>
				<Tabs>
					<Link to='actor'>Actor</Link>
					<Link to='voice'>Voice</Link>
					<Link to='alignment'>Alignment</Link>
					<Link to='background'>Background</Link>
				</Tabs>
				<Outlet />
			</Options>
		</Container>
	);
};

export default Video;
