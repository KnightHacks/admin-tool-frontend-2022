import React from "react";

export default function Hackathon({
	hackathonData = {
		attendees: [],
		endDate: new Date(),
		events: [],
		id: "alsjflajwelse",
		sponsors: [],
		startDate: new Date(),
		status: "PRESENT",
		term: {
			semester: "FALL",
			year: 2022,
		},
	},
}) {
	return (
		<div >
			<h1>Hackathon</h1>
		</div>
	);
}
