import { useEffect } from 'react'
import { gql, useLazyQuery } from '@apollo/client'
import makeFetchCookie from 'fetch-cookie'
import { toast } from 'react-hot-toast'

const fetchCookie = makeFetchCookie(
	fetch,
	new makeFetchCookie.toughCookie.CookieJar()
)

export default function AuthRedirect() {
	const LOGIN = gql`
		query Login($code: String!, $provider: Provider!, $state: String!) {
			login(code: $code, provider: $provider, state: $state) {
				accessToken
				accountExists
				encryptedOAuthAccessToken
				refreshToken
			}
		}
	`

	const [login, { loading, error }] = useLazyQuery(LOGIN, {
		variables: {
			provider: 'GITHUB',
			code: localStorage.getItem('code'),
			state: localStorage.getItem('state'),
		},
	})

	useEffect(() => {
		const queryString = window.location.search
		const urlParams = new URLSearchParams(queryString)
		const code = urlParams.get('code')
		localStorage.setItem('code', code ?? '')
		const state = urlParams.get('state')
		localStorage.setItem('state', state ?? '')
		login().then((res) => {
			if (res.error) {
				toast.error(
					'Error logging in. Please try again. If the problem persists, please contact team@knighthacks.com with the error message below'
				)
			}
			if (res.data) {
				if (!res.data.login.accountExists) {
					toast.error(
						'Login failed: no account exists for this user.'
					)
					window.location.pathname = '/login'
				} else {
					localStorage.setItem(
						'accessToken',
						res.data.login.accessToken
					)
					localStorage.setItem(
						'refreshToken',
						res.data.login.refreshToken
					)
					window.location.pathname = '/'
				}
			}
		})
	}, [])

	return (
		<div className="flex justify-center align-middle h-full">
			<div>
				<h1 className="flex align-middle mt-64 font-bold text-3xl">
					Attempting to log you in...
				</h1>
				{loading && <p className="text-center mt-4">Loading...</p>}
				{error && (
					<p className=" text-center mt-4">Error: {error.message} </p>
				)}
			</div>
		</div>
	)
}
