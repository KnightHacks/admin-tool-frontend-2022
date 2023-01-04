import {
	BrowserRouter,
	Navigate,
	Outlet,
	Route,
	Routes,
} from 'react-router-dom'

import './index.css'
import Analytics from './pages/analytics'
import Attendees from './pages/attendees'
import Hackathon from './pages/hackathon'
import Home from './pages/home'
import LoginPage from './pages/login'
import Logistics from './pages/logistics'
import Schedule from './pages/schedule'
import Sponsors from './pages/sponsors'
import AuthRedirect from './util/AuthRedirect'

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { Toaster } from 'react-hot-toast'

function ProtectedRoute({ redirectPath = '/login' }) {
	if (!localStorage.getItem('accessToken'))
		return <Navigate to={redirectPath} replace />
	return <Outlet />
}

function App() {
	const authLink = setContext((_, { headers }) => {
		const token = localStorage.getItem('accessToken')
		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : '',
			},
		}
	})

	const link = createHttpLink({
		uri: process.env.REACT_APP_API_ENDPOINT,
		credentials: 'include',
	})

	const client = new ApolloClient({
		cache: new InMemoryCache(),
		link: authLink.concat(link),
	})

	return (
		<div className="App">
			<ApolloProvider client={client}>
				<BrowserRouter>
					<Routes>
						<Route path="/login" element={<LoginPage />} />
						<Route
							path="/auth_redirect"
							element={<AuthRedirect />}
						/>
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
				</BrowserRouter>
				<Toaster position="top-center" />
			</ApolloProvider>
		</div>
	)
}

export default App
