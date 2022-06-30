import styled from 'styled-components';

import { colors } from '../constant/styles';

const Container = styled.div`
	display: flex;

	> a,
	a:hover,
	a:focus,
	a:active {
		text-decoration: none;
		color: inherit;
		margin-right: 30px;

		&.active {
			color: ${colors.blue};
		}
	}
`;

const Tabs = ({ className, children }) => {
	return <Container className={className}>{children}</Container>;
};

export default Tabs;
