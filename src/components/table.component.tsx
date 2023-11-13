import { useParams } from "react-router-dom";
import { supabase } from "../api/supabase";
import { useEffect, useState } from "react";
import TableItem from "./table-item.component";

const Table = () => {
	const { id } = useParams();
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	const [tableData, setTableData] = useState<any[]>([]);
	const [tableHeaders, setTableHeaders] = useState<string[]>([]);

	const getTableData = async () => {
		if (id) {
			const { data } = await supabase.from(id).select();
			setTableHeaders(Object.keys(data![0]));
			setTableData(data!);
		}
	};

	useEffect(() => {
		getTableData();
	}, [id]);

	return (
		<table>
			<tr>
				{tableHeaders.map((header) => (
					<th
						style={{
							fontWeight: "bold",
							fontSize: "20px",
							width: "100px",
							textAlign: "start",
							borderBottom: "1px solid black",
						}}
					>
						{header}
					</th>
				))}
			</tr>
			{tableData.map((item) => (
				<tr>
					<TableItem item={item} />
				</tr>
			))}
		</table>
	);
};

export default Table;
