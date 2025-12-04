import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./components/RootLayout.tsx";
import HomePage from "@/components/pages/HomePage.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{ index: true, Component: HomePage },
			{ path: "privacy-policy", element: <div className="h-screen"></div> },
			{ path: "term-of-use", element: <div className="h-screen"></div> },
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
