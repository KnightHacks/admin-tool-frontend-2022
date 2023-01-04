import React from 'react'
import '../../components/login/Login.css'
import { ReactComponent as KHLogo } from '../../assets/logo.svg'
import { ReactComponent as GoogleLogo } from '../../assets/login/google.svg'
import { ReactComponent as GitHubLogo } from '../../assets/login/github.svg'

import { gql, useLazyQuery } from '@apollo/client'
import { toast } from 'react-hot-toast'
import { Provider } from '../../models/misc'
import { useLocation } from 'react-router-dom'

export default function Login() {
	const { state } = useLocation()

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
		if (provider === Provider.GMAIL)
			toast.error(
				'This sign-in option is not yet available. Please use GitHub for now!'
			)
		else
			signInWithGithub().then((data) => {
				window.open(data.data.getAuthRedirectLink, '_self')
			})
	}

	console.log(state)

	return (
		<div id="page-container">
			<div id="header-container">
				<KHLogo id="page-header-icon" />
				<h1 id="page-header-text">Admin Tool</h1>
			</div>
			<div id="login-container">
				<h1 id="login-header-text">Sign In</h1>
				<button
					id="github-button"
					onClick={() => handleLogin(Provider.GITHUB)}
				>
					<p id="github-button-text">Sign in with GitHub</p>
					<GitHubLogo id="github-button-icon" />
				</button>
				<div id="or-container">
					<div className="or-seperator" />
					<p>OR</p>
					<div className="or-seperator" />
				</div>
				<button
					id="google-button"
					onClick={() => handleLogin(Provider.GMAIL)}
				>
					<p>Sign in with </p>
					<GoogleLogo id="google-button-icon" />
				</button>
				{state && state.failedLogin && (
					<>
						<p className="text-red-600 text-center my-4">
							{state.errorMsg}
						</p>
						{state.shouldContact && (
							<p className="text-red-600 text-center">
								If this error persists, please contact:
								team@knighthacks.com
							</p>
						)}
					</>
				)}
			</div>
		</div>
	)
}
