import { RouteObject, useRoutes } from "react-router-dom";
import { TABLE_PATH } from "./routes/paths";
import MainPage from "./pages/main.page";
import TablePage from "./pages/table.page";
import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";

function App() {
	const supabaseUrl = process.env.REACT_APP_SUPABASE_URL!;
	const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY!;

	const supabase = createClient(supabaseUrl, supabaseKey);

	console.log(supabase);

	const getUserTable = async () => {
		const { data } = await supabase.from("user").select("");
		console.log(data);
	};

	const getRoleTable = async () => {
		const { data } = await supabase.from("role").select();
		console.log(data);
	};

	useEffect(() => {
		getUserTable();
		getRoleTable();
	}, []);

	const routes: RouteObject[] = [
		{
			path: "/",
			children: [
				{ index: true, element: <MainPage /> },
				{ path: TABLE_PATH, element: <TablePage /> },
			],
		},
	];

	const page = useRoutes(routes);

	return <div className="App">{page}</div>;
}

export default App;
