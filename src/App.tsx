import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderBar from './components/HeaderBar'
import './index.css'
import Analytics from './pages/analytics'
import Attendees from './pages/attendees'
import Hackathon from './pages/hackathon'
import Home from './pages/home'
import Logistics from './pages/logistics'
import Schedule from './pages/schedule'
import Sponsors from './pages/sponsors'
import { AuthProvider } from './util/AuthProvider'

function App() {
	return (
		<div className="App">
			<AuthProvider>
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
			</AuthProvider>
		</div>
	)
}

export default App
