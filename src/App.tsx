import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderBar from './components/HeaderBar'
import './index.css'
import Analytics from './pages/Analytics'
import Attendees from './pages/Attendees'
import Hackathon from './pages/Hackathon'
import Home from './pages/Home'
import Logistics from './pages/Logistics'
import Schedule from './pages/Schedule'
import Sponsors from './pages/Sponsors'

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
