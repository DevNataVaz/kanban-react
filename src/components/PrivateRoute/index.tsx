
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }: { children: JSX.Element }) {
	const isAuthenticated = localStorage.getItem("auth") === "true";

	return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
