import { ReactComponent as KHLogo } from '../assets/logo.svg';
import { ReactComponent as DrawerHamburger } from '../assets/drawerHamburger.svg';
import { useNavigate } from 'react-router-dom';

export default function HeaderBar() {
	let navigate = useNavigate();

	return (
		<div className="flex justify-between w-full p-4 shadow-headerbar mb-3">
			<div className="flex items-center">
				<button
					onClick={() => {
						/*TODO*/
					}}
				>
					<DrawerHamburger className="mr-4" />
				</button>

				<button onClick={() => navigate('/')}>
					<KHLogo />
				</button>
			</div>

			<button onClick={() => navigate('/settings')}>
				<div className="bg-orange-600 w-8 h-8 rounded-full" />
			</button>
		</div>
	);
}
