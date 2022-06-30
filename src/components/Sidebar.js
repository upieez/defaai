import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

import { colors } from '../constant/styles';
import { VideoIcon, BrowseIcon } from '../icons';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	padding: 32px;
	padding-top: 0px;
	padding-left: 0px;
	border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

const ActionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 60px;
	text-align: center;

	> * {
		margin-bottom: 30px;
	}
`;

const StyledLink = styled(NavLink)`
	width: 60px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;

	&.active {
		background-color: ${colors.light_blue};
		svg {
			fill: ${colors.blue};
		}
	}

	svg {
		fill: ${colors.grey};
	}
`;

const Sidebar = () => {
	const location = useLocation();

	const isAuthPath = location.pathname.includes('auth');

	return (
		<Wrapper>
			<div>
				<img src='/logo.png' alt='logo' width={34} height={33} />
				{!isAuthPath && (
					<ActionWrapper>
						<StyledLink to='video/actor'>
							<VideoIcon />
						</StyledLink>
						<StyledLink to='browse'>
							<BrowseIcon />
						</StyledLink>
					</ActionWrapper>
				)}
			</div>
			{!isAuthPath && (
				<NavLink to='account/profile'>
					<img src='/images/avatar.png' alt='avatar' />
				</NavLink>
			)}
		</Wrapper>
	);
};

export default Sidebar;
