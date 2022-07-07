import styled from 'styled-components';

import { colors } from '../constant/styles';

const Container = styled.div`
	display: flex;
	width: inherit;

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

	@media only screen and (max-width: 400px) {
		white-space: nowrap;
		overflow: scroll;
	}
`;

const Tabs = ({ className, children }) => {
	return <Container className={className}>{children}</Container>;
	// return null;
};

export default Tabs;
