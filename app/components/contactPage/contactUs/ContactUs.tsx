import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactUs = () => {
  return (
    <>
      <section className="contact-us">
        <div className="row">
          <div className="content-col">
            <div>
              <FontAwesomeIcon
                icon={faHouse}
                size="2xl"
                style={{ color: "#24f8c7", marginRight: "1rem" }}
              />
              <span>
                <h5>NH9 Road, ABC Building</h5>
                <p>Ghaziabad, Uttar Pradesh, IN</p>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faPhone}
                size="2xl"
                style={{ color: "#24f8c7", marginRight: "1rem" }}
              />
              <span>
                <h5>+91 7445546525</h5>
                <p>Monday To Saturday, 9AM To 6PM</p>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2xl"
                style={{ color: "#24f8c7", marginRight: "1rem" }}
              />
              <span>
                <h5>xyz@email.com</h5>
                <p>Email Us Yor Query</p>
              </span>
            </div>
          </div>
          <div className="content-col">
            <form>
              <input type="text" placeholder="Enter Name" required />
              <input type="email" placeholder="Enter Email" required />
              <input type="text" placeholder="Enter Subject" required />
              <textarea rows={8} placeholder="Message" required></textarea>
              <button type="submit" className="hero_btn btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
