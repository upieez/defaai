import styled from 'styled-components';

const mapImages = [
	{
		src: '/images/Anna.png',
		name: 'Anna',
	},
	{
		src: '/images/YoYo.png',
		name: 'YoYo',
	},
	{
		src: '/images/Skye.png',
		name: 'Skye',
	},
	{
		src: '/images/Mike.png',
		name: 'Mike',
	},
	{
		src: '/images/Vincent.png',
		name: 'Vincent',
	},
	{
		src: '/images/Peter.png',
		name: 'Peter',
	},
	{
		src: '/images/May.png',
		name: 'May',
	},
];

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 14px;
	max-width: 485px;

	> div {
		margin-right: 11px;
	}

	> p {
		text-align: center;
	}
`;

export const ImageWrapper = styled.div`
	margin-top: 15px;
	text-align: center;

	> p {
		font-size: 12px;
		color: #666666;
		line-height: 18px;
		margin-top: -6px;
	}
`;

const Actor = () => {
	return (
		<Container>
			{mapImages.map((img) => {
				return (
					<ImageWrapper>
						<img src={img.src} alt='preview' />
						<p>{img.name}</p>
					</ImageWrapper>
				);
			})}
		</Container>
	);
};

export default Actor;
