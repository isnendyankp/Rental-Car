import './App.css';
import Cars from './Pages/Cars';
import Detailcar from './Pages/Detailcar';
import Home from './Pages/Home';
import { Routes, Route, Link } from 'react-router-dom';

// buat function App untuk mengroute 3 item/halaman yang di folder Pages: Home, Car dan Detailcar

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/carimobil" element={<Cars />} />
				<Route path="/detailmobil/:id" element={<Detailcar />} />
			</Routes>
		</div>
	);
}

export default App;
