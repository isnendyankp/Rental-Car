import data from "./data";

const Service = () => {
  return (
    <div id="Service">
      <div className="container-lg service">
        <div className="row justify-content-center align-item-center">
          <div className="col-xl-6 left-service d-flex justify-content-center">
            <img src="./aset/img_service.png" alt="Service" />
          </div>
          <div className="col-xl-6 my-5 ps-xl-5">
            <h4 className="mb-3">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h4>
            <p className="subtitle mb-4 text-wrap">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>

            {!!data.length &&
              data.map((item, index) => (
                <div className="row" key={index}>
                  <div className="col-1">
                    <img src={item.img} width={24} />
                  </div>
                  <div className="col-11">
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
