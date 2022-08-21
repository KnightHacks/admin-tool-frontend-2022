import './home.css';
import React from "react";

export default function Home() {
  var userName = "John"
  return (
    <div>
        <div className="main-toolbar"/>

        <h1 className="header-text">Welcome, {userName}.</h1>
        <button className="hackathon-analytics-button"/>
          
        <body className="hackathon-analytics-text">Hackathon Analytics</body>

        <h1 className="subheader-text-1">Upcoming Hackathons</h1>

        <button className="create-hackathon-button"/>
        <body className="create-hackathon-text">Create Hackathon</body>


        <h1 className="subheader-text-2">Recent Hackathons</h1>
    </div>
  );
}
