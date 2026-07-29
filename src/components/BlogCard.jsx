const BlogCard = () => {
  return (
    <div className="rounded-xl border border-bs_border p-6 flex-shrink-0 w-[340px] sm:w-[600px] md:W-[750px] lg:w-[48%]">
      <div className="relative">
        <img
          src="./images/blogpage01.jpg"
          alt="blog"
          className="w-[400px] rounded-xl mx-auto"
        />
        <div className="text-bs_white bg-bs_purple rounded-l-2xl absolute top-8 right-0 sm:top-10 sm:right-20 md:top-8 md:right-0 p-2">
          <i className="fa-solid fa-calendar-days px-1" />
          <span>Aug 12, 2024</span>
        </div>
      </div>
      <div className="py-2 flex flex-wrap gap-4 items-center">
        <div>
          <i className="fa-regular fa-circle-user text-bs_primary" />
          <a
            href="#"
            title="author"
            className="capitalize font-medium text-bs_textColor text-xs sm:text-sm px-1 hover:text-bs_primary ease-in-out transition-all delay-150 duration-500"
          >
            By Alicia Davis
          </a>
        </div>
        <div>
          <i className="fa-regular fa-comments text-bs_primary" />
          <a
            href="#"
            title="comments"
            className="capitalize font-medium text-bs_textColor text-xs sm:text-sm px-1 hover:text-bs_primary ease-in-out transition-all delay-150 duration-500"
          >
            2.5k Comments
          </a>
        </div>
      </div>
      <hr className="border-bs_border" />
      <h2 className="text-bs_textColor font-semibold text-lg md:text-xl capitalize cursor-pointer hover:text-bs_primary transition-all ease-in-out delay-150 duration-500 my-3">
        There are many variations passage available majority suffered.
      </h2>
      <p className="text-bs_paraGray leading-6 text-sm md:text-base mb-8">
        There are many variations available the majority have suffered
        alteration randomised words.
      </p>
      <a
        href="#"
        title="readMore"
        className="bg-bs_primary text-bs_white capitalize px-4 py-3 rounded-lg hover:bg-bs_textColor transition-all ease-in-out delay-150 duration-500"
      >
        read more <i className="fa-solid fa-arrow-right px-1" />
      </a>
    </div>
  );
};
export default BlogCard;
