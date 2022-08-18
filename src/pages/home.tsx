import './home.css';
import React from "react";

export default function Home() {
  var userName = "John"
  return (
    <div>
        <div class="main-toolbar"/>

        <h1 class="header-text">Welcome, {userName}.</h1>
        <button class="hackathon-analytics-button">
            <body class="button-text">Hackathon Analytics</body>
        </button>

        <h1 class="subheader-text">Upcoming Hackathons</h1>
    </div>
  );
}
