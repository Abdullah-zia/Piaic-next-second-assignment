import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <>
      {/* <!-- Footer Section Start --> */}
      <section className="footer">
        <hr />
        <h4>About Us</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
          incidunt odio nam facilis, eligendi Itaque fugiat cupiditate
          consectetur. Aliquid ab deserunt exercitationem, illum molestiae
          dolorem.
        </p>

        <div className="icons">
          <FontAwesomeIcon icon={faFacebookF} style={{ marginRight: "5px" }} />
          <FontAwesomeIcon icon={faInstagram} style={{ marginRight: "5px" }} />
          <FontAwesomeIcon icon={faXTwitter} style={{ marginRight: "5px" }} />
          <FontAwesomeIcon icon={faLinkedinIn} style={{ marginRight: "5px" }} />
        </div>
        <p>
          Made with{" "}
          <FontAwesomeIcon
            icon={faHeart}
            size="sm"
            style={{ color: "#24f8c7" }}
          />{" "}
          by <a href="index.html">Sagar Developer</a>
        </p>
        <p>
          Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights
          Reserved
        </p>
      </section>
      {/* <!-- Footer Section End --> */}
    </>
  );
};

export default Footer;
