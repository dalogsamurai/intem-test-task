import { RouteObject, useRoutes } from "react-router-dom";
import { TABLE_PATH } from "./routes/paths";
import MainPage from "./pages/main.page";
import TablePage from "./pages/table.page";
import { createClient } from "@supabase/supabase-js";

function App() {
	const supabaseUrl = process.env.REACT_APP_SUPABASE_URL!;
	const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY!;

	const supabase = createClient(supabaseUrl, supabaseKey);

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
