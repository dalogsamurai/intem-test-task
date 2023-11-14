import { useEffect, useState } from "react";

interface Props {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	item: any;
}

const TableItem = ({ item }: Props) => {
	const [tableValues, setTableValues] = useState<string[]>([]);

	useEffect(() => {
		console.log(Object.values(item));
		setTableValues(Object.values(item));
	}, [item]);

	return (
		<>
			{tableValues.map((value) => (
				<td style={{ width: "200px", cursor: "pointer" }}>{`${value}`}</td>
			))}
		</>
	);
};

export default TableItem;
