import Breadcrumb from "../components/Breadcrumb.jsx";

const Cart = () => {
  return (
    <>
      <Breadcrumb title="Cart" />
      <section>
        <div className="container my-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8 xl:col-span-9">
              <div className="overflow-x-scroll md:overflow-x-hidden">
                <table className="w-full mb-16">
                  <tr className="border-b">
                    <th className="text-gray-900 uppercase font-bold text-xs sm:text-sm w-16 sm:w-24 h-12 px-1">
                      image
                    </th>
                    <th className="text-gray-900 uppercase font-bold text-xs sm:text-sm w-24 sm:w-28 text-left px-1">
                      product name
                    </th>
                    <th className="text-gray-900 uppercase font-bold text-xs sm:text-sm w-10 sm:w-12 text-center px-1">
                      price
                    </th>
                    <th className="text-gray-900 uppercase font-bold text-xs sm:text-sm w-12 sm:w-20 text-center px-1">
                      Quantity
                    </th>
                    <th className="text-gray-900 uppercase font-bold text-xs sm:text-sm w-16 sm:w-20 text-center px-1">
                      Sub Total
                    </th>
                    <th className="text-gray-900 uppercase font-bold text-xs sm:text-sm w-10 text-center px-1">
                      {" "}
                    </th>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-1 sm:px-6">
                      <a href="#" title="imageGift">
                        <img
                          src="./images/02-special.png"
                          alt="gift"
                          className="w-14 sm:min-w-24 rounded-lg border border-gray-200 mx-auto"
                        />
                      </a>
                    </td>
                    <td className="py-4 w-60 px-2">
                      <a className="block text-gray-900 capitalize font-semibold text-xs sm:text-sm hover:text-bs_primary transition-all duration-500 delay-150 ease-in-out cursor-pointer">
                        Special Gift Box
                      </a>
                      <span className="block text-bs_paraGray text-xs sm:text-sm leading-8 capitalize">
                        type: watch
                      </span>
                      <span className="block text-bs_paraGray text-xs sm:text-sm capitalize">
                        color: orange
                      </span>
                    </td>
                    <td className="py-4 text-center text-xs sm:text-base">
                      $1,500
                    </td>
                    <td className="py-4 text-center">
                      <form>
                        <div className="relative flex justify-center items-center">
                          <button
                            type="button"
                            id="decrement-button"
                            data-input-counter-decrement="counter-input"
                            className="shrink-0 bg-bs_pink flex items-center justify-center rounded-full w-6 h-6 sm:h-8 sm:w-8 text-bs_primary"
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                          <input
                            type="text"
                            id="counter-input"
                            data-input-counter
                            className="shrink-0 text-bs_primary border-0 bg-transparent text-xs sm:text-sm font-normal max-w-10 text-center"
                            placeholder=""
                            value="1"
                            required
                          />
                          <button
                            type="button"
                            id="increment-button"
                            data-input-counter-increment="counter-input"
                            className="shrink-0 bg-bs_pink flex items-center justify-center rounded-full w-6 h-6 sm:h-8 sm:w-8 text-bs_primary"
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </form>
                    </td>
                    <td className="py-4 text-center text-xs sm:text-base">
                      $1,500
                    </td>
                    <td className="py-4">
                      <a
                        href="#"
                        title="close"
                        className="text-gray-900 border rounded-full border-gray-200 w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center hover:text-bs_primary hover:border-bs_primary transition-all duration-700 delay-150 ease-in-out"
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-1 sm:px-6">
                      <a href="#" title="imageGift">
                        <img
                          src="./images/01-special.png"
                          alt="gift"
                          className="w-14 sm:min-w-24 rounded-lg border border-gray-200 mx-auto"
                        />
                      </a>
                    </td>
                    <td className="py-4 w-60 px-2">
                      <a className="block text-gray-900 capitalize font-semibold text-xs sm:text-sm hover:text-bs_primary transition-all duration-500 delay-150 ease-in-out cursor-pointer">
                        Special Gift Box
                      </a>
                      <span className="block text-bs_paraGray text-xs sm:text-sm leading-8 capitalize">
                        type: watch
                      </span>
                      <span className="block text-bs_paraGray text-xs sm:text-sm capitalize">
                        color: orange
                      </span>
                    </td>
                    <td className="py-4 text-center text-xs sm:text-base">
                      $1,500
                    </td>
                    <td className="py-4 text-center">
                      <form>
                        <div className="relative flex justify-center items-center">
                          <button
                            type="button"
                            id="decrement-button"
                            data-input-counter-decrement="counter-input"
                            className="shrink-0 bg-bs_pink flex items-center justify-center rounded-full w-6 h-6 sm:h-8 sm:w-8 text-bs_primary"
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                          <input
                            type="text"
                            id="counter-input"
                            data-input-counter
                            className="shrink-0 text-bs_primary border-0 bg-transparent text-sm font-normal max-w-[2.5rem] text-center"
                            placeholder=""
                            value="12"
                            required
                          />
                          <button
                            type="button"
                            id="increment-button"
                            data-input-counter-increment="counter-input"
                            className="shrink-0 bg-bs_pink flex items-center justify-center rounded-full w-6 h-6 sm:h-8 sm:w-8 text-bs_primary"
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </form>
                    </td>
                    <td className="py-4 text-center text-xs sm:text-base">
                      $1,500
                    </td>
                    <td className="py-4">
                      <a
                        href="#"
                        title="close"
                        className="text-gray-900 border rounded-full border-gray-200 w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center hover:text-bs_primary hover:border-bs_primary transition-all duration-700 delay-150 ease-in-out"
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-1 sm:px-6">
                      <a href="#" title="imageGift">
                        <img
                          src="./images/03-special.png"
                          alt="gift"
                          className="w-14 sm:min-w-24 rounded-lg border border-gray-200 mx-auto"
                        />
                      </a>
                    </td>
                    <td className="py-4 w-60 px-2">
                      <a className="block text-gray-900 capitalize font-semibold text-xs sm:text-sm hover:text-bs_primary transition-all duration-500 delay-150 ease-in-out cursor-pointer">
                        Special Gift Box
                      </a>
                      <span className="block text-bs_paraGray text-xs sm:text-sm leading-8 capitalize">
                        type: watch
                      </span>
                      <span className="block text-bs_paraGray text-xs sm:text-sm capitalize">
                        color: orange
                      </span>
                    </td>
                    <td className="py-4 text-center text-xs sm:text-base">
                      $1,500
                    </td>
                    <td className="py-4 text-center">
                      <form>
                        <div className="relative flex justify-center items-center">
                          <button
                            type="button"
                            id="decrement-button"
                            data-input-counter-decrement="counter-input"
                            className="shrink-0 bg-bs_pink flex items-center justify-center rounded-full w-6 h-6 sm:h-8 sm:w-8 text-bs_primary"
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                          <input
                            type="text"
                            id="counter-input"
                            data-input-counter
                            className="shrink-0 text-bs_primary border-0 bg-transparent text-sm font-normal max-w-10 sm:max-w-[2.5rem] text-center"
                            placeholder=""
                            value="1"
                            required
                          />
                          <button
                            type="button"
                            id="increment-button"
                            data-input-counter-increment="counter-input"
                            className="shrink-0 bg-bs_pink flex items-center justify-center rounded-full h-6 w-6 sm:h-8 sm:w-8 text-bs_primary"
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </form>
                    </td>
                    <td className="py-4 text-center text-xs sm:text-base">
                      $1,500
                    </td>
                    <td className="py-4">
                      <a
                        href="#"
                        title="close"
                        className="text-gray-900 border rounded-full border-gray-200 w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center hover:text-bs_primary hover:border-bs_primary transition-all duration-700 delay-150 ease-in-out"
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="grid grid-cols-12 items-center gap-8 md:gap-[92px] lg:gap-18 xl:gap-32 mb-18">
                <form className="relative w-96 col-span-12 md:col-span-6">
                  <input
                    type="text"
                    className="w-full form-control border-gray-200 rounded-full px-6 py-4 focus:ring-pnik-500 focus:border-pink-500"
                    placeholder="Your Coupon Code"
                  />
                  <button
                    className="capitalize text-bs_white bg-pink-500 rounded-full px-4 py-3 absolute right-1 top-[5px] hover:bg-bs_textColor transition-colors delay-150 duration-500 ease-in-out"
                    type="submit"
                  >
                    Apply Coupon
                  </button>
                </form>
                <div className="col-span-12 text-right md:text-left md:col-span-6">
                  <a
                    href="#"
                    title="continue-shopping"
                    className="bg-pink-500 text-bs_white px-3 py-4 rounded-lg hover:bg-bs_textColor transition-colors delay-150 duration-500 ease-in-out"
                  >
                    <i className="fa-solid fa-arrow-left-long"></i>
                    <span className="capitalize px-1">continue shopping</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 xl:col-span-3 mt-16 md:mt-0">
              <div className="h-[430px] border border-gray-300 bg-bs_pink rounded-xl py-12 px-6 ">
                <table className="mb-16 w-[100%]">
                  <tr className="w-[100%] border-b text-left">
                    <th className="w-full">
                      <h6 className="text-gray-900 capitalize font-semibold pb-4">
                        Cart Summary
                      </h6>
                    </th>
                  </tr>
                  <tr className="h-12">
                    <td className="text-base text-gray-900 capitalize font-semibold w-[40%]">
                      Sub Total:
                    </td>
                    <td className="text-bs_paraGray text-base w-[60%] text-end">
                      $4,500.00
                    </td>
                  </tr>
                  <tr className="h-12">
                    <td className="text-base text-gray-900 capitalize font-semibold w-[40%]">
                      discount:
                    </td>
                    <td className="text-bs_paraGray text-base w-[60%] text-end">
                      $5.00
                    </td>
                  </tr>
                  <tr className="h-12">
                    <td className="text-base text-gray-900 capitalize font-semibold w-[40%]">
                      Shipping:
                    </td>
                    <td className="text-bs_paraGray text-base w-[60%] text-end">
                      free
                    </td>
                  </tr>
                  <tr className="border-t-[1px] h-12">
                    <td className="text-lg text-gray-900 capitalize font-semibold w-[30%]">
                      total:
                    </td>
                    <td className="text-pink-500 text-base w-[70%] text-end font-semibold">
                      $4,520.00
                    </td>
                  </tr>
                </table>
                <a
                  href="#"
                  title="Checkout"
                  className="text-bs_white bg-pink-500 px-3 py-4 rounded-xl hover:bg-bs_textColor transition-all ease-in-out delay-150 duration-500 text-base lg:text-lg capitalize"
                >
                  checkout now
                  <i className="fa-solid fa-arrow-right-long px-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
