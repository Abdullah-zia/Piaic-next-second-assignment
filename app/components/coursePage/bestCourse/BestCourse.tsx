import Image from "next/image";
const BestCourse = () => {
  return (
    <>
      {/* <!-- best course start --> */}

      <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="facilities-col">
            <Image
              src="/img/course1.png"
              width={100}
              height={100}
              alt="course 1"
            />
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
          <div className="facilities-col">
            <Image
              src="/img/course2.png"
              width={100}
              height={100}
              alt="course 2"
            />
            <h3>Artificial Intelligence</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
          <div className="facilities-col">
            <Image
              src="/img/course3.png"
              width={100}
              height={100}
              alt="course 3"
            />
            <h3>Data Science</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- best courses end --> */}
    </>
  );
};

export default BestCourse;
