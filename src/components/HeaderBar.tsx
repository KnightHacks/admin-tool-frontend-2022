import { ReactComponent as KHLogo } from '../assets/logo.svg';
import { ReactComponent as DrawerHamburger } from '../assets/drawerHamburger.svg';
import { Link, useNavigate } from 'react-router-dom';

export default function HeaderBar() {
	let navigate = useNavigate();

	return (
		<div className="flex justify-between w-full p-8 shadow-headerbar mb-3">
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
	);
}
