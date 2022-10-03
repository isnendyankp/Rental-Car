import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import SearchBar from '../../components/SearchBar';
import CarList from '../../components/CarList';

// Tampilan Cari Mobil menggunakan API

const Cars = () => {
	const [ data, setData ] = useState([]);
	const [ fdata, setFdata ] = useState([]);
	const [ carPage, setCarPage ] = useState(false);
	const [ notFound, setNotFound ] = useState(false);
	const [ name, setName ] = useState('');
	const handleChangeName = (e) => {
		setName(e.target.value);
		if (!e.target.value.length) {
			setFdata([]);
			setNotFound(false);
		}
	};
	const handleSearch = () => {
		const newArr = data.filter((item) => item.name === name);
		setFdata(newArr);
		if (!newArr.length) {
			setNotFound(true);
		}
	};
	useEffect(() => {
		setCarPage(true);
	}, []);

	useEffect(() => {
		axios
			.get('https://bootcamp-rent-car.herokuapp.com/admin/car')
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, []);

	const props = {
		handleSearch,
		handleChangeName
	};
	console.log('data ini adalah', data);
	console.log('data ini adalah fdata', fdata);
	console.log('data ini adalah nama', name);
	return (
		<div>
			<Navbar />
			<Banner carPage={carPage} />
			<SearchBar {...props} />

			{!!notFound && <h1 className="container p-5 text-center">Data Tidak Ditemukan</h1>}
			<CarList data={!fdata.length ? data : fdata} {...props} />
			<Footer />
		</div>
	);
};

export default Cars;
