import React, { useEffect, useState } from 'react'
import HackathonInfoBar from '../components/hackathon/HackathonInfoBar'
import HeaderBar from '../components/HeaderBar'
import SponsorTable from '../components/sponsors/SponsorTable'
import { useQuery, gql } from '@apollo/client'
import { LOAD_TOTAL_SPONSORS } from '../graphql/queries'

const {error, loading, data} = useQuery(LOAD_TOTAL_SPONSORS)

export default function Sponsors() {
	useEffect(() => {
		if (data) {
			setTotalSponsors(data)
		}
	}, [data])

	const [totalSponsors, setTotalSponsors] = useState(-1)

	return (
		<>
			<HeaderBar />
			<HackathonInfoBar />
			<div className="w-screen h-screen p-10">
				<SponsorTable />
			</div>
		</>
	)
}
