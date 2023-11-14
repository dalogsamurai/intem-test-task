import { useEffect, useState } from "react";

interface Props {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	item: any;
	tableId: string;
}

const TableItem = ({ item, tableId }: Props) => {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	const [tableValues, setTableValues] = useState<any[]>([]);

	useEffect(() => {
		setTableValues(Object.values(item));
	}, [item]);

	return (
		<>
			{tableValues.map((value) => (
				<td
					style={{ width: "200px", cursor: "pointer" }}
					onClick={() => {
						console.log(value);
						console.log(typeof value);
					}}
				>{`${value}`}</td>
			))}
		</>
	);
};

export default TableItem;
