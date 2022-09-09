/**
 * @param value initial value for the input.
 * @param setValue function that takes the updated inputValue and sets it.
 * @param label label for the input.
 */
export default function InputGroup(props: {
	value: string;
	setValue: (updatedValue: string | undefined) => void;
	label: string;
}) {
	return (
		<div className={'w-full flex flex-col items-center justify-start'}>
			<div className="text-[22px] max-w-[350px] font-medium text-left w-3/4">
				{' '}
				First Name{' '}
			</div>
			<input
				className="w-3/4 max-w-[350px] p-2 bg-popup-input-bg border-solid border-popup-input-border border-[1px] rounded-lg shadow-sm bored-r-8 "
				type={'text'}
				value={props.value}
				onChange={(e) => {
					props.setValue(e.target.value);
				}}
			/>
		</div>
	);
}
