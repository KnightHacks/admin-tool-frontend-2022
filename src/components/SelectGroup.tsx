import { ChangeEvent } from 'react'

type OptionValue = string | number

export type Option<T extends OptionValue> = {
	value: T
	label: string
}

type Props<T extends OptionValue> = {
	options: Option<T>[]
	value: T
	setValue: (value: T) => void
	label: string
}

export function SelectGroup<T extends OptionValue>(props: Props<T>) {
	const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const { selectedIndex } = e.currentTarget
		const selectedOption = props.options[selectedIndex]
		props.setValue(selectedOption.value)
	}

	return (
		<div className={"w-full flex flex-col items-center justify-start"}>
			<div className="text-[22px] max-w-[350px] font-medium text-left w-3/4">
				{props.label}
			</div>
			<select
				onChange={handleOnChange}
				value={props.value}
				className="w-3/4 max-w-[350px] p-2 bg-popup-input-bg border-solid border-popup-input-border border-[1px] rounded-lg shadow-sm bored-r-8 "
			>
				{props.options.map((option, i) => (
					<option key={i} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}
