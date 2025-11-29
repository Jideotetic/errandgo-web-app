import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import Hero from "./components/Hero";
import viteLogo from "/vite.svg";

function App() {
	return (
		<>
			<Header />

			<Hero />

			<div className="h-screen">
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
		</>
	);
}

export default App;
