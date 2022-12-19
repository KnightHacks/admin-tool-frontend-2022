import { useState } from 'react'
import { ReactComponent as DeleteIcon } from '../../assets/schedule/delete.svg'
import { ReactComponent as EditIcon } from '../../assets/schedule/edit.svg'
import { Event as HackathonEvent } from '../../models/event'
import PopUp from '../PopUp'

export default function ScheduleRow(props: { event: HackathonEvent }) {
	const [editPopUp, setEditPopUp] = useState<{
		open: boolean
		seen: boolean
		selectedEvent?: HackathonEvent
	}>({
		open: false,
		seen: false,
		selectedEvent: undefined,
	})

	const [deletePopUp, setDeletePopUp] = useState<{
		open: boolean
		seen: boolean
		selectedEvent?: HackathonEvent
	}>({
		open: false,
		seen: false,
		selectedEvent: undefined,
	})

	function getTime(date: Date) {
		return date.toLocaleString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
		})
	}
	return (
		<>
			<PopUp
				open={editPopUp.open}
				setOpen={(isOpen) => {
					if (!editPopUp.seen) {
						setEditPopUp({
							...editPopUp,
							seen: true,
							open: isOpen,
						})
					} else {
						setEditPopUp({
							...editPopUp,
							open: isOpen,
						})
					}
				}}
				headerContent={<></>}
				bodyContent={<></>}
			/>

			<PopUp
				open={deletePopUp.open}
				setOpen={(isOpen) => {
					if (!deletePopUp.seen) {
						setDeletePopUp({
							...deletePopUp,
							seen: true,
							open: isOpen,
						})
					} else {
						setDeletePopUp({
							...editPopUp,
							open: isOpen,
						})
					}
				}}
				headerContent={<></>}
				bodyContent={<></>}
			/>
			<td className="text-left">
				{' '}
				{`${getTime(props.event.start_date)} - ${getTime(
					props.event.start_date
				)}`}{' '}
			</td>
			<td className="text-left"> {props.event.name} </td>
			<td className="text-left"> John Doe </td>
			<td className="text-left"> {props.event.location} </td>
			<td className="text-left"> type </td>
			<td className="text-right flex flex-row items-center justify-end gap-10">
				<button
					onClick={() =>
						setEditPopUp({
							selectedEvent: props.event,
							seen: true,
							open: true,
						})
					}
				>
					<EditIcon />
				</button>
				<button
					onClick={() =>
						setDeletePopUp({
							selectedEvent: props.event,
							seen: true,
							open: true,
						})
					}
				>
					<DeleteIcon />
				</button>
			</td>
		</>
	)
}
