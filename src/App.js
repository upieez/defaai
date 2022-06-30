import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Main from './Main';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Auth from './pages/Auth';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Video from './pages/Video';
import Actor from './pages/Video/Actor';
import Alignment from './pages/Video/Alignment';
import Background from './pages/Video/Background';
import Voice from './pages/Video/Voice';
import Account from './pages/Account';
import Profile from './pages/Account/Profile';
import Plan from './pages/Account/Plan';
import Billing from './pages/Account/Billing';
import Browse from './pages/Browse';

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
					<Route path='auth' element={<Auth />}>
						<Route path='login' element={<Login />} />
						<Route path='signup' element={<Signup />} />
					</Route>
					<Route path='video' element={<Video />}>
						<Route path='actor' element={<Actor />} />
						<Route path='voice' element={<Voice />} />
						<Route path='alignment' element={<Alignment />} />
						<Route path='background' element={<Background />} />
					</Route>
					<Route path='browse' element={<Browse />} />
					<Route path='account' element={<Account />}>
						<Route path='profile' element={<Profile />} />
						<Route path='plan' element={<Plan />} />
						<Route path='billing' element={<Billing />} />
					</Route>
				</Routes>
			</Main>
		</Container>
	);
}

export default App;
