import ContactUs from "../components/contactPage/contactUs/ContactUs";
import Location from "../components/contactPage/location/Location";
import Header from "../components/header/Header";

const contact = () => {
  return (
    <>
      <header className="Sub-header">
        <Header />
        <h1>Contact Us</h1>
      </header>
      <Location />
      <ContactUs />
    </>
  );
};

export default contact;
