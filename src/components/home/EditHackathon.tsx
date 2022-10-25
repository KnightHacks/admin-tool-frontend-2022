import { ReactComponent as AdmitIcon } from '../../assets/Attendees/admit.svg';
import { ReactComponent as DeleteIcon } from '../../assets/Attendees/delete.svg';
import { Hackathon } from '../../models/hackathon';
import { useState } from 'react';
import InputGroup from '../InputGroup';

/***
 * @return form to edit hackathon details.
 */
export default function EditHackathon(props: { selectedHackathon: Hackathon }) {
	const [hackathon, setHackathon] = useState<Hackathon>(props.selectedHackathon);
	return (
		<>
			<span className="h-[1.5px] m-0 p-0 w-full bg-gray-200"></span>
			<div className="grid h-full  grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 items-center justify-start">
				<div className="flex items-center h-full p-4 justify-start flex-col gap-4">
					<div className="text-[28px] font-bold text-popup-heading">
						Hackathon Details
					</div>
					<InputGroup
						value={hackathon.startDate ?? ''}
						label={'Start Date'}
						setValue={(updatedValue) => {
							setHackathon((hackathon) => ({
								...hackathon,
								startDate: updatedValue,
							}));
						}}
					/>

					<InputGroup
						value={hackathon.endDate ?? ''}
						label={'End Date'}
						setValue={(updatedValue) => {
							setHackathon((hackathon) => ({
								...hackathon,
								endDate: updatedValue,
							}));
						}}
					/>

					<InputGroup
						value={hackathon.status ?? ''}
						label={'Status'}
						setValue={(updatedValue) => {
							setHackathon((hackathon) => ({
								...hackathon,
								status: updatedValue,
							}));
						}}
					/>
				</div>
				<div
					className={
						'w-full h-full flex flex-col items-center justify-center p-2 rounded-lg shadow-sm bored-r-8 gap-6'
					}
				>
					<button className="bg-dark-action-color p-2 text-white w-3/4 max-w-[400px] rounded-lg font-bold text-lg border-2 border-solid border-dark-action-border flex items-center justify-center flex-row gap-3 hover:brightness-90">
						<AdmitIcon />
						Add Hackathon
					</button>
					<button className="bg-red-action-color p-2 text-white w-3/4 max-w-[400px] rounded-lg font-bold text-lg border-2 border-solid border-red-action-border flex items-center justify-center flex-row gap-3 hover:brightness-90">
						<DeleteIcon />
						Delete Hackathon
					</button>
				</div>
			</div>
		</>
	);
}
