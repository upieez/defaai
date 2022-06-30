import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

import Tabs from '../../components/Tabs';
import VideoPreview from '../../components/VideoPreview';

const Container = styled.div`
	width: 100%;
	display: flex;
`;

const Options = styled.div`
	margin-left: 40px;
`;

const Video = () => {
	return (
		<Container>
			<VideoPreview />
			<Options>
				<Tabs>
					<NavLink to='actor'>Actor</NavLink>
					<NavLink to='voice'>Voice</NavLink>
					<NavLink to='alignment'>Alignment</NavLink>
					<NavLink to='background'>Background</NavLink>
				</Tabs>
				<Outlet />
			</Options>
		</Container>
	);
};

export default Video;
