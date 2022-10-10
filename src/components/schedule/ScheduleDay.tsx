import { Event as HackathonEvent } from '../../models/Event';
import Table from '../Table';
import ScheduleRow from './ScheduleRow';
import DayHeader from './DayHeader';
export default function ScheduleDay(props: {
	events: Array<HackathonEvent>;
	dayNum: number;
}) {
	return (
		<div className="mt-8 text-schedule-header">
			<DayHeader dayNum={props.dayNum} />
			<Table
				bodyContent={
					<>
						{props.events.map((event) => {
							return (
								<tr key={event.id} className="topBorder">
									<ScheduleRow event={event} />
								</tr>
							);
						})}
					</>
				}
			/>
		</div>
	);
}
