import './home.css';
import React from "react";

export default function Home() {
  var userName = "John"
  return (
    <div>
        <div className="main-toolbar"/>

        <h1 className="header-text">Welcome, {userName}.</h1>
        <button className="hackathon-analytics-button">
            <body className="button-text">Hackathon Analytics</body>
        </button>

        <h1 className="subheader-text">Upcoming Hackathons</h1>
    </div>
  );
}
