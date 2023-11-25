import Image from "next/image";

const Campus = () => {
  return (
    <>
      {/* <!-- Campus Section Start--> */}

      <section className="campus">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="campus-col">
            <Image
              src="/img/Campus1.png"
              alt="campus 1"
              width={487}
              height={324}
            />
            <div className="layer">
              <h3>DELHI</h3>
            </div>
          </div>
          <div className="campus-col">
            <Image
              src="/img/Campus2.png"
              width={487}
              height={324}
              alt="campus 2"
            />
            <div className="layer">
              <h3>HYDERABAD</h3>
            </div>
          </div>
          <div className="campus-col">
            <Image
              src="/img/Campus3.png"
              width={487}
              height={324}
              alt="campus 3"
            />
            <div className="layer">
              <h3>MUMBAI</h3>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Campus Section End --> */}
    </>
  );
};

export default Campus;
