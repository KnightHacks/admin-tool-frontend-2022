import { ReactNode, useState, createContext, useContext } from 'react'
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
	token: null,
	user: null,
	handleLogin: (provider: Provider) => {},
	handleLogout: () => {},
})

function AuthProvider({ children }: AuthParams) {
	const [token, setToken] = useState<string | null>(null)
	const [user, setUser] = useState<object | null>(null) // TODO: make a type

	const GET_AUTH_LINK = gql`
		query Request($provider: Provider!, $redirect: String!) {
			getAuthRedirectLink(provider: $provider, redirect: $redirect)
		}
	`

	const [signInWithGithub] = useLazyQuery(GET_AUTH_LINK, {
		variables: {
			provider: 'GITHUB',
			redirect: process.env.REACT_APP_OAUTH_AUTH_REDIRECT,
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
		// localStorage.removeItem("code");
		// localStorage.removeItem("state");
		// localStorage.removeItem("accessToken");
		// localStorage.removeItem("refreshToken");
		// window.location.reload();
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
