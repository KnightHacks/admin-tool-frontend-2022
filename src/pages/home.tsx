import './home.css';
import React from 'react';
import { ReactComponent as PageLinksIcon} from '../assets/arrow.svg';
import { ReactComponent as CreateHackathonIcon } from '../assets/createHackathonIcon.svg';
import { ReactComponent as HackathonAnalyticsIcon } from '../assets/hackathonAnalyticsIcon.svg';
import { Link } from 'react-router-dom';

export default function Home() {
	var userName = 'John';
	return (
		<div>
			<div className="header">
				<div id="generic-profile-icon" />
				<h1 id="header-text">Welcome, {userName}.</h1>
			</div>

			<div className="hackathon-analytics">
        <Link to="/analytics">
          <button id="hackathon-analytics-button" />
          <HackathonAnalyticsIcon id="hackathon-analytics-icon" />
          <body id="hackathon-analytics-text">Hackathon Analytics</body>
        </Link>
			</div>

			<div className="subheader-1">
				<h1 id="subheader-1-text">Upcoming Hackathon</h1>
			</div>

			{/* <div className="page-links">				 */}
				{/* <div className="background-card"> */}
					<div id="hackathon-rectangle"/>
					<h1 id="hackathon-rectangle-text">Fall 2022</h1>
				{/* </div> */}

				{/* <div className="go-to-hackathon"> */}
        <Link to="/hackathon">
          <button className="hackathon-rectangle-button" id="hr-button-1"/>
					<PageLinksIcon className="arrow" id="hr-icon-button-1"/> 
					<body className="hr-button-text" id="hr-button-text-1">Go to Hackathon</body>
        </Link>
				{/* </div> */}

				{/* <div className="attendees"> */}
        <Link to="/attendees">
          <button className="hackathon-rectangle-button" id="hr-button-2"/>
          <PageLinksIcon className="arrow" id="hr-icon-button-2"/> 
					<body className="hr-button-text" id="hr-button-text-2"> Attendees </body>
        </Link>
				{/* </div> */}

				{/* <div className="sponsors"> */}
        <Link to="/sponsors">
          <button className="hackathon-rectangle-button" id="hr-button-3"/>
          <PageLinksIcon className="arrow" id="hr-icon-button-3"/> 
					<body className="hr-button-text" id="hr-button-text-3"> Sponsors </body>
        </Link>
				{/* </div> */}

				{/* <div className="edit-details"> */}
        <Link to="/">
          <button className="hackathon-rectangle-button" id="hr-button-4"/>
          <PageLinksIcon className="arrow" id="hr-icon-button-4"/> 
					<body className="hr-button-text" id="hr-button-text-4"> Edit Details </body>
        </Link>
				{/* </div> */}

				{/* <div className="schedule"> */}
        <Link to="/schedule">
          	<button className="hackathon-rectangle-button" id="hr-button-5"/>
            <PageLinksIcon className="arrow" id="hr-icon-button-5"/> 
            <body className="hr-button-text" id="hr-button-text-5"> Schedule </body>
        </Link>
				{/* </div> */}

				{/* <div className="settings"> */}
        <Link to="/">
          <button className="hackathon-rectangle-button" id="hr-button-6"/>
          <PageLinksIcon className="arrow" id="hr-icon-button-6"/> 
					<body className="hr-button-text" id="hr-button-text-6"> Settings </body>
        </Link>
				{/* </div> */}
			{/* </div> */}

			<div className="create-hackathon">
				<button id="create-hackathon-button" />
				<CreateHackathonIcon id="create-hackathon-icon" />
				<body id="create-hackathon-text">Create Hackathon</body>
			</div>

			<div className="subheader-2">
				<h1 className="" id="subheader-2-text">Recent Hackathons</h1>
			</div>

			<div className="table">
				{/* TODO: Add Table Component Here */}
			</div>
		</div>
	);
}
