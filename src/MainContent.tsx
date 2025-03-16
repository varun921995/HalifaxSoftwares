import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Page2 from "./Components/Page2";

function MainContent() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/page2" element={<Page2 />} />
		</Routes>
	);
}
export default MainContent;
