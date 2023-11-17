import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Lr1 } from "./Lr1";
import { Lr2 } from "./Lr2";
import { Lr3 } from "./Lr3";
import { Navbar } from "./Navbar";

function App() {
	return (
		<BrowserRouter>
			<div className="w-full bg-white dark:bg-gray-900 antialiased min-h-full">
				<Navbar />
				<div className="container max-w-screen-xl mx-auto mt-4">
					<Routes>
						<Route path="/lr1" element={<Lr1 />} />
						<Route path="/lr2" element={<Lr2 />} />
						<Route path="/lr3" element={<Lr3 />} />
						<Route path="*" element={<Navigate to="lr1" />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
