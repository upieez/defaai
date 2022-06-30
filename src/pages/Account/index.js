import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

import Tabs from '../../components/Tabs';

const Container = styled.div`
	margin-top: 8px;
`;

const Account = () => {
	return (
		<Container>
			<Tabs>
				<NavLink to='profile'>Profile</NavLink>
				<NavLink to='plan'>My Plan</NavLink>
				<NavLink to='billing'>Billing</NavLink>
			</Tabs>
			<Outlet />
		</Container>
	);
};

export default Account;
