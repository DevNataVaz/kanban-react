// routes.ts
import { RouteObject } from "react-router";
import { Navigate } from "react-router-dom";

import Layout from "../layout";
import Boards from "../pages/Boards";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import PrivateRoute from "../components/PrivateRoute";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/cadastro",
		element: <Cadastro />,
	},
	{
		path: "/board",
		element: (
			<PrivateRoute>
				<Layout />
			</PrivateRoute>
		),
		children: [
			{
				index: true,
				element: <Boards />,
			},
		],
	},
	{
		path: "*",
		element: <Navigate to="/" />,
	},
];

export default routes;
