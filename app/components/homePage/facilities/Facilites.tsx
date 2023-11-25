import Image from "next/image";

const Facilites = () => {
  return (
    <>
      {/* <!-- Facilities Section Start --> */}
      <section className="facilities">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="facilities-col">
            <Image
              src="/img/libary.png"
              width={100}
              height={100}
              alt="libary"
            />
            <h3>Best Libary</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
          <div className="facilities-col">
            <Image
              src="/img/playground.png"
              width={100}
              height={100}
              alt="playground"
            />
            <h3>Athletics</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
          <div className="facilities-col">
            <Image src="/img/food.png" width={100} height={100} alt="food" />
            <h3>Tasty and Healthy Food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Facilities Section End --> */}
    </>
  );
};

export default Facilites;
