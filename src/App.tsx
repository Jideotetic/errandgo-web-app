import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import Hero from "./components/Hero";
import viteLogo from "/vite.svg";

function App() {
	return (
		<>
			<Header />

			<Hero />
			{/* <div className="h-screen border-2 border-red-500 bg-linear-to-b from-[#FFFFFF] to-[#F8F3FF] flex items-center justify-center">
				<header className="fixed max-w-[1120px] w-full mx-auto left-0 right-0 top-12 py-5 px-[72px] bg-[#F8F3FF] rounded-[360px] h-[88px]"></header>
				Helle There
			</div> */}

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
