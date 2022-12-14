import { ReactNode, useState, createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

interface AuthParams {
	children?: ReactNode
}

interface AuthContextValues {
	token: string | null
	user: object | null
	handleLogin: () => void
	handleLogout: () => void
}

const login = async (
	setToken: (newToken: string | null) => void,
	setUser: (newUser: object | null) => void
) => {
	setToken('TODO')
	setUser({})
}

const AuthContext = createContext<AuthContextValues | null>(null)

function AuthProvider({ children }: AuthParams) {
	const [token, setToken] = useState<string | null>(null)
	// TODO: Create a user interface once it's clear what we get back from login
	const [user, setUser] = useState<object | null>(null)
	const navigate = useNavigate()

	const handleLogin = async () => {
		await login(setToken, setUser)
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

function useAuth(): AuthContextValues | null {
	return useContext(AuthContext)
}

export { AuthProvider, useAuth }
