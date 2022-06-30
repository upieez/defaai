import styled from 'styled-components';

const Container = styled.div`
	margin-top: 29px;
	display: flex;
	flex-direction: column;
	width: min-content;

	> img {
		margin-bottom: 18px;
	}
`;

const Voice = () => {
	return (
		<Container>
			<img src='/images/voice_active_asian.png' alt='' srcset='' />
			<img src='/images/voice_inactive_british.png' alt='' srcset='' />
			<img src='/images/voice_inactive_american.png' alt='' srcset='' />
		</Container>
	);
};

export default Voice;
