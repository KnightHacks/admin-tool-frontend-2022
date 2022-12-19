import { ReactComponent as KHLogo } from '../assets/logo.svg'
import { ReactComponent as DrawerHamburger } from '../assets/drawerHamburger.svg'
import { Link } from 'react-router-dom'

export default function HeaderBar() {
	return (
		<div className="flex mb-2 justify-between w-full p-4 shadow-headerbar">
			<div className="flex items-center">
				{/* TODO: Open drawer */}
				<Link to="/">
					<DrawerHamburger className="mr-4" />
				</Link>
				<Link to="/">
					<KHLogo />
				</Link>
			</div>

			<Link to="/settings">
				<div className="bg-orange-600 w-8 h-8 rounded-full" />
			</Link>
		</div>
	)
}
