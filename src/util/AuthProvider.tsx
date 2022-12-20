import { ReactNode, useState, createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuthRedirectLink } from '../../knighthacks-api-js/src/api/api'
import { JWT, Provider } from '../../knighthacks-api-js/src/types/types'
interface AuthParams {
	children?: ReactNode
}

interface AuthContextValues {
	token: string | null
	user: object | null
	handleLogin: (provider: Provider) => void
	handleLogout: () => void
}

const AuthContext = createContext<AuthContextValues>({
	token: null,
	user: null,
	handleLogin: (provider: Provider) => {},
	handleLogout: () => {},
})

function AuthProvider({ children }: AuthParams) {
	const [token, setToken] = useState<string | null>(null)
	// TODO: Create a user interface once it's clear what we get back from login
	const [user, setUser] = useState<object | null>(null)
	const navigate = useNavigate()

	const handleLogin = async (provider: Provider) => {
		// WIP
		const authRedirectURL: string = await getAuthRedirectLink(
			process.env.API_BASE || 'https://api-dev.knighthacks.org/',
			provider
		)
		window.open(authRedirectURL)

		setToken('TODO')
		setUser({})
		navigate('/')
	}

	const handleLogout = () => {
		setToken(null)
		setUser(null)
	}

	const value = {
		token,
		user,
		handleLogin,
		handleLogout,
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function useAuth(): AuthContextValues {
	return useContext(AuthContext)
}

export { AuthProvider, useAuth }
