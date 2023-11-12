import { RouteObject, useRoutes } from "react-router-dom";
import { TABLE_PATH } from "./routes/paths";
import MainPage from "./pages/main.page";
import TablePage from "./pages/table.page";

function App() {
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
