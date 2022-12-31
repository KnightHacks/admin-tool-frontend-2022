import { ReactComponent as KHLogo } from '../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function HeaderBar() {
	const openProfileSettings = () => {
		// TODO: Open a popover menu with links to do various things
		// Only link for now is just to log out, but could add more in future years
		//  {
		// 		;(localStorage.getItem('code') ||
		// 			localStorage.getItem('state')) && (
		// 			<div
		// 				onClick={() => {
		// 					localStorage.removeItem('code')
		// 					localStorage.removeItem('state')
		// 					localStorage.removeItem('accessToken')
		// 					localStorage.removeItem('refreshToken')
		// 					window.location.reload()
		// 				}}
		// 			>
		// 				<Link to="/auth">
		// 					<button className="bg-eraser px-6 py-2 rounded-lg font-bold skew-y-0 hover:skew-y-2 eraserOne">
		// 						Sign Out
		// 					</button>
		// 				</Link>
		// 			</div>
		// 		)
		// 	}
		// 	{
		// 		!(
		// 			localStorage.getItem('code') ||
		// 			localStorage.getItem('state')
		// 		) && (
		// 			<Link to="/register">
		// 				<button className="bg-eraser px-6 py-2 rounded-lg font-bold skew-y-0 hover:skew-y-2 eraserOne">
		// 					Register Now
		// 				</button>
		// 			</Link>
		// 		)
		// 	}
	}

	return (
		<div className="flex mb-2 justify-between w-full p-4 shadow-headerbar">
			<Link to="/">
				<KHLogo />
			</Link>
			{/* TODO: Change this button into a settings icon or some kind of menu icon */}
			<button
				className="bg-orange-600 w-8 h-8 rounded-full"
				onClick={openProfileSettings}
			/>
		</div>
	)
}
