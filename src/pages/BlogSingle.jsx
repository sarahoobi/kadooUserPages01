import Breadcrumb from "../components/Breadcrumb.jsx";

const BlogSingle = () => {
  return (
    <>
      <Breadcrumb title="BlogSingle" />
      <section>
        <div className="grid grid-cols-12 my-16">
          <div className="col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3 px-4 sm:px-0">
            <img
              src="./images/blogHero.jpg"
              alt="blog"
              className=" w-full rounded-lg"
            />
            <div className="flex items-center py-4">
              <i className="fa-regular fa-user text-bs_primary text-xs sm:text-base"></i>
              <span className="capitalize font-medium text-bs_paraGray text-xs sm:text-sm px-1 mr-3">
                jean r gunter
              </span>
              <i className="fa-regular fa-comments text-bs_primary text-xs sm:text-base"></i>
              <span className="capitalize font-medium text-bs_paraGray text-xs sm:text-sm px-1 mr-3">
                3.2k comments
              </span>
              <i className="fa-regular fa-thumbs-up text-bs_primary text-xs sm:text-base"></i>
              <span className="capitalize font-medium text-bs_paraGray text-xs sm:text-sm px-1 mr-3 ">
                1.4k like
              </span>

              <div className="flex-shrink-0 sm:flex-1 sm:text-right">
                <i className="fa-solid fa-share-nodes text-bs_primary text-xs sm:text-base"></i>
                <a
                  href="#"
                  className="capitalize font-medium text-bs_paraGray text-xs sm:text-sm hover:text-bs_primary transition-all delay-150 duration-300 ease-in-out px-1"
                  title="share"
                >
                  share
                </a>
              </div>
            </div>
            <h2 className="capitalize font-bold text-bs_textColor text:2xl md:text-3xl py-2">
              It is a long established fact that a reader
            </h2>
            <p className="text-bs_paraGray text-sm md:text-base md:leading-8 mt-3">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
            <br />
            <p className="text-bs_paraGray text-sm md:text-base md:leading-8">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful.
            </p>
            <div className="relative bg-bs_pink mt-8 py-6 px-10 before:block before:content('') before:w-2 before:h-full before:bg-bs_primary before:absolute before:left-0 before:top-0">
              <p className="text-bs_paraGray text-sm md:text-base md:leading-8 italic pb-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution.
              </p>
              <span className="relative text-sm text-bs_textColor font-semibold italic before:block before:content('') before:w-10 before:h-[2px] before:bg-bs_primary before:absolute before:-left-06 before:top-3 ml-14">
                Mark Crawford
              </span>
              <i className="fa-solid fa-quote-right text-pink-300 flex justify-end items-start text-[60px] sm:text-[70px] -mt-10 sm:-mt-16"></i>
            </div>
            <p className="text-bs_paraGray  text-sm md:text-base md:leading-8 py-6">
              In a free hour when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided. But in certain
              circumstances and owing to the claims of duty or the obligations
              of business it will frequently occur that pleasures have to be
              repudiated and annoyances accepted. The wise man therefore always
              holds in these matters to this principle of selection.
            </p>
            <div className="grid grid-cols-8 gap-4 md:gap-10 lg:gap-16">
              <img
                src="./images/blogpage01.jpg"
                alt="blog"
                className="w-[450px] rounded-lg col-span-4"
              />
              <img
                src="./images/blogPage02.jpg"
                alt="blog"
                className="w-[450px] rounded-lg col-span-4"
              />
            </div>
            <p className="text-bs_paraGray text-sm md:text-base md:leading-8 py-6">
              Power of choice is untrammelled and when nothing prevents our
              being able to do what we like best, every pleasure is to be
              welcomed and every pain avoided. But in certain circumstances and
              owing to the claims of duty or the obligations of business it will
              frequently occur that pleasures have to be repudiated and
              annoyances accepted. The wise man therefore always holds in these
              matters to this principle of selection.
            </p>
            <hr className="mb-6" />
            <div className="text-bs_textColor">
              <span className="font-semibold">Tags :</span>
              <a
                href="./index-grid-shop-2.html"
                title="shop"
                className="capitalize text-sm  bg-bs_pink px-4 py-2 rounded-2xl mx-1 hover:bg-bs_primary hover:text-bs_white transition-all delay-150 duration-700 ease-in-out"
              >
                shop
              </a>
              <a
                href="./index-grid-shop-2.html"
                title="online"
                className="capitalize text-sm bg-bs_pink px-4 py-2 rounded-2xl mx-1 hover:bg-bs_primary hover:text-bs_white transition-all delay-150 duration-700 ease-in-out"
              >
                online
              </a>
              <a
                href="./index-grid-shop-2.html"
                title="gifts"
                className="capitalize text-sm bg-bs_pink px-4 py-2 rounded-2xl mx-1 hover:bg-bs_primary hover:text-bs_white transition-all delay-150 duration-700 ease-in-out"
              >
                gifts
              </a>
            </div>
            <div className="md:grid md:grid-cols-9 items-center gap-4 rounded-lg shadow-md py-6 md:py-10 px-5 bg-bs_white mt-12">
              <img
                src="./images/blog-author.jpg"
                className="w-[300px] lg:w-[184px] mx-auto md:mx-0 rounded-lg md:col-span-3 lg:col-span-2"
                alt="blog-author"
              />
              <div className="md:col-span-6 lg:col-span-7 mt-4 md:mt-0 text-center md:text-left">
                <span className="block capitalize text-bs_textColor font-semibold">
                  author
                </span>
                <span className="text-bs_primary text-lg capitalize font-semibold ">
                  Roger Duque
                </span>
                <p className="text-bs_paraGray text-base leading-8 py-2 px-4 md:px-0">
                  It is a long established fact that a reader will be distracted
                  by the abcd readable content of a page when long established
                  fact that a reader looking at its that more less layout.
                </p>
                <div className="text-bs_primary flex gap-2 justify-center md:justify-start">
                  <a
                    href="#"
                    title="facebookPage"
                    className="w-6 h-6 md:w-8 md:h-8 hover:border-bs_primary hover:bg-bs_primary hover:text-white transition-all delay-150 duration-500 ease-in-out border-bs_primary rounded-full flex justify-center items-center border-[2px]"
                  >
                    <i className="fa-brands fa-facebook-f text-xs md:text-base"></i>
                  </a>
                  <a
                    href="#"
                    title="twitterPage"
                    className="w-6 h-6 md:w-8 md:h-8 hover:border-bs_primary hover:bg-bs_primary hover:text-white transition-all delay-150 duration-500 ease-in-out border-bs_primary rounded-full flex justify-center items-center border-[2px]"
                  >
                    <i className="fa-brands fa-x-twitter text-xs md:text-base"></i>
                  </a>
                  <a
                    href="#"
                    title="instagramPage"
                    className="w-6 h-6 md:w-8 md:h-8 hover:border-bs_primary hover:bg-bs_primary hover:text-white transition-all delay-150 duration-500 ease-in-out border-bs_primary rounded-full flex justify-center items-center border-[2px]"
                  >
                    <i className="fa-brands fa-instagram text-xs md:text-base"></i>
                  </a>
                  <a
                    href="#"
                    title="whatsappPage"
                    className="w-6 h-6 md:w-8 md:h-8 hover:border-bs_primary hover:bg-bs_primary hover:text-white transition-all delay-150 duration-500 ease-in-out border-bs_primary rounded-full flex justify-center items-center border-[2px]"
                  >
                    <i className="fa-brands fa-whatsapp text-xs md:text-base"></i>
                  </a>
                  <a
                    href="#"
                    title="youtubePage"
                    className="w-6 h-6 md:w-8 md:h-8 hover:border-bs_primary hover:bg-bs_primary hover:text-white transition-all delay-150 duration-500 ease-in-out border-bs_primary rounded-full flex justify-center items-center border-[2px]"
                  >
                    <i className="fa-brands fa-youtube text-xs md:text-base"></i>
                  </a>
                </div>
              </div>
            </div>
            <h4 className="text-bs_textColor capitalize text-xl md:text-3xl mt-14 mb-8 font-semibold">
              comments (20)
            </h4>

            <div className="flex gap-4">
              <div className="commentPic w-[140px]">
                <img
                  src="./images/testi03.jpg"
                  alt="comment"
                  className="rounded-full"
                />
              </div>
              <div>
                <span className="block capitalize text-bs_textColor font-semibold ">
                  Sinkler Jesse
                </span>
                <i className="fa-regular fa-clock text-sm text-bs_primary"></i>
                <span className="capitalize text-bs_primary text-sm mx-1">
                  August 20, 2024
                </span>
                <p className="text-bs_paraGray text-sm md:text-base md:leading-8 py-1">
                  There are many variations of passages the majority have
                  suffered in some injected humour or randomised words which
                  don't look even long established fact that a reader slightly
                  believable.
                </p>
                <a
                  href="#"
                  className="hover:text-bs_textColor transition-all delay-150 duration-700 ease-in-out text-bs_primary text-sm"
                >
                  <i className="fa-solid fa-reply"></i>
                  <span className="capitalize mx-1">reply</span>
                </a>
              </div>
            </div>
            <div className="flex gap-4 mt-10 ml-10">
              <div className="commentPic w-[140px]">
                <img
                  src="./images/testi01.jpg"
                  alt="comment"
                  className="rounded-full"
                />
              </div>
              <div>
                <span className="block capitalize text-bs_textColor font-semibold ">
                  Sinkler Jesse
                </span>
                <i className="fa-regular fa-clock text-sm text-bs_primary"></i>
                <span className="capitalize text-bs_primary text-sm mx-1">
                  August 20, 2024
                </span>
                <p className="text-bs_paraGray text-sm md:text-base md:leading-8 py-1">
                  There are many variations of passages the majority have
                  suffered in some injected humour or randomised words which
                  don't look even long established fact that a reader slightly
                  believable.
                </p>
                <a
                  href="#"
                  className="hover:text-bs_textColor transition-all delay-150 duration-700 ease-in-out text-bs_primary text-sm"
                >
                  <i className="fa-solid fa-reply"></i>
                  <span className="capitalize mx-1">reply</span>
                </a>
              </div>
            </div>
            <div className="flex gap-4 mt-10">
              <div className="commentPic w-[140px]">
                <img
                  src="./images/testi02.jpg"
                  alt="comment"
                  className="rounded-full"
                />
              </div>
              <div>
                <span className="block capitalize text-bs_textColor font-semibold ">
                  Kenneth Evans
                </span>
                <i className="fa-regular fa-clock text-sm text-bs_primary"></i>
                <span className="capitalize text-bs_primary text-sm mx-1">
                  August 20, 2024
                </span>
                <p className="text-bs_paraGray text-sm md:text-base md:leading-8 py-1">
                  There are many variations of passages the majority have
                  suffered in some injected humour or randomised words which
                  don't look even long established fact that a reader slightly
                  believable.
                </p>
                <a
                  href="#"
                  className="hover:text-bs_textColor transition-all delay-150 duration-700 ease-in-out text-bs_primary text-sm"
                >
                  <i className="fa-solid fa-reply"></i>
                  <span className="capitalize mx-1">reply</span>
                </a>
              </div>
            </div>
            <form
              action="#"
              className="bg-bs_pink py-10 px-8 mt-16 rounded-lg mb-10"
            >
              <h4 className="text-bs_textColor capitalize text-xl md:text-3xl mb-8 font-semibold">
                Leave A Comment
              </h4>
              <div className="grid grid-cols-10 md:gap-8">
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-bs_primary focus:border-bs_primary block py-4 px-3 col-span-10 md:col-span-5"
                  placeholder="Your Name *"
                  required
                />
                <input
                  type="email"
                  id="email-address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-bs_primary focus:border-bs_primary block py-4 px-3 col-span-10 md:col-span-5 mt-6 md:mt-0"
                  placeholder="Your Email *"
                  required
                />
              </div>
              <textarea
                type="text"
                id="large-input"
                rows="4"
                className="block w-full p-4 text-bs_textColor border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-bs_primary focus:border-bs_primary mt-6 mb-10"
                placeholder="Your Comment*"
              ></textarea>
              <a
                href="#"
                title="postComment"
                className="bg-bs_primary text-bs_white p-4 rounded-xl hover:bg-bs_textColor transition-all delay-150 duration-700 ease-in-out"
              >
                <span className="capitalize text-sm md:text-base">
                  post a commnet
                </span>{" "}
                <i className="fa-regular fa-paper-plane mx-1"></i>
              </a>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSingle;
