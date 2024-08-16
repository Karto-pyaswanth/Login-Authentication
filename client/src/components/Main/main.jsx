import  "./main.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div >
			<nav >
				<h1>Hey, Successfully Logged In</h1>
				<button onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Main;
