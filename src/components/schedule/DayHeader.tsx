import { ReactComponent as AddIcon } from '../../assets/Schedule/add.svg'

export default function DayHeader(props: { dayNum: number }) {
	return (
		<div className="px-5">
			<div className="grid font-bold text-xl grid-cols-3  gap-0 w-full p-0">
				<div className="text-left flex flex-row gap-5 items-center">
					{`Day ${props.dayNum}`}
					<button>
						<AddIcon />
					</button>
				</div>
				<div className="col-span-2 text-right">
					{new Date().toLocaleString('default', {
						weekday: 'long',
						month: 'long',
						day: '2-digit',
						year: 'numeric',
					})}
				</div>
			</div>
		</div>
	)
}
