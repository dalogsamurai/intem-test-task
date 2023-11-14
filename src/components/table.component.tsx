import { useParams } from "react-router-dom";
import { supabase } from "../api/supabase";
import { useEffect, useState } from "react";
import TableItem from "./table-item.component";
import LoaderPlaceholder from "./loader/loader.component";
import ErrorPlaceHolder from "./error.component";
import useLoading from "../hooks/useLoading";

const Table = () => {
	const { id } = useParams();
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	const [tableData, setTableData] = useState<any[]>([]);
	const [tableHeaders, setTableHeaders] = useState<string[]>([]);
	const { isLoading, isError, setError, setLoading } = useLoading();
	// const [isLoading, setLoading] = useState(false);
	// const [isError, setError] = useState(false);

	const getTableData = async () => {
		if (id) {
			setLoading(true);
			const { data, error } = await supabase.from(id).select();
			if (error) {
				setError(true);
				return;
			} else {
				console.log(data);
				setLoading(false);
				setTableHeaders(Object.keys(data![0]));
				setTableData(data!);
			}
		}
	};

	useEffect(() => {
		getTableData();
	}, [id]);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "50px",
				alignItems: "end",
			}}
		>
			<LoaderPlaceholder isLoading={isLoading} />
			<ErrorPlaceHolder isError={isError} />

			{!(isLoading || isError) && (
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
			)}
		</div>
	);
};

export default Table;
