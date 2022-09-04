import './home.css';
import { ReactComponent as PageLinksIcon } from '../assets/arrow.svg';
import { ReactComponent as CreateHackathonIcon } from '../assets/createHackathonIcon.svg';
import { ReactComponent as HackathonAnalyticsIcon } from '../assets/hackathonAnalyticsIcon.svg';
import { Link } from 'react-router-dom';

export default function Home() {
	// TODO: This user name should be generic.
	let userName: string = 'John';

	const pageLinks = [
		{
			route: '/hackathon',
			buttonText: 'Go to Hackathon',
		},

		{
			route: '/attendees',
			buttonText: 'Attendees',
		},

		{
			route: '/sponsors',
			buttonText: 'Sponsors',
		},

		{
			route: '/edit-details',
			buttonText: 'Edit Details',
		},

		{
			route: '/schedule',
			buttonText: 'Schedule',
		},

		{
			route: '/settings',
			buttonText: 'Settings',
		},
	];

	return (
		<div id="page">
			<div id="page-header">
				<div id="page-header-main">
					<div id="page-header-main-generic-profile-icon" />
					<h1 id="page-header-main-text">Welcome, {userName}.</h1>
				</div>

				<Link to="/analytics">
					<button id="page-header-button">
						<HackathonAnalyticsIcon id="page-header-button-icon" />
						<p id="page-header-button-text">
							Hackathon Analytics
						</p>
					</button>
				</Link>
			</div>

			<h1 id="page-subheader-1-text">Upcoming Hackathon</h1>

			<div id="page-links">
				<h1 id="page-links-header">Fall 2022</h1>

				<div id="page-links-grid">
					{pageLinks.map((pageLink) => (
						<Link to={pageLink.route}>
							<button className="page-links-grid-button">
								<PageLinksIcon className="page-links-grid-button-icon" />
								<body className="page-links-grid-button-text">
									{pageLink.buttonText}
								</body>
							</button>
						</Link>
					))}
				</div>
			</div>

			<div id="page-subheader-2">
				<h1 id="page-subheader-2-text">Recent Hackathons</h1>

				<Link to="/">
					<button id="page-subheader-2-button">
						<CreateHackathonIcon id="page-subheader-2-button-icon" />
						<p id="page-subheader-2-button-text">
							Create Hackathon
						</p>
					</button>
				</Link>
			</div>

			{/* TODO: Add Table Component Here */}
		</div>
	);
}
