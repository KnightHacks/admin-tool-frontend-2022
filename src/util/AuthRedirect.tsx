import { useEffect } from 'react'
import { gql, useLazyQuery } from '@apollo/client'
import { toast } from 'react-hot-toast'

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

		console.log(code, state)
		console.log(localStorage.getItem('code'), localStorage.getItem('state'))

		login().then((res) => {
			if (res.error) {
				console.log(res)
				toast.error(
					'Error logging in. Please try again. If the problem persists, please contact team@knighthacks.com with the error message below'
				)
			} else if (res.data) {
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
		<div className="flex flex-col justify-center items-center w-screen h-screen">
			<h1 className="font-bold text-3xl">Attempting to log you in...</h1>
			{loading && <p className="mt-4">Loading...</p>}
			{error && <p className="mt-4">Error: {error.message} </p>}
		</div>
	)
}
