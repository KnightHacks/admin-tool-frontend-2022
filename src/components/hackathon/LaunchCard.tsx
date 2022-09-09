interface LaunchCardProps {
	icon: JSX.Element;
	text: string;
	onClick: () => void;
}

export default function LaunchCard({ icon, text, onClick }: LaunchCardProps) {
	return (
		<div className="min-h-[170px] lg:px-8 px-4 md:w-1/3 w-full my-4 bg-blue-100">
			<button
				onClick={onClick}
				className="rounded-lg border border-solid border-border-gray text-left bg-white flex flex-col justify-evenly w-full h-full lg:px-8 px-4"
			>
				<div className="w-[52px] h-[52px] bg-launch-gray rounded-full flex items-center justify-center">
					{icon}
				</div>
				<p className="font-Inter font-bold text-4xl text-launch-gray">
					{text}
				</p>
			</button>
		</div>
	);
}
