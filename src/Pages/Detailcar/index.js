import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import SearchBar from '../../components/SearchBar';
import rupiah from 'rupiah-format';
import { Link } from 'react-router-dom';
import user from '../../aset/user.svg';

// Detail Mobil saat pilih mobil dan menggunakan API (id)

const Detailcar = () => {
	const [ car, setCar ] = useState({});
	const [ carPage, setCarPage ] = useState(false);
	const param = useParams();
	const id = param.id;

	useEffect(() => {
		axios
			.get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
			.then((res) => setCar(res.data))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		setCarPage(true);
	}, []);

	return (
		<div>
			<Navbar />
			<Banner carPage={carPage} />
			<SearchBar />
			{!!Object.keys(car).length ? (
				<div className="container my-5">
					<div className="row">
						<div className="col-8">
							<div className="card p-3">
								<div className="card-tittle">
									<h4>Tentang Paket</h4>
								</div>
								<div className="card-body">
									<h5>Include</h5>

									<li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
									<li>Sudah termasuk bensin selama 12 jam</li>
									<li>Sudah termasuk Tiket Wisata</li>
									<li>Sudah termasuk pajak</li>
									<h5>Exclude</h5>
									<li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
									<li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
									<li>Tidak termasuk akomodasi penginapan</li>
								</div>
								<div class="accordion accordion-flush" id="accordionFlushExample">
									<div class="accordion-item">
										<h2 class="accordion-header" id="flush-headingOne">
											<button
												class="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#flush-collapseOne"
												aria-expanded="false"
												aria-controls="flush-collapseOne"
											>
												<h5>Refund, Reschedule, Overtime</h5>
											</button>
										</h2>
										<div
											id="flush-collapseOne"
											class="accordion-collapse collapse"
											aria-labelledby="flush-headingOne"
											data-bs-parent="#accordionFlushExample"
										>
											<div class="accordion-body">
												<li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
												<li>
													Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
													20.000/jam{' '}
												</li>
												<li>Tidak termasuk akomodasi penginapan </li>
												<li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
												<li>
													Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
													20.000/jam{' '}
												</li>
												<li>Tidak termasuk akomodasi penginapan </li>
												<li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
												<li>
													Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
													20.000/jam{' '}
												</li>
												<li>Tidak termasuk akomodasi penginapan </li>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-4">
							<div className="card p-3">
								<img src={car.image} className="card-img-top" />

								<div className="card-body">
									<div className="card-title">
										<h1>{car.name}</h1>
									</div>
									<p>
										<img src={user} width={16} />
										{car.category}
									</p>
									<p>Total {rupiah.convert(car.price)}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<p>loading</p>
			)}
			<Footer />
		</div>
	);
};

export default Detailcar;
