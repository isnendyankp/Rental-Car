import { Link } from "react-router-dom";

const Banner = (props) => {
  const { carPage } = props;
  return (
    <div className="container-fluid bg-light-green">
      <div className="row landing">
        <div className="col-xl-6 mt-5 left-landing">
          <h2 className="my-5">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </h2>
          <p className="subtitle mb-4 text-lg-wrap">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <Link to={"/carimobil"}>
            {!carPage && (
              <button type="button" class="btn btn-success">
                Mulai Sewa Mobil
              </button>
            )}
          </Link>
        </div>
        <div className="col-xl-6 d-flex align-items-end right-landing">
          <img src="../aset/img_car.png" alt="Car" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
