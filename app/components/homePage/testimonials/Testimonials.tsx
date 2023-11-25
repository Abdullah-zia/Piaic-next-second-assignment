import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Testimonials = () => {
  return (
    <>
      {/* <!-- Testimonials Section Start --> */}
      <section className="testimonials">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="testimonials-col">
            <Image src="/img/user.png" width={100} height={100} alt="user" />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                maiores in nostrum rerum voluptatem praesentium veritatis alias
                omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                deserunt. In quia repellat maxime.
              </p>
              <h3>Student Name</h3>
              <FontAwesomeIcon icon={faStar} beatFade size="1x" />
              <FontAwesomeIcon icon={faStar} beatFade size="1x" />
              <FontAwesomeIcon icon={faStar} beatFade size="1x" />
              <FontAwesomeIcon icon={faStar} beatFade size="1x" />
              <FontAwesomeIcon icon={faStar} beatFade size="1x" />
            </div>
          </div>
          <div className="testimonials-col">
            <Image src="/img/user.png" width={100} height={100} alt="user" />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                maiores in nostrum rerum voluptatem praesentium veritatis alias
                omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                deserunt. In quia repellat maxime.
              </p>
              <h3>Student Name</h3>
              <FontAwesomeIcon icon={faStar} beatFade size="1x" />
              <FontAwesomeIcon icon={faStar} beatFade size="1x" />
              <FontAwesomeIcon icon={faStar} beatFade size="1x" />
              <FontAwesomeIcon icon={faStar} beatFade size="1x" />
              <FontAwesomeIcon icon={faStar} beatFade size="1x" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonials Section End --> */}
    </>
  );
};

export default Testimonials;
