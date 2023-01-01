import { ReactNode, useState, createContext, useContext } from 'react'
//import { useNavigate } from 'react-router-dom'
import { gql, useLazyQuery } from '@apollo/client'
import { toast } from 'react-hot-toast'

interface AuthParams {
	children?: ReactNode
}

export enum Provider {
	GITHUB = 'GITHUB',
	GMAIL = 'GMAIL',
}

interface AuthContextValues {
	token: string | null
	user: object | null
	handleLogin: (provider: Provider) => void
	handleLogout: () => void
}

const AuthContext = createContext<AuthContextValues>({
	token: 'null',
	user: {},
	handleLogin: (provider: Provider) => {},
	handleLogout: () => {},
})

function AuthProvider({ children }: AuthParams) {
	const [token, setToken] = useState<string | null>('null')
	// TODO: Create a user interface once it's clear what we get back from login
	const [user, setUser] = useState<object | null>({})
	//const navigate = useNavigate()

	const GET_AUTH_LINK = gql`
		query Request($provider: Provider!) {
			getAuthRedirectLink(provider: $provider)
		}
	`

	const [signInWithGithub] = useLazyQuery(GET_AUTH_LINK, {
		variables: {
			provider: 'GITHUB',
		},
	})

	const handleLogin = async (provider: Provider) => {
		// TODO: Update with cookies
		if (provider === Provider.GMAIL)
			toast.error(
				'This sign-in option is not yet available. Please use GitHub for now!'
			)
		else
			signInWithGithub().then((data) => {
				console.log(data.data.getAuthRedirectLink)
				window.open(data.data.getAuthRedirectLink, '_self')
			})
	}

	const handleLogout = () => {
		// TODO: Update with cookies
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
