import React from 'react'
import '../../components/login/Login.css'
import { ReactComponent as KHLogo } from '../../assets/logo.svg'
import { ReactComponent as GoogleLogo } from '../../assets/login/google.svg'
import { ReactComponent as GitHubLogo } from '../../assets/login/github.svg'
import { Provider, useAuth } from '../../util/AuthProvider'
//import { Provider } from 'knighthacks-api-js'

export default function Login() {
	const { handleLogin } = useAuth()

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
			</div>
		</div>
	)
}
