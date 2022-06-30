import { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Button from './Button';
import Tags, { TagsButton } from './Tags';
import { DownArrow } from '../icons';
import { colors } from '../constant/styles';

const Container = styled.div`
	width: 100%;
	margin-bottom: 20px;
	padding-bottom: 27px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	border-bottom: ${(props) => props.isAuthPath && '0'};
	display: flex;
	justify-content: space-between;
`;

const Header = styled.h1`
	font-size: 22px;
`;

const HeaderButton = styled(Button)`
	margin-right: 20px;
`;

const SaveButton = styled(HeaderButton)`
	background-color: ${colors.green};
	color: ${colors.white};
`;

const LogoutButton = styled(Button)`
	color: ${colors.red};
	background-color: transparent;
	font-size: 15px;
`;

const TitleWrapper = styled.div`
	display: flex;
	align-items: center;

	svg {
		cursor: pointer;
		margin-left: 20px;
		fill: #000000;
	}
`;

const title = {
	'/auth/login': 'Sign In',
	'/auth/signup': 'Create an account',
	'/video/actor': 'Saying Hi to my customers',
	'/video/voice': 'Saying Hi to my customers',
	'/video/alignment': 'Saying Hi to my customers',
	'/video/background': 'Saying Hi to my customers',
	'/browse': 'Saved Videos',
	'/account/profile': 'My Account',
	'/account/plan': 'My Account',
	'/account/billing': 'My Account',
};

const VideoButtons = () => {
	return (
		<div>
			<HeaderButton>Cancel</HeaderButton>
			<NavLink to='browse'>
				<SaveButton>Save</SaveButton>
			</NavLink>
		</div>
	);
};

const BrowseButton = () => {
	return (
		<div>
			<NavLink to='video/actor'>
				<SaveButton>Create New</SaveButton>
			</NavLink>
		</div>
	);
};

const Logout = () => {
	return (
		<div>
			<NavLink to='auth/login'>
				<LogoutButton
					onClick={() => {
						sessionStorage.removeItem('loggedIn');
					}}>
					Logout
				</LogoutButton>
			</NavLink>
		</div>
	);
};

const display = {
	'/video/actor': <VideoButtons />,
	'/video/voice': <VideoButtons />,
	'/video/alignment': <VideoButtons />,
	'/video/background': <VideoButtons />,
	'/browse': <BrowseButton />,
	'/account/profile': <Logout />,
	'/account/plan': <Logout />,
	'/account/billing': <Logout />,
};

const Overlay = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ffffff;
	opacity: 0.9;
	z-index: 2;
`;

const OverlayTitleWrapper = styled.div`
	z-index: 3;
	position: absolute;
	color: ${colors.blue};
`;

const OverlayHeader = styled(Header)`
	border-bottom: 1px solid #b3caf6;
	margin-bottom: 21px;
	width: 324px;
`;

const OverlayDescription = styled.div`
	border-bottom: rgba(0, 0, 0, 0.1);
	color: #666666;
	width: 722px;
	font-size: 15px;
`;

const TagsContainer = styled.div`
	margin-top: 21px;
	display: flex;

	${TagsButton} {
		margin-right: 10px;
	}
`;

const ButtonWrapper = styled.div`
	margin-top: 23px;
`;

const Topbar = () => {
	const location = useLocation();
	const [openOverlay, setOverlay] = useState(false);

	const isVideoPath = location.pathname.includes('video');
	const isAuthPath = location.pathname.includes('auth');

	return (
		<Container isAuthPath={isAuthPath}>
			{openOverlay && <Overlay />}
			{!openOverlay && (
				<TitleWrapper>
					<Header>{title[location.pathname]}</Header>
					{isVideoPath && (
						<div
							onClick={() => {
								setOverlay(true);
							}}>
							<DownArrow />
						</div>
					)}
				</TitleWrapper>
			)}
			{openOverlay && (
				<OverlayTitleWrapper>
					<OverlayHeader>{title[location.pathname]} |</OverlayHeader>
					<OverlayDescription>
						Fusce quis magna vel ex pellentesque consequat sed et turpis.
						Vivamus bibendum rutrum euismod. Sed non sagittis est, semper
					</OverlayDescription>
					<TagsContainer>
						<Tags>Email</Tags>
						<Tags>Marketing</Tags>
						<Tags>Greeting</Tags>
						<Tags>Email</Tags>
						<Tags>Marketing</Tags>
						<Tags>Greeting</Tags>
					</TagsContainer>
					<ButtonWrapper>
						<SaveButton
							onClick={() => {
								setOverlay(false);
							}}>
							Save
						</SaveButton>
					</ButtonWrapper>
				</OverlayTitleWrapper>
			)}
			{display[location.pathname]}
		</Container>
	);
};

export default Topbar;
