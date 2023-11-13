import { useEffect, useState } from "react";

interface Props {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	item: any;
}

const TableItem = ({ item }: Props) => {
	const [tableValues, setTableValues] = useState<string[]>([]);

	useEffect(() => {
		setTableValues(Object.values(item));
	}, [item]);

	return (
		<>
			{tableValues.map((value) => (
				<td>{value}</td>
			))}
		</>
	);
};

export default TableItem;
