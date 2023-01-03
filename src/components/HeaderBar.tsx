import { ReactComponent as KHLogo } from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { UserCircleIcon } from '@heroicons/react/20/solid'
import { useAuth } from '../util/AuthProvider'

export default function HeaderBar() {
	const { handleLogout } = useAuth()

	return (
		<div className="flex mb-2 justify-between w-full p-4 shadow-headerbar">
			<Link to="/">
				<KHLogo />
			</Link>
			<div className="text-right">
				<Menu as="div" className="inline-block text-left">
					<div>
						<Menu.Button className="w-10 h-10">
							<UserCircleIcon
								className="w-full h-full"
								aria-hidden="true"
							/>
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className="absolute right-0 mt-2 mr-2 w-36 origin-top-right divide-y divide-gray-400 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-50 focus:outline-none z-10">
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											active ? 'bg-gray-200' : ''
										} text-gray-900 group flex w-full items-center rounded-sm px-2 py-2 text-sm`}
										onClick={handleLogout}
									>
										Log Out
									</button>
								)}
							</Menu.Item>
						</Menu.Items>
					</Transition>
				</Menu>
			</div>
		</div>
	)
}
