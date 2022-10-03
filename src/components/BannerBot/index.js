import { Link } from "react-router-dom";

const BannerBot = () => {
  return (
    <div className="container">
      <div
        className="p-5 my-5 text-center"
        style={{
          backgroundColor: "#0D28A6",
          color: "white",
          borderRadius: "8px",
        }}
      >
        <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
        <p className="bannerBotBody text-wrap mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <Link to={"/carimobil"}>
          <button type="button" class="btn btn-success">
            Mulai Sewa Mobil
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BannerBot;
