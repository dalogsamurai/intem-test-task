import { useEffect, useState } from "react";
import TableData from "./table-data.component";

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
				<TableData value={value} item={item} />
			))}
		</>
	);
};

export default TableItem;
