import Tick from '../../../icons/Tick';
import Cross from '../../../icons/Cross';

const data = [
	{
		id: 1,
		planName: 'Free',
		features: [
			{
				icon: (
					<i>
						<Tick />
					</i>
				),
				name: 'Pellentesque interdum libero et',
			},
			{
				icon: (
					<i>
						<Tick />
					</i>
				),
				name: 'Pellentesque posuere jdfkdfkdfhd',
			},
			{
				icon: (
					<i>
						<Tick />
					</i>
				),
				name: 'Cras sed felis eget',
			},
			{
				icon: (
					<i>
						<Tick />
					</i>
				),
				name: 'Maecenas eget luctus',
			},
			{
				icon: (
					<i>
						<Tick />
					</i>
				),
				name: 'Nullam vitae augue',
			},
		],
		price: 0,
		status: 'Downgrade',
	},
	{
		id: 2,
		planName: 'Pro',
		features: [
			{
				icon: (
					<i>
						<Tick />
					</i>
				),
				name: 'Maecenas eget luctus purus',
			},
			{
				icon: (
					<i>
						<Tick />
					</i>
				),
				name: 'Graesent in sollicitudin velit',
			},
			{
				icon: (
					<i>
						<Tick />
					</i>
				),
				name: 'Donec in orci vitae nisi ',
			},
			{
				icon: (
					<i>
						<Tick />
					</i>
				),
				name: 'Class aptent taciti',
			},
			{
				icon: (
					<i>
						<Cross />
					</i>
				),
				name: 'Ut blandit vestibulum',
			},
		],
		price: 12,
		status: 'Downgrade',
	},
	{
		id: 3,
		planName: 'Team',
		features: [
			{
				icon: (
					<i>
						<Tick variant='invert' />
					</i>
				),
				name: 'Etiam ac finibus nisi, a porttitor',
			},
			{
				icon: (
					<i>
						<Tick variant='invert' />
					</i>
				),
				name: 'Quisque tincidunt velit a sapien vulputate ',
			},
			{
				icon: (
					<i>
						<Tick variant='invert' />
					</i>
				),
				name: 'Vivamus pulvinar',
			},
			{
				icon: (
					<i>
						<Tick variant='invert' />
					</i>
				),
				name: 'In hac habitasse platea',
			},
			{
				icon: (
					<i>
						<Cross variant='invert' />
					</i>
				),
				name: 'Nullam vitae augue',
			},
		],
		price: 23,
		status: 'Current Plan',
	},
	{
		id: 4,
		planName: 'Agency',
		features: [
			{
				icon: (
					<i>
						<Tick />
					</i>
				),
				name: 'Praesent in sollicitudin velit',
			},
			{
				icon: (
					<i>
						<Tick />
					</i>
				),
				name: 'Nulla tincidunt finibus interdum',
			},
			{
				icon: (
					<i>
						<Tick />
					</i>
				),
				name: 'Nullam vitae augue',
			},
			{
				icon: (
					<i>
						<Tick />
					</i>
				),
				name: 'Curabitur eleifend',
			},
			{
				icon: (
					<i>
						<Tick />
					</i>
				),
				name: 'Quisque vel ex enim',
			},
		],
		price: 43,
		status: 'Upgrade',
	},
];

export default data;
