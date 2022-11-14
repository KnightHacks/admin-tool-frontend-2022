import { HTMLInputTypeAttribute, ReactNode } from 'react'

/**
 * Creates an input with its corresponding label.
 * @param value initial value for the input.
 * @param setValue function that takes the updated inputValue and sets it.
 * @param label label for the input.
 * @param type type of input, by default this is text
 */

type InputGroupProps = {
	value?: any
	setValue?: (updatedValue: any | undefined) => void
	label: string
	type?: HTMLInputTypeAttribute
	numLines?: number
	children?: ReactNode
}

export default function InputGroup(props: InputGroupProps) {
	return (
		<div className={'w-full flex flex-col items-center justify-start'}>
			<div className="text-[22px] max-w-[350px] font-medium text-left w-3/4">
				{props.label}
			</div>
			{props.children ? (
				props.children
			) : props.numLines ? (
				<textarea
					className="w-3/4 max-w-[350px] p-2 bg-popup-input-bg border-solid border-popup-input-border border-[1px] rounded-lg shadow-sm"
					value={props.value}
					onChange={(e) =>
						props.setValue
							? props.setValue(e.target.value)
							: undefined
					}
					rows={props.numLines}
				></textarea>
			) : (
				<input
					className="w-3/4 max-w-[350px] p-2 bg-popup-input-bg border-solid border-popup-input-border border-[1px] rounded-lg shadow-sm"
					type={props.type ?? 'text'}
					value={props.value}
					onChange={(e) =>
						props.setValue
							? props.setValue(e.target.value)
							: undefined
					}
				/>
			)}
		</div>
	)
}
