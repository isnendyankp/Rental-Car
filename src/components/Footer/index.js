import FB from "../../aset/icon_facebook.svg";
import Twitter from "../../aset/icon_twitter.svg";
import insta from "../../aset/icon_instagram.svg";
import mail from "../../aset/icon_mail.svg";
import twitch from "../../aset/icon_twitch.svg";
import logo from "../../aset/Logo.svg";

const Footer = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xl-3 text-wrap">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="col-xl-3">
          <div className="row menu gap-2">
            <a href="#Service">Our services</a>
            <a href="#WhyUs">Why Us</a>
            <a href="#Testimonial">Testimonial</a>
            <a href="#FAQ">FAQ</a>
          </div>
        </div>
        <div className="col-xl-3 my-2">
          <p>Connect with us</p>
          <div className="d-flex gap-2">
            <img src={FB} />
            <img src={insta} />
            <img src={Twitter} />
            <img src={mail} />
            <img src={twitch} />
          </div>
        </div>
        <div className="col-xl-3 mb-3">
          <p>Copyright Binar 2022</p>
          <img src={logo} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
