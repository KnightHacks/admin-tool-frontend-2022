import {
	BrowserRouter,
	Navigate,
	Outlet,
	Route,
	Routes,
} from 'react-router-dom'
import { ReactNode } from 'react'
import './index.css'
import Analytics from './pages/analytics'
import Attendees from './pages/attendees'
import Hackathon from './pages/hackathon'
import Home from './pages/home'
import LoginPage from './pages/login'
import Logistics from './pages/logistics'
import Schedule from './pages/schedule'
import Sponsors from './pages/sponsors'
import { AuthProvider, useAuth } from './util/AuthProvider'

function ProtectedRoute({ redirectPath = '/login' }) {
	const { token, user } = useAuth()
	if (!token || !user) return <Navigate to={redirectPath} replace />
	return <Outlet />
}

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route path="/login" element={<LoginPage />} />
						<Route element={<ProtectedRoute />}>
							<Route path="/" element={<Home />} />
							<Route path="/sponsors" element={<Sponsors />} />
							<Route path="/attendees" element={<Attendees />} />
							<Route path="/schedule" element={<Schedule />} />
							<Route path="/hackathon" element={<Hackathon />} />
							<Route path="/analytics" element={<Analytics />} />
							<Route path="/logistics" element={<Logistics />} />
						</Route>
						<Route
							path="*"
							element={
								<p className="w-full h-full text-center">
									There's nothing here: 404!
								</p>
							}
						/>
					</Routes>
				</AuthProvider>
			</BrowserRouter>
		</div>
	)
}

export default App
