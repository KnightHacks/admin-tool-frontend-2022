interface LaunchCardProps {
	icon: JSX.Element;
	text: string;
	onClick: () => void;
}

export default function LaunchCard({ icon, text, onClick }: LaunchCardProps) {
	return (
		<button
			onClick={onClick}
			className="rounded-lg border border-solid border-border-gray text-left bg-white min-h-[170px] flex flex-col justify-evenly px-8 m-4 w-[250px] md:w-[400px]"
		>
			<div className="w-[52px] h-[52px] bg-launch-gray rounded-full flex items-center justify-center">
				{icon}
			</div>
			<p className="font-Inter font-bold text-4xl text-launch-gray">
				{text}
			</p>
		</button>
	);
}
