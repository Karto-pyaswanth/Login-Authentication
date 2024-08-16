import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main/main";
import Signup from "./components/Signup/signup";
import Login from "./components/login/login";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
