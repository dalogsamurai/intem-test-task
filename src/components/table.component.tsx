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

	//   TODO
	const updateData = async () => {
		// const res = await supabase.from(id!).update(tableValues);
		// console.log(res);
		//   .eq('id', 1)
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "50px",
				alignItems: "end",
			}}
		>
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
						<TableItem item={item} tableId={id!} />
					</tr>
				))}
			</table>
			<button
				style={{ backgroundColor: "forestgreen", width: "200px" }}
				onClick={() => updateData()}
			>
				Submit
			</button>
		</div>
	);
};

export default Table;
