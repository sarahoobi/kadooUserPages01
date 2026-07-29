import Breadcrumb from "../components/Breadcrumb.jsx";
import Pagination from "../components/Pagination.jsx";
import BlogListSide from "./Partials/BlogListSide.jsx";
import BlogCard from "../components/BlogCard.jsx";

const BlogList = () => {
  return (
    <>
      <Breadcrumb title="BlogList" />
      <section>
        <div className="container my-16">
          <div className="grid grid-cols-11 gap-4">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex flex-wrap  flex-row flex-1 w-full gap-2 justify-center lg:justify-start">
                {[...Array(4)].map((item, index) => {
                  let image;
                  index === 0 ? (image = "./images/blogpage01.jpg") : "";
                  index === 1 ? (image = "./images/blogpage01.jpg") : "";
                  index === 2 ? (image = "./images/blogpage01.jpg") : "";
                  index === 3 ? (image = "./images/blogpage01.jpg") : "";
                  return <BlogCard img={image} i={index} />;
                })}
              </div>
              <Pagination />
            </div>
            <BlogListSide />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;
