import styled from 'styled-components';

import PDF from '../../../icons/PDF';
import FilterDownArrow from '../../../icons/FilterDownArrow';

const Container = styled.div`
	margin-top: 57px;
	overflow: auto;

	@media only screen and (max-width: 400px) {
		width: 250px;
	}
`;

const Table = styled.table`
	width: 700px;
	overflow: auto;

	tr {
		text-align: left;
		font-family: 'Poppins';
		font-size: 14px;
		font-weight: 600;
		line-height: 24px;
		letter-spacing: 0px;
		text-align: left;

		th {
			color: #222222;
			opacity: 50%;
		}
	}
`;

const TableHeader = styled.tr`
	margin-bottom: 12px;

	.date {
		display: flex;
		align-items: center;

		svg {
			margin-left: 12px;
		}
	}
`;

const TableBody = styled.tr`
	td {
		padding-block: 20px;
		margin-block: 20px;
		font-weight: 500;
	}
`;

const Billing = () => {
	return (
		<Container>
			<Table>
				<TableHeader>
					<th>Reference ID</th>
					<th className='date'>
						Date <FilterDownArrow />
					</th>
					<th>Amount</th>
					<th>Invoice</th>
				</TableHeader>
				<TableBody>
					<td>4571222f6rthswfg9981fr55</td>
					<td>7/12/2020</td>
					<td>$28</td>
					<td>
						<PDF />
					</td>
				</TableBody>
				<TableBody>
					<td>4571222f6rthswfg9981fr55</td>
					<td>7/12/2020</td>
					<td>$36</td>
					<td>
						<PDF />
					</td>
				</TableBody>
				<TableBody>
					<td>4571222f6rthswfg9981fr55</td>
					<td>7/12/2020</td>
					<td>$14</td>
					<td>
						<PDF />
					</td>
				</TableBody>
			</Table>
		</Container>
	);
};

export default Billing;
