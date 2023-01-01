import { ReactComponent as KHLogo } from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { UserCircleIcon } from '@heroicons/react/20/solid'

export default function HeaderBar() {
	return (
		<div className="flex mb-2 justify-between w-full p-4 shadow-headerbar">
			<Link to="/">
				<KHLogo />
			</Link>
			{/* TODO: Put this in top right corner and fix all the stylings */}
			<div className="fixed top-16 w-56 text-right">
				<Menu as="div" className="relative inline-block text-left">
					<div>
						<Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
							Options
							<UserCircleIcon
								className="ml-2 -mr-1 h-5 w-5 text-violet-200"
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
						<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
							<div className="px-1 py-1 ">
								<Menu.Item>
									{({ active }) => (
										<button
											className={`${
												active
													? 'bg-violet-500 text-white'
													: 'text-gray-900'
											} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
										>
											Edit
										</button>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<button
											className={`${
												active
													? 'bg-violet-500 text-white'
													: 'text-gray-900'
											} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
										>
											Duplicate
										</button>
									)}
								</Menu.Item>
							</div>
							<div className="px-1 py-1">
								<Menu.Item>
									{({ active }) => (
										<button
											className={`${
												active
													? 'bg-violet-500 text-white'
													: 'text-gray-900'
											} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
										>
											Archive
										</button>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<button
											className={`${
												active
													? 'bg-violet-500 text-white'
													: 'text-gray-900'
											} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
										>
											Move
										</button>
									)}
								</Menu.Item>
							</div>
							<div className="px-1 py-1">
								<Menu.Item>
									{({ active }) => (
										<button
											className={`${
												active
													? 'bg-violet-500 text-white'
													: 'text-gray-900'
											} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
										>
											Delete
										</button>
									)}
								</Menu.Item>
							</div>
						</Menu.Items>
					</Transition>
				</Menu>
			</div>
		</div>
	)
}
