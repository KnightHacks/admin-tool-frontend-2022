interface LaunchCardProps {
	icon: JSX.Element;
	text: string;
}

export default function LaunchCard({ icon, text }: LaunchCardProps) {
	return (
		<button className="rounded-lg border border-solid border-border-gray text-left bg-white w-[400px] h-[170px] flex flex-col justify-evenly px-8 m-8">
			<div className="w-[52px] h-[52px] bg-launch-gray rounded-full flex items-center justify-center">
				{icon}
			</div>
			<p className="font-Inter font-bold text-4xl text-launch-gray">
				{text}
			</p>
		</button>
	);
}
