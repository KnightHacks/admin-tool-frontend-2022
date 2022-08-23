import './home.css';
import React from "react";

export default function Home() {
  var userName = "John"
  return (
    <div>      
        {/* TODO: Add Main Toolbar Component here */}
        <div className="main-toolbar"/>

        <h1 className="header-text">Welcome, {userName}.</h1>

        <div>
          <button className="hackathon-analytics-button"/>          
          <body className="hackathon-analytics-text">Hackathon Analytics</body>
        </div>

        <h1 className="subheader-text-1">Upcoming Hackathons</h1>
        
        {/* TODO: Add Button Page Links Here */}

        <div>
          <button className="create-hackathon-button"/>
          <body className="create-hackathon-text">Create Hackathon</body>
        </div>

        <h1 className="subheader-text-2">Recent Hackathons</h1>
        
        {/* TODO: Add Table Component Here */}
    </div>
  );
}
