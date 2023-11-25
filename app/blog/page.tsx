import BlogMain from "../components/blogPage/blogMain/BlogMain";
import Header from "../components/header/Header";

const blog = () => {
  return (
    <>
      <header className="Sub-header">
        <Header />
        <h1>Our Post</h1>
      </header>
      <BlogMain />
    </>
  );
};

export default blog;
