import Link from "next/link";
const Header = () => {
  // var navLinks = document.getElementById("navLinks")!;

  // function showMenu() {
  //   navLinks.style.right = "0";
  // }

  // function hideMenu() {
  //   navLinks.style.right = "-200px";
  // }
  return (
    <>
      <nav>
        <Link href="/" className="logo">
          Xplore
          <i className="fab fa-staylinked"></i>kill
        </Link>
        <div className="nav-links" id="navLinks">
          {/* <!-- Responsive bar open and close --> */}
          <i
            className="fa fa-times"
            // onClick={() => {
            //   hideMenu();
            // }}
          ></i>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="course">Course</Link>
            </li>
            <li>
              <Link href="blog">Blog</Link>
            </li>
            <li>
              <Link href="about">About</Link>
            </li>
            <li>
              <Link href="contact">Contact</Link>
            </li>
          </ul>
        </div>
        <i
          className="fa fa-bars"
          // onClick={() => {
          //   showMenu();
          // }}
        ></i>
        {/* <!-- Responsive bar open and close --> */}
      </nav>
    </>
  );
};

export default Header;
