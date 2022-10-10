import React from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sponsors from './pages/Sponsors'
import Attendees from './pages/Attendees'
import Schedule from './pages/Schedule'
import Hackathon from './pages/Hackathon'
import Analytics from './pages/Analytics'
import Logistics from './pages/Logistics'
import HeaderBar from './components/HeaderBar'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<HeaderBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sponsors" element={<Sponsors />} />
					<Route path="/attendees" element={<Attendees />} />
					<Route path="/schedule" element={<Schedule />} />
					<Route path="/hackathon" element={<Hackathon />} />
					<Route path="/analytics" element={<Analytics />} />
					<Route path="/logistics" element={<Logistics />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
