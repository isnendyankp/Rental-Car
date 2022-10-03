import React from "react";
import { Link } from "react-router-dom";
import rupiah from "rupiah-format";

const CarList = (props) => {
  return (
    <div className="container my-5">
      <div className="row row-col-1 row-col-md-3 g-4">
        {!!props.data.length &&
          props.data.map((item) => (
            <div className="col-4">
              <div className="card">
                <img
                  src={item.image}
                  height={"190px"}
                  className="card-img-top"
                />

                <div className="card-body">
                  <div className="card-title">
                    <p> {item.name}</p>
                  </div>
                  <p>{rupiah.convert(item.price)}</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <Link to={`/detailmobil/${item.id}`}>
                    <button className="btn btn-success">Pilih Mobil</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CarList;
