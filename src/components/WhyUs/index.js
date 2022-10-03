import data from "./data";

const WhyUs = () => {
  return (
    <div id="WhyUs">
      <div className="container pb-5">
        <div className="container text-center text-lg-start">
          <h3>Why Us?</h3>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="row p-3 gap-4">
          {!!data.length &&
            data.map((item, index) => (
              <div
                className="whyCard card border-1 col-md-3 d-flex flex-column align-content-center p-3"
                // style={{ width: "16rem" }}
                key={index}
              >
                <div className="container">
                  <img src={item.img} width={32} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.tittle}</h5>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
