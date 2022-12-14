import { ReactComponent as KHLogo } from '../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function HeaderBar() {
	const openProfileSettings = () => {
		// TODO
	}

	return (
		<div className="flex mb-2 justify-between w-full p-4 shadow-headerbar">
			<Link to="/">
				<KHLogo />
			</Link>
			<button
				className="bg-orange-600 w-8 h-8 rounded-full"
				onClick={openProfileSettings}
			/>
		</div>
	)
}
