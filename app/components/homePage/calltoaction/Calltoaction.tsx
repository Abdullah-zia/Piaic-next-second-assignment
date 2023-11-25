import Link from "next/link";

const Calltoaction = () => {
  return (
    <>
      {/* <!-- Call To Action Section Start --> */}
      <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <Link href="contact" className="hero_btn">
          CONTACT US
        </Link>
      </section>
      {/* <!-- Call To Action Section End --> */}
    </>
  );
};

export default Calltoaction;
