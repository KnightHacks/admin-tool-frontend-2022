import './styles.css'

/**
 * Creates the table component with all default styling.
 * @param headerContent contains component for an optional header content. If there are going to be column titles, each needs to be in a <th> </th> tag.
 * @param bodyContent contains all of the rows that will be inside the table.
 */

export default function Table(props: {
	headerContent?: React.ReactElement
	bodyContent?: React.ReactElement
}) {
	return (
		<>
			<div className="h-full w-full overflow-auto p-5">
				<table className="w-full border-collapse border-spacing-0 p-5">
					<tbody>
						<tr> {props.headerContent} </tr>
						{props.bodyContent}
					</tbody>
				</table>
			</div>
		</>
	)
}
