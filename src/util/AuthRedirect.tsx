import { useEffect } from 'react'
import { gql, useLazyQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { Role } from '../models/user'

export default function AuthRedirect() {
	const navigate = useNavigate()

	const LOGIN = gql`
		query Login($code: String!, $provider: Provider!, $state: String!) {
			login(code: $code, provider: $provider, state: $state) {
				accessToken
				accountExists
				encryptedOAuthAccessToken
				refreshToken
				user {
					id
					role
				}
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
				navigate('/login', {
					replace: true,
					state: {
						failedLogin: true,
						shouldContact: true,
						errorMsg: 'Error logging in: ' + res.error,
					},
				})
			} else if (res.data) {
				if (!res.data.login.accountExists) {
					navigate('/login', {
						replace: true,
						state: {
							failedLogin: true,
							errorMsg: 'No account exists for this user!',
						},
					})
				} else if (res.data.user.role !== Role.ADMIN) {
					navigate('/login', {
						replace: true,
						state: {
							failedLogin: true,
							errorMsg:
								"You don't have access to the admin dashboard!",
						},
					})
				} else {
					localStorage.setItem(
						'accessToken',
						res.data.login.accessToken
					)
					localStorage.setItem(
						'refreshToken',
						res.data.login.refreshToken
					)
					navigate('/', {
						replace: true,
					})
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
