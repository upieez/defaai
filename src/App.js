import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Video from './pages/Video';
import Actor from './pages/Video/Actor';
import Alignment from './pages/Video/Alignment';
import Background from './pages/Video/Background';
import Voice from './pages/Video/Voice';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Main from './Main';

const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	padding: 39px 30px 40px 20px;
`;

function App() {
	return (
		<Container>
			<Sidebar />
			<Main>
				<Topbar />
				<Routes>
					<Route path='login' element={<Login />} />
					<Route path='video' element={<Video />}>
						<Route path='actor' element={<Actor />} />
						<Route path='voice' element={<Voice />} />
						<Route path='alignment' element={<Alignment />} />
						<Route path='background' element={<Background />} />
					</Route>
				</Routes>
			</Main>
		</Container>
	);
}

export default App;
