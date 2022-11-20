import { FormEvent, useState } from 'react'
import { ReactComponent as CreateHackathonIcon } from '../../assets/home/createHackathonIcon.svg'
import { Hackathon, HackathonStatus, Semester } from '../../models/hackathon'
import InputGroup from '../InputGroup'
import PopUp from '../PopUp'
import { Option, SelectGroup } from '../SelectGroup'

const CreateHackathonButton = () => {
	const [open, setOpen] = useState(false)
	const [status, setStatus] = useState<HackathonStatus>(
		HackathonStatus.PRESENT
	)
	const [semester, setSemester] = useState<Semester>(Semester.FALL)
	const [year, setYear] = useState<number>(new Date().getFullYear())
	const [startDate, setStartDate] = useState<Date>(new Date())
	const [endDate, setEndDate] = useState<Date>(new Date())

	const semesterOptions: Option<Semester>[] = [
		{ value: Semester.FALL, label: 'Fall' },
		{ value: Semester.SPRING, label: 'Spring' },
		{ value: Semester.SUMMER, label: 'Summer' },
	]

	const hackathonStatusOptions: Option<HackathonStatus>[] = [
		{ value: HackathonStatus.PRESENT, label: 'Present' },
		{ value: HackathonStatus.FUTURE, label: 'Future' },
		{ value: HackathonStatus.PAST, label: 'Past' },
	]

	const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
		const newHackathon: Hackathon = {
			id: '',
			attendees: [],
			sponsors: [],
			events: [],
			startDate,
			endDate,
			status,
			term: {
				semester,
				year,
			},
		}

		console.log(newHackathon)
		e.preventDefault()
	}

	return (
		<>
			<span>
				<button
					onClick={() => setOpen(true)}
					id="page-subheader-2-button"
				>
					<CreateHackathonIcon />
					<p>Create Hackathon</p>
				</button>
			</span>
			<PopUp
				open={open}
				setOpen={setOpen}
				headerContent={
					<div className="text-popup-heading text-bold text-xl">
						Create Hackathon
					</div>
				}
				bodyContent={
					<form
						onSubmit={handleOnSubmit}
						className="flex flex-col gap-4 items-center"
					>
						<div className="text-[28px] font-bold text-popup-heading">
							Hackathon Details
						</div>
						<SelectGroup<HackathonStatus>
							label="Status"
							value={status}
							options={hackathonStatusOptions}
							setValue={(status) => setStatus(status)}
						/>
						<SelectGroup<Semester>
							label="Semester"
							value={semester}
							options={semesterOptions}
							setValue={(semester) => setSemester(semester)}
						/>
						<InputGroup
							label="Year"
							value={year}
							setValue={setYear}
							type="number"
						/>
						<InputGroup
							label="Start Date"
							value={startDate}
							setValue={setStartDate}
							type="date"
						/>
						<InputGroup
							label="End Date"
							value={endDate}
							setValue={setEndDate}
							type="date"
						/>
						<button className="mt-6 max-w-[350px] w-3/4 bg-dark-action-color p-2 text-white rounded-lg font-bold text-lg border-2 border-solid border-dark-action-border flex items-center justify-center flex-row gap-3 hover:brightness-90">
							Create Hackathon
						</button>
					</form>
				}
			></PopUp>
		</>
	)
}

export default CreateHackathonButton
