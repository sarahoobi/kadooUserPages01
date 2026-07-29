const BlogListSide = () => {
  return (
    <div className="col-span-12 lg:col-span-4">
      <div className="searchBlog">
        <div className="searchBox bg-bs_pink rounded-xl p-8">
          <h6 className="capitalize font-semibold text-bs_textColor text-xl relative after:block after:content[('')] after:h-1 after:w-3 after:top-8 after:bg-bs_primary after:absolute">
            search
          </h6>
          <form className="mx-auto mt-10">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-bs_textColor sr-only"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full py-2 px-3 text-lg border-bs_border focus:border-bs_primary text-bs_textColor bg-bs_white rounded-xl"
                placeholder="Search Here..."
                required
              />
              <div className="absolute inset-y-0 end-6 flex items-center pointer-events-none text-bs_primary">
                <i className="fa-solid fa-magnifying-glass" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="categoryBlog mt-8">
        <div className="searchBox bg-bs_pink rounded-xl p-8">
          <h6 className="capitalize font-semibold text-bs_textColor text-xl relative after:block after:content[('')] after:h-1 after:w-3 after:top-8 after:bg-bs_primary after:absolute">
            category
          </h6>
          <table className="mt-10 w-[100%]">
            <tr>
              <a href="#" className="grid grid-cols-12 md:gap-6 lg:gap-0">
                <td className="col-span-11">
                  <i className="fa-solid fa-arrow-right text-bs_primary" />
                  <span className="text-bs_textColor capitalize px-1 font-medium">
                    Home & Living
                  </span>
                </td>
                <td className="col-span-1 justify-items-end">
                  <span>(10)</span>
                </td>
              </a>
            </tr>
            <hr className="my-4 border-bs_border" />
            <tr>
              <a href="#" className="grid grid-cols-12 md:gap-6 lg:gap-0">
                <td className="col-span-11">
                  <i className="fa-solid fa-arrow-right text-bs_primary" />
                  <span className="text-bs_textColor capitalize px-1 font-medium">
                    garment care
                  </span>
                </td>
                <td className="col-span-1 justify-items-end">
                  <span>(15)</span>
                </td>
              </a>
            </tr>
            <hr className="my-4 border-bs_border" />
            <tr>
              <a href="#" className="grid grid-cols-12 md:gap-6 lg:gap-0">
                <td className="col-span-11">
                  <i className="fa-solid fa-arrow-right text-bs_primary" />
                  <span className="text-bs_textColor capitalize px-1 font-medium">
                    jewelry & accessorries
                  </span>
                </td>
                <td className="col-span-1 justify-items-end">
                  <span>(20)</span>
                </td>
              </a>
            </tr>
            <hr className="my-4 border-bs_border" />
            <tr>
              <a href="#" className="grid grid-cols-12 md:gap-6 lg:gap-0">
                <td className="col-span-11">
                  <i className="fa-solid fa-arrow-right text-bs_primary" />
                  <span className="text-bs_textColor capitalize px-1 font-medium">
                    occations gifts
                  </span>
                </td>
                <td className="col-span-1 justify-items-end">
                  <span>(30)</span>
                </td>
              </a>
            </tr>
            <hr className="my-4 border-bs_border" />
            <tr>
              <a href="#" className="grid grid-cols-12 md:gap-6 lg:gap-0">
                <td className="col-span-11">
                  <i className="fa-solid fa-arrow-right text-bs_primary" />
                  <span className="text-bs_textColor capitalize px-1 font-medium">
                    office & stationery
                  </span>
                </td>
                <td className="col-span-1 justify-items-end">
                  <span>(25)</span>
                </td>
              </a>
            </tr>
            <hr className="my-4 border-bs_border" />
            <tr>
              <a href="#" className="grid grid-cols-12 md:gap-6 lg:gap-0">
                <td className="col-span-11">
                  <i className="fa-solid fa-arrow-right text-bs_primary" />
                  <span className="text-bs_textColor capitalize px-1 font-medium">
                    personilized gifts
                  </span>
                </td>
                <td className="col-span-1 justify-items-end">
                  <span>(29)</span>
                </td>
              </a>
            </tr>
          </table>
        </div>
      </div>
      <div className="recentPost mt-8">
        <div className="recentBox bg-bs_pink rounded-xl p-8">
          <h6 className="capitalize font-semibold text-bs_textColor text-xl relative after:block after:content[('')] after:h-1 after:w-3 after:top-8 after:bg-bs_primary after:absolute">
            recent post
          </h6>
          <div className="mt-10 flex items-center">
            <div>
              <img
                src="./images/miniblog01.jpg"
                alt="blogpicture"
                className="rounded-xl w-[110px]"
              />
            </div>
            <div className="px-2 sm:px-6">
              <h3 className="text-sm md:text-base font-bold text-bs_textColor hover:text-bs_primary transition-all delay-150 duration-500 ease-in-out">
                <a href="#" title="blog-title">
                  How to enjoy your favorite things every day.
                </a>
              </h3>
              <i className="fa-solid fa-calendar-days px-1 text-xs md:text-sm text-bs_primary py-2" />
              <span className="text-xs md:text-sm text-bs_primary py-2">
                August 12, 2024
              </span>
            </div>
          </div>
          <div className="mt-10 flex items-center">
            <div>
              <img
                src="./images/miniblog02.jpg"
                alt="blogpicture"
                className="rounded-xl w-[110px]"
              />
            </div>
            <div className="px-2 sm:px-6">
              <h3 className="text-sm md:text-base font-bold text-bs_textColor hover:text-bs_primary transition-all delay-150 duration-500 ease-in-out">
                <a href="#" title="blog-title">
                  How to enjoy your favorite things every day.
                </a>
              </h3>
              <i className="text-xs md:text-sm fa-solid fa-calendar-days px-1 text-bs_primary py-2" />
              <span className="text-xs md:text-sm text-bs_primary py-2">
                August 12, 2024
              </span>
            </div>
          </div>
          <div className="mt-10 flex items-center">
            <div>
              <img
                src="./images/miniblog03.jpg"
                alt="blogpicture"
                className="rounded-xl w-[110px]"
              />
            </div>
            <div className="px-2 sm:px-6">
              <h3 className="text-sm md:text-base font-bold text-bs_textColor hover:text-bs_primary transition-all delay-150 duration-500 ease-in-out">
                <a href="#" title="blog-title">
                  How to enjoy your favorite things every day.
                </a>
              </h3>
              <i className="fa-solid fa-calendar-days px-1 text-bs_primary py-2 text-xs md:text-sm" />
              <span className="text-xs md:text-sm text-bs_primary py-2">
                August 12, 2024
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="followUs mt-8">
        <div className="followBox bg-bs_pink rounded-xl p-8">
          <h6 className="capitalize font-semibold text-bs_textColor text-xl relative after:block after:content[('')] after:h-1 after:w-3 after:top-8 after:bg-bs_primary after:absolute">
            follow us
          </h6>
          <div className="mt-10 flex gap-2 text-bs_primary">
            <a
              href="#"
              title="facebook"
              className="w-8 h-8 rounded-full border-2 border-bs_primary flex items-center justify-center hover:text-bs_white hover:bg-bs_primary transition-all delay-150 duration-500 ease-in-out"
            >
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a
              href="#"
              title="twitter"
              className="w-8 h-8 rounded-full border-2 border-bs_primary flex items-center justify-center hover:text-bs_white hover:bg-bs_primary transition-all delay-150 duration-500 ease-in-out"
            >
              <i class="fa-brands fa-x-twitter" />
            </a>
            <a
              href="#"
              title="instagram"
              className="w-8 h-8 rounded-full border-2 border-bs_primary flex items-center justify-center hover:text-bs_white hover:bg-bs_primary transition-all delay-150 duration-500 ease-in-out"
            >
              <i class="fa-brands fa-instagram" />
            </a>
            <a
              href="#"
              title="whatsapp"
              className="w-8 h-8 rounded-full border-2 border-bs_primary flex items-center justify-center hover:text-bs_white hover:bg-bs_primary transition-all delay-150 duration-500 ease-in-out"
            >
              <i class="fa-brands fa-whatsapp" />
            </a>
            <a
              href="#"
              title="youtube"
              className="w-8 h-8 rounded-full border-2 border-bs_primary flex items-center justify-center hover:text-bs_white hover:bg-bs_primary transition-all delay-150 duration-500 ease-in-out"
            >
              <i class="fa-brands fa-youtube" />
            </a>
          </div>
        </div>
      </div>
      <div className="popularTag mt-8">
        <div className="tagBox bg-bs_pink rounded-xl p-8">
          <h6 className="capitalize font-semibold text-bs_textColor text-xl relative after:block after:content[('')] after:h-1 after:w-3 after:top-8 after:bg-bs_primary after:absolute">
            popular tag
          </h6>
          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#"
              title="tag"
              className="capitalize text-base font-medium text-bs_textColor bg-bs_white px-4 py-3 rounded-xl hover:bg-bs_primary hover:text-bs_white transition-all delay-150 duration-500 ease-in-out"
            >
              shop
            </a>
            <a
              href="#"
              title="tag"
              className="capitalize text-base font-medium text-bs_textColor bg-bs_white px-4 py-3 rounded-xl hover:bg-bs_primary hover:text-bs_white transition-all delay-150 duration-500 ease-in-out"
            >
              buy
            </a>
            <a
              href="#"
              title="tag"
              className="capitalize text-base font-medium text-bs_textColor bg-bs_white px-4 py-3 rounded-xl hover:bg-bs_primary hover:text-bs_white transition-all delay-150 duration-500 ease-in-out"
            >
              gifts
            </a>
            <a
              href="#"
              title="tag"
              className="capitalize text-base font-medium text-bs_textColor bg-bs_white px-4 py-3 rounded-xl hover:bg-bs_primary hover:text-bs_white transition-all delay-150 duration-500 ease-in-out"
            >
              occations
            </a>
            <a
              href="#"
              title="tag"
              className="capitalize text-base font-medium text-bs_textColor bg-bs_white px-4 py-3 rounded-xl hover:bg-bs_primary hover:text-bs_white transition-all delay-150 duration-500 ease-in-out"
            >
              offer
            </a>
            <a
              href="#"
              title="tag"
              className="capitalize text-base font-medium text-bs_textColor bg-bs_white px-4 py-3 rounded-xl hover:bg-bs_primary hover:text-bs_white transition-all delay-150 duration-500 ease-in-out"
            >
              tips
            </a>
            <a
              href="#"
              title="tag"
              className="capitalize text-base font-medium text-bs_textColor bg-bs_white px-4 py-3 rounded-xl hover:bg-bs_primary hover:text-bs_white transition-all delay-150 duration-500 ease-in-out"
            >
              online
            </a>
            <a
              href="#"
              title="tag"
              className="capitalize text-base font-medium text-bs_textColor bg-bs_white px-4 py-3 rounded-xl hover:bg-bs_primary hover:text-bs_white transition-all delay-150 duration-500 ease-in-out"
            >
              deal
            </a>
            <a
              href="#"
              title="tag"
              className="capitalize text-base font-medium text-bs_textColor bg-bs_white px-4 py-3 rounded-xl hover:bg-bs_primary hover:text-bs_white transition-all delay-150 duration-500 ease-in-out"
            >
              box
            </a>
            <a
              href="#"
              title="tag"
              className="capitalize text-base font-medium text-bs_textColor bg-bs_white px-4 py-3 rounded-xl hover:bg-bs_primary hover:text-bs_white transition-all delay-150 duration-500 ease-in-out"
            >
              love
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListSide;
