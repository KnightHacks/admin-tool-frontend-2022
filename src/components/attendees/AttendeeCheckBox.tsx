import { ReactComponent as CheckedIcon } from '../../assets/attendees/checked.svg'
import { ReactComponent as UncheckedIcon } from '../../assets/attendees/unchecked.svg'

export default function AttendeeCheckBox(props: { isChecked: boolean }) {
	return (
		<>
			<div className="flex w-full justify-center align-center">
				{props.isChecked ? <CheckedIcon /> : <UncheckedIcon />}
			</div>
		</>
	)
}
