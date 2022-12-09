import React from 'react';
import HackathonInfoBar from '../components/hackathon/HackathonInfoBar';
import SponsorTable from '../components/sponsors/SponsorTable';

export default function Sponsors() {
	return (
		<>
			<HackathonInfoBar />
			<div className="w-screen h-screen p-10">
				<SponsorTable />
			</div>
		</>
	);
}
