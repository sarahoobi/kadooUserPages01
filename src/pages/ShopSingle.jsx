import Breadcrumb from "../components/Breadcrumb.jsx";
import ProductCard from "../components/ProductCard.jsx";

const PrMainData = () => {
  return (
    <div className=" container grid lg:grid-cols-12 lg:gap-8 xl:gap-10 mt-14 mx-auto">
      <div className="singleShopPics col-span-12 lg:col-span-4 xl:col-span-5 mb-40">
        <div
          id="indicators-carousel-shop"
          className="giftPicsBox relative w-full"
          data-carousel="slider"
        >
          <div className="relative h-96 overflow-hidden rounded-2xl border border-gray-200">
            <a
              href="#"
              title="playVideo"
              className="flex justify-end hover:text-pink-500 p-4"
            >
              <i className="fa-regular fa-circle-play text-gray-500 text-4xl"></i>
            </a>
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item="active"
            >
              <img
                src="./images/02-special.png"
                className="absolute block w-[300px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="special02"
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./images/03-special.png"
                className="absolute w-[300px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="special03"
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./images/01-special.png"
                className="absolute block w-[300px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="special01"
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./images/04-special.png"
                className="absolute w-[300px] block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="special04"
              />
            </div>
          </div>
          <div className=" z-30 flex gap-3 mt-5">
            <div className="border border-gray-200 rounded-2xl p-3 cursor-pointer hover:border-bs_primary transition-colors delay-150 duration-500">
              <img
                src="./images/02-special.png"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              />
            </div>
            <div className="border border-gray-200 rounded-2xl p-3 cursor-pointer hover:border-pink-500 transition-colors delay-150 duration-500">
              <img
                src="./images/03-special.png"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              />
            </div>
            <div className="border border-gray-200 rounded-2xl p-3 cursor-pointer hover:border-pink-500 transition-colors delay-150 duration-500">
              <img
                src="./images/01-special.png"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              />
            </div>
            <div className="border border-gray-200 rounded-2xl p-3 cursor-pointer hover:border-bs_primary transition-colors delay-150 duration-500">
              <img
                src="./images/04-special.png"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              />
            </div>
          </div>
          <div className="sliderControlsBox transition-opacity duration-300 z-50">
            <button
              type="button"
              className="absolute z-30 top-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-bs_primary">
                <i
                  className="fa-solid fa-caret-left text-bs_white"
                  aria-hidden="true"
                ></i>
                <span className="sr-only">Previous</span>
              </a>
            </button>
            <button
              type="button"
              className=" absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-bs_primary">
                <i
                  className="fa-solid fa-caret-right text-bs_white"
                  aria-hidden="true"
                ></i>
                <span className="sr-only">Next</span>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="singleShopDetails col-span-12 lg:col-span-8 xl:col-span-7 lg:pr-0 xl:pr-18 mt-10 md:mt-0">
        <h4 className="text-gray-900 lg:text-2xl font-semibold mb-3">
          Special Gift Box
        </h4>
        <i className="fa-solid fa-star text-pink-500"></i>
        <i className="fa-solid fa-star text-pink-500"></i>
        <i className="fa-solid fa-star text-pink-500"></i>
        <i className="fa-solid fa-star-half-stroke text-pink-500"></i>
        <i className="fa-regular fa-star text-pink-500"></i>
        <span className="text-gray-500 text-base px-2">
          {" "}
          (4 Customer Reviews)
        </span>
        <div className="mt-3">
          <span className="text-gray-500 text-lg line-through">$690</span>{" "}
          <span className="text-pink-500 text-2xl px-2">$650</span>
          <span className="text-bs_warning">30% off</span>
        </div>
        <p className="text-base text-gray-500 leading-7 my-4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <hr />
        <div className="grid sm:grid-cols-3 mt-4">
          <div className="mt-2">
            <h6 className="text-gray-500 text-lg font-semibold capitalize">
              quantity
            </h6>
            <div className="flex items-center space-x-2 mt-3">
              <form className="counter">
                <div className="relative flex items-center">
                  <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="counter-input"
                    className="shrink-0 text-pink-500 hover:text-white bg-bs_pink hover:bg-bs_primary inline-flex items-center justify-center rounded-full h-10 w-10 transition-all delay-150 duration-500 ease-in-out"
                  >
                    <svg
                      className="w-2.5 h-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    id="counter-input"
                    data-input-counter
                    className="shrink-0 text-pink-500 border-0 bg-transparent text-sm font-normal max-w-[2.5rem] text-center"
                    placeholder=""
                    value="12"
                    required
                  />
                  <button
                    type="button"
                    id="increment-button"
                    data-input-counter-increment="counter-input"
                    className="shrink-0 text-pink-500 hover:text-white bg-bs_pink hover:bg-bs_primary inline-flex items-center justify-center rounded-full h-10 w-10 transition-all delay-150 duration-500 ease-in-out"
                  >
                    <svg
                      className="w-2.5 h-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-2">
            <h6 className="text-gray-500 text-lg font-semibold capitalize">
              size
            </h6>
            <form className="max-w-sm mx-auto mt-2">
              <div className="flex">
                <button
                  id="size-button"
                  data-dropdown-toggle="dropdown-size"
                  className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-bs_white border border-gray-300 rounded-lg capitalize"
                  type="button"
                >
                  choose size
                  <i className="fa-solid fa-chevron-down px-1"></i>
                </button>
                <div
                  id="dropdown-size"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-md px-4"
                >
                  <ul
                    className="py-2 text-sm text-gray-900"
                    aria-labelledby="states-button"
                  >
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-100"
                      >
                        <div className="inline-flex items-center capitalize">
                          choose size
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
                      >
                        <div className="inline-flex items-center capitalize">
                          extra small
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
                      >
                        <div className="inline-flex items-center capitalize">
                          small
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
                      >
                        <div className="inline-flex items-center capitalize">
                          Medium
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
                      >
                        <div className="inline-flex items-center capitalize">
                          large
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
                      >
                        <div className="inline-flex items-center capitalize">
                          extra large
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          <div className="mt-2">
            <h6 className="text-gray-500 text-lg font-semibold capitalize">
              color
            </h6>
            <div className="flex items-center gap-2 mt-2 mb-4">
              <input
                id="first-color-checkbox"
                type="checkbox"
                value=""
                className="w-8 h-8  bg-[#606ddd] border-transparent rounded-full focus:ring-transparent focus:ring-[#606ddd] peer"
              />
              <input
                id="second-color-checkbox"
                type="checkbox"
                value=""
                className="w-8 h-8  bg-[#4caf50] border-transparent rounded-full focus:ring-transparent focus:ring-[#4caf50] peer"
              />
              <input
                id="third-color-checkbox"
                type="checkbox"
                value=""
                className="w-8 h-8  bg-[#17a2b8] border-transparent rounded-full focus:ring-transparent focus:ring-[#17a2b8] peer"
              />
              <input
                id="fourth-color-checkbox"
                type="checkbox"
                value=""
                className="w-8 h-8  bg-[#ffc107] border-transparent rounded-full focus:ring-transparent focus:ring-[#ffc107] peer"
              />
              <input
                id="fifth-color-checkbox"
                type="checkbox"
                value=""
                className="w-8 h-8  bg-[#f44336] border-transparent rounded-full focus:ring-transparent focus:ring-[#f44336] peer"
              />
            </div>
          </div>
        </div>
        <table className="my-4">
          <tr className="h-10 text-gray-500 capitalize text-lg">
            <td>stock:</td>
            <td className="px-2">available</td>
          </tr>
          <tr className="h-10 text-gray-500 uppercase text-lg">
            <td>sku:</td>
            <td className="px-2">266TYFD</td>
          </tr>
          <tr className="h-10 text-gray-500 capitalize text-lg">
            <td>category:</td>
            <td className="px-2">Jewelry & Accessories</td>
          </tr>
          <tr className="h-10 text-gray-500 capitalize text-lg">
            <td>brand:</td>
            <td className="px-2">
              <a href="#" title="brand">
                novak
              </a>
            </td>
          </tr>
          <tr className="h-10 text-gray-500 capitalize text-lg">
            <td>tags:</td>
            <td className="px-2">
              <a href="#" title="brand">
                <span className="hover:text-pink-500">Gifts, </span>
                <span className="hover:text-pink-500">watch, </span>
                <span className="hover:text-pink-500">Modern, </span>{" "}
                <span className="hover:text-pink-500">shop</span>
              </a>
            </td>
          </tr>
        </table>
        <hr />
        <div className="sm:grid sm:grid-cols-2 mt-4 items-center xl:gap-5">
          <div className="flex space-x-2 sm:justify-start">
            <button className="bg-bs_primary py-1 px-2 sm:py-3 sm:px-5 text-white rounded-xl hover:bg-bs_textColor transition-colors ease-in-out delay-150 duration-500">
              <i className="fa-solid fa-bag-shopping "></i>
              <a href="#" className="px-1 ">
                Add To Cart
              </a>
            </button>
            <a
              href="#"
              className="bg-bs_purple text-white py-3 px-4 rounded-xl hover:bg-bs_textColor transition-colors ease-in-out delay-150 duration-500"
            >
              <i className="fa-regular fa-heart"></i>
            </a>
            <a
              href="#"
              className="bg-bs_purple text-white py-3 px-4 rounded-xl hover:bg-bs_textColor transition-colors ease-in-out delay-150 duration-500"
            >
              <i className="fa-solid fa-rotate"></i>
            </a>
          </div>
          <div className="flex gap-2 items-center sm:justify-end mt-10 sm:mt-0">
            <span className="text-gray-500 capitalize text-lg">share:</span>
            <a
              href="#"
              title="logo"
              className="border border-gray-200 w-10 h-10 flex justify-center items-center bg-bs_white text-gray-500 rounded-full hover:text-white hover:bg-bs_primary transition-all ease-in-out duration-500 delay-150"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="#"
              title="logo"
              className="border border-gray-200 w-10 h-10 flex justify-center items-center bg-bs_white text-gray-500 rounded-full hover:text-white hover:bg-bs_primary transition-all ease-in-out duration-500 delay-150"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="#"
              title="logo"
              className="border border-gray-200 w-10 h-10 flex justify-center items-center bg-bs_white text-gray-500 rounded-full hover:text-white hover:bg-bs_primary transition-all ease-in-out duration-500 delay-150"
            >
              <i className="fa-brands fa-linkedin-in text-sm md:text-base"></i>
            </a>
            <a
              href="#"
              title="logo"
              className="border border-gray-200 w-10 h-10 flex justify-center items-center bg-bs_white text-gray-500 rounded-full hover:text-white hover:bg-bs_primary transition-all ease-in-out duration-500 delay-150"
            >
              <i className="fa-brands fa-pinterest-p"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
const PrTabs = () => {
  return (
    <section>
      <div className="container mx-auto p-6">
        <div className="mb-4 border-b border-gray-200 text-pink-500 text-sm md:text-lg font-medium text-center mt-16">
          <ul
            className="flex font-medium text-center md:text-lg"
            id="default-styled-tab"
            data-tabs-toggle="#default-styled-tab-content"
            data-tabs-active-classes="text-gray-500 border-gray-200"
            data-tabs-inactive-classes="text-gray-500 hover:text-pink-500 border-gray-200 hover:border-gray-200"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
                className="inline-block py-4 sm:p-4 border-b-2 rounded-t-lg hover:text-pink-500 hover:border-bs_primary-1"
                id="description"
                data-tabs-target="#styled-description"
                type="button"
                role="tab"
                aria-controls="styled-description"
                aria-selected="false"
              >
                Description
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className="inline-block py-4 sm:p-4 border-b-2 rounded-t-lg hover:text-pink-500 hover:border-bs_primary"
                id="additional-styled-tab"
                data-tabs-target="#styled-additional"
                type="button"
                role="tab"
                aria-controls="styled-additional"
                aria-selected="false"
              >
                Additional Info
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className="inline-block py-4 sm:p-4 border-b-2 rounded-t-lg hover:text-pink-500 hover:border-bs_primary"
                id="reviews-styled-tab"
                data-tabs-target="#styled-reviews"
                type="button"
                role="tab"
                aria-controls="styled-reviews"
                aria-selected="false"
              >
                Reviews (05)
              </button>
            </li>
          </ul>
        </div>
        <div className="tabs-content mt-4" id="default-styled-tab-content">
          <div
            id="styled-description"
            className="tab-content text-gray-500 leading-10"
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            <p className="text-sm leading-6 md:text-lg md:leading-9">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet.
            </p>
            <p className="text-sm leading-6 md:text-lg md:leading-9">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit.
            </p>
            <div className="grid md:grid-cols-6 mt-5">
              <div className="md:col-span-3 lg:col-span-3 xl:col-span-2">
                <span className="font-semibold capitalize lg:text-base text-gray-900">
                  features
                </span>
                <ul className="mt-3 list-disc px-3">
                  <li>Modern Art Deco Chaise Lounge</li>
                  <li>Unique cylindrical design copper finish</li>
                  <li>Covered in grey velvet fabric</li>
                  <li>Modern Bookcase in Copper Colored Finish</li>
                  <li>Use of Modern Materials</li>
                  <li>Mirrored compartments and upgraded interior</li>
                </ul>
              </div>
              <div className="md:col-span-3 lg:col-span-2">
                <span className="font-semibold capitalize lg:text-base text-gray-900">
                  Specifications
                </span>
                <ul className="mt-3 list-disc px-3">
                  <li>
                    <span className="text-gray-900 pr-1"> Dimensions:</span>
                    <span>4ft W x 7ft h</span>
                  </li>
                  <li>
                    <span className="text-gray-900 pr-1"> Model Year:</span>{" "}
                    <span>2024</span>
                  </li>
                  <li>
                    <span className="text-gray-900 pr-1">
                      {" "}
                      Available Sizes:
                    </span>{" "}
                    <span> 8.5, 9.0, 9.5, 10.0</span>
                  </li>
                  <li>
                    <span className="text-gray-900 pr-1"> Manufacturer:</span>{" "}
                    <span> Reebok Inc.</span>
                  </li>
                  <li>
                    <span className="text-gray-900 pr-1">
                      {" "}
                      Available Colors:
                    </span>{" "}
                    <span>White/Red/Blue,Black/Orange/Green</span>
                  </li>
                  <li>
                    <span className="text-gray-900 pr-1">Made In:</span>{" "}
                    <span>USA</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            id="styled-additional"
            className="hidden tab-content text-gray-500 leading-10"
            role="tabpanel"
            aria-labelledby="additional-tab"
          >
            <p className=" text-sm leading-6 md:text-lg md:leading-9">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet.
            </p>
            <p className="text-sm leading-6 md:text-lg md:leading-9">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit.
            </p>
            <span className="font-semibold capitalize lg:text-base text-gray-900">
              Shipping option
            </span>
            <ul className="mt-3 list-disc px-3">
              <li>
                <span className="text-gray-900 pr-1"> Dimensions:</span>{" "}
                <span>4ft W x 7ft h</span>
              </li>
              <li>
                <span className="text-gray-900 pr-1"> Model Year:</span>{" "}
                <span>2024</span>
              </li>
              <li>
                <span className="text-gray-900 pr-1">Standard:</span>{" "}
                <span> 6-7 Days, Shipping Cost - Free</span>
              </li>
              <li>
                <span className="text-gray-900 pr-1"> Express:</span>{" "}
                <span>1-2 Days, Shipping Cost - $20</span>
              </li>
              <li>
                <span className="text-gray-900 pr-1">Courier:</span>{" "}
                <span>2-3 Days, Shipping Cost - $30</span>
              </li>
              <li>
                <span className="text-gray-900 pr-1">Fastgo:</span>{" "}
                <span>1-3 Days, Shipping Cost - $15</span>
              </li>
            </ul>
          </div>
          <div
            id="styled-reviews"
            className="tab-content hidden text-gray-500 leading-10"
            role="tabpanel"
            aria-labelledby="review-tab"
          >
            <h5 className="capitalize font-bold text-xl my-8">reviews (05)</h5>
            <div className="rounded-3xl border border-gray-200 flex p-2 md:p-6 mt-5">
              <img
                src="./images/testi03.jpg"
                className="w-14 h-14 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full"
                alt="reviewsPic"
              />
              <div className="px-2 md:px-4">
                <div className="flex justify-between">
                  <span className="text-gray-900 capitalize text-sm sm:text-lg font-semibold">
                    Sinkler Denola
                  </span>
                  <div className="rated text-pink-500 text-[12px] sm:text-base">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div>
                  <i className="fa-regular fa-clock text-pink-500 text-sm pt-2"></i>
                  <span className="text-pink-500 text-sm">August 20, 2024</span>
                </div>
                <p className="text-gray-500 text-sm md:text-base py-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries but also the
                  leap electronic typesetting, remaining essentially unchanged.
                  It was popularised in the with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                <a
                  href="#"
                  title="reply"
                  className="text-pink-500 hover:text-bs_warning"
                >
                  <i className="fa-solid fa-reply "></i>
                  <span className="px-2 capitalize font-semibold">reply</span>
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-gray-200 flex ml-6 sm:ml-12 p-2 md:p-6 my-10">
              <img
                src="./images/testi01.jpg"
                className="w-14 h-14 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full"
                alt="reviewsPic"
              />
              <div className="px-2 md:px-4">
                <div className="flex justify-between">
                  <span className="text-gray-900 capitalize text-sm sm:text-lg font-semibold">
                    Daniel Wellman
                  </span>
                  <div className="rated text-pink-500 text-[12px] md:text-base">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                </div>
                <div>
                  <i className="fa-regular fa-clock text-bs_primary text-sm pt-2"></i>
                  <span className="text-pink-500 text-sm">August 20, 2024</span>
                </div>
                <p className="text-gray-500 text-sm md:text-base py-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries but also the
                  leap electronic typesetting, remaining essentially unchanged.
                  It was popularised in the with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                <a
                  href="#"
                  title="reply"
                  className="text-pink-500 hover:text-warning"
                >
                  <i className="fa-solid fa-reply "></i>
                  <span className="px-2 capitalize font-semibold">reply</span>
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-gray-200 flex p-2 md:p-6 mt-5">
              <img
                src="./images/testi03.jpg"
                className="w-14 h-14 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full"
                alt="reviewsPic"
              />
              <div className="px-2 md:px-4">
                <div className="flex justify-between">
                  <span className="text-gray-900 capitalize text-sm sm:text-lg font-semibold">
                    Kenneth Evans
                  </span>
                  <div className="rated text-pink-500 text-[12px] sm:text-base">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                </div>
                <div>
                  <i className="fa-regular fa-clock text-pink-500 sm:text-sm pt-2"></i>
                  <span className="text-pink-500 text-sm">August 20, 2024</span>
                </div>
                <p className="text-gray-500 text-sm md:text-base py-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries but also the
                  leap electronic typesetting, remaining essentially unchanged.
                  It was popularised in the with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                <a
                  href="#"
                  title="reply"
                  className="text-pink-500 hover:text-warning"
                >
                  <i className="fa-solid fa-reply "></i>
                  <span className="px-2 capitalize font-semibold">reply</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const PrRelateds = () => {
  return (
    <div className="relatedItems grid grid-cols-12 gap-5 mt-8">
      {[...Array(4)].map((item, index) => {
        let image;
        index === 0 ? (image = "./images/01-special.png") : "";
        index === 1 ? (image = "./images/02-special.png") : "";
        index === 2 ? (image = "./images/03-special.png") : "";
        index === 3 ? (image = "./images/04-special.png") : "";
        return <ProductCard img={image} i={index} />;
      })}
    </div>
  );
};
const ShopSingle = () => {
  return (
    <>
      <Breadcrumb title="ShopSingle" />
      <PrMainData />
      <PrTabs />
      <PrRelateds />
    </>
  );
};

export default ShopSingle;
