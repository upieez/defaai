import styled from 'styled-components';

import { colors } from '../../../constant/styles';
import Button from '../../../components/Button';
import mockData from './mockData';

const PlanButton = styled(Button)`
	width: 100%;
	height: 48px;

	background-color: ${colors.light_blue};
	font-weight: 600;
	font-size: 16px;
`;

const Container = styled.div`
	margin-top: 73px;
	display: flex;
	overflow: auto;

	:not(:first-child) {
		margin-left: 32px;
	}
`;

const CardHeader = styled.h1`
	font-size: 22px;
	margin-bottom: 20px;
`;

const CardBody = styled.div`
	display: flex;
	flex-direction: column;

	> :not(:first-child) {
		margin-top: 14px;
	}
`;

const PlanPrice = styled.div`
	font-size: 29px;
	font-weight: 700;
	color: #181059;
	margin-top: 12px;
	margin-bottom: 11px;
`;

const PlanFeature = styled.div`
	display: flex;
`;

const PlanText = styled.p`
	margin-left: 20px;
	font-size: 14px;
`;

const Card = styled.div`
	width: 260px;
	border-radius: 10px;
	padding: 24px;
	overflow: auto;

	${(props) =>
		props.currentPlan &&
		`
		background-color: ${colors.green};
		color: ${colors.white};

		${PlanButton} {
			background-color: ${colors.green};
			color: #1C7714;
		}

		${PlanPrice} {
			color: ${colors.white};
		}
	`}
`;

const Plan = () => {
	return (
		<Container>
			{mockData.map((data) => {
				return (
					<Card key={data.id} currentPlan={data.status === 'Current Plan'}>
						<CardHeader>{data.planName}</CardHeader>
						<CardBody>
							{data.features.map((feature) => {
								return (
									<PlanFeature key={feature.name}>
										{feature.icon}
										<PlanText>{feature.name}</PlanText>
									</PlanFeature>
								);
							})}
						</CardBody>
						<PlanPrice>${data.price}</PlanPrice>
						<PlanButton>{data.status}</PlanButton>
					</Card>
				);
			})}
		</Container>
	);
};

export default Plan;
