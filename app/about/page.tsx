import Link from "next/link";
import Header from "../components/header/Header";
import Image from "next/image";

const about = () => {
  return (
    <>
      <header className="Sub-header">
        <Header />
        <h1>About Us</h1>
      </header>
      {/* <!-- About Us Section Start --> */}

      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>We are the world&apos;s largest University</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              cumque in accusantium molestias maiores fuga vitae eos, ducimus
              officiis repudiandae voluptatem error. Laboriosam, numquam
              blanditiis aspernatur, nobis tempora consequatur id aliquam
              asperiores voluptatum iste animi voluptatem fugiat totam excepturi
              dolor.
            </p>
            <Link href="/" className="hero_btn btn">
              EXPLORE NOW
            </Link>
          </div>
          <div className="about-col">
            <Image src="/img/about.png" width={400} height={400} alt="about" />
          </div>
        </div>
      </section>

      {/* <!-- About Us Section end --> */}
    </>
  );
};

export default about;
