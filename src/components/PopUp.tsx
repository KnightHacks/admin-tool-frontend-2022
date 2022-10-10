import { useRef, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ReactComponent as CloseIcon } from '../assets/Attendees/close.svg'

/**
 * @param open determines whether the popup should be shown or not.
 * @param setOpen function that will set open to some value, and do any other necessary actions.
 * @param headerContent any content that needs to be stored in the header of the popup (above the gray line).
 * @param bodyContent any content that needs to be stored in the body of the popup (below the gray line).
 */
export default function PopUp(props: {
	open: boolean
	setOpen: (isOpen: boolean) => void
	headerContent?: React.ReactElement
	bodyContent: React.ReactElement
}) {
	const cancelButtonRef = useRef(null)
	return (
		<Transition.Root show={props.open} as={Fragment}>
			<Dialog
				as="div"
				className="relative z-10"
				initialFocus={cancelButtonRef}
				onClose={() => props.setOpen(false)}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-50  transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-5/6 pb-10 max-w-[900px]">
								<div className="w-full h-max pb-10 bg-white rounded-xl flex flex-col">
									<div className="px-8 py-4 text-xl font-bold flex items-start justify-start gap-4">
										<button
											className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-attendee-name"
											onClick={() => {
												props.setOpen(false)
											}}
										>
											<CloseIcon />
										</button>
										{props.headerContent}
									</div>
									{props.bodyContent}
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
