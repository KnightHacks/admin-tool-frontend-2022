import './home.css';
import React from "react";
import { ReactComponent as CreateHackathonIcon } from '../assets/createHackathonIcon.svg';
import { ReactComponent as HackathonAnalyticsIcon } from '../assets/hackathonAnalyticsIcon.svg';

export default function Home() {
  var userName = "John"
  return (
    <div>
      <div>
        <div className="generic-profile-icon"/>
        <h1 className="header-text">Welcome, {userName}.</h1>
      </div>

      <button className="hackathon-analytics-button">          
        <HackathonAnalyticsIcon className="hackathon-analytics-icon"/>
      </button>
      <body className="hackathon-analytics-text">Hackathon Analytics</body>

      <h1 className="subheader-text-1">Upcoming Hackathons</h1>

      {/* TODO: Add Button Page Links Here */}

      <button className="create-hackathon-button">          
        <CreateHackathonIcon className="create-hackathon-icon"/>
      </button>
      <body className="create-hackathon-text">Create Hackathon</body>

      <h1 className="subheader-text-2">Recent Hackathons</h1>

      {/* TODO: Add Table Component Here */}
    </div>
  );
}
