import Breadcrumb from "../components/Breadcrumb.jsx";

const Checkout = () => {
  return (
    <>
      <Breadcrumb title="Checkout" />
      <section>
        <div className="grid grid-cols-12 xl:grid-cols-10 md:gap-4 lg:gap-6 xl:gap-8 container my-16">
          <div className="col-span-12 md:col-span-8 xl:col-span-7">
            <div
              id="accordion-color"
              data-accordion="collapse"
              data-active-classes="bg-bs_white text-bs_primary"
            >
              <h2 id="accordion-color-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-5 py-4 font-medium border border-gray-200 rounded-xl focus:ring-1 focus:ring-gray-200 gap-3"
                  data-accordion-target="#accordion-color-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-color-body-1"
                >
                  <span className="capitalize">your billing address</span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-color-body-1"
                className="hidden"
                aria-labelledby="accordion-color-heading-1"
              >
                <div className="p-6 xl:p-8 border border-gray-200">
                  <form className="mx-auto flex flex-wrap justify-between gap-5 xl:gap-6">
                    <div className="w-[90%] md:w-[45%]">
                      <label
                        htmlFor="large-input"
                        className="capitalize text-base font-medium text-bs_textColor"
                      >
                        first name
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        placeholder="First Name"
                        className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                      />
                    </div>
                    <div className="w-[90%] md:w-[45%]">
                      <label
                        htmlFor="large-input"
                        className="capitalize text-base font-medium text-bs_textColor"
                      >
                        last name
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        placeholder="Last Name"
                        className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                      />
                    </div>
                    <div className="firstName w-[90%] md:w-[45%]">
                      <label
                        htmlFor="large-input"
                        className="capitalize text-base font-medium text-bs_textColor"
                      >
                        email
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        placeholder="Email Address"
                        className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                      />
                    </div>
                    <div className="lastName w-[90%] md:w-[45%]">
                      <label
                        htmlFor="large-input"
                        className="capitalize text-base font-medium text-bs_textColor"
                      >
                        phone
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        placeholder="Phone Number"
                        className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                      />
                    </div>
                    <div className="w-[100%] lg:w-[90%]">
                      <label
                        htmlFor="large-input"
                        className="capitalize text-base font-medium text-bs_textColor"
                      >
                        address line 1
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        placeholder="address line 1"
                        className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                      />
                    </div>
                    <div className="w-[100%] lg:w-[90%]">
                      <label
                        htmlFor="large-input"
                        className="capitalize text-base font-medium text-bs_textColor"
                      >
                        address line 1
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        placeholder="address line 1"
                        className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                      />
                    </div>
                    <div className="country w-[100%] lg:w-[45%]">
                      <label
                        htmlFor="countries"
                        className="block mb-2 text-base font-medium text-gray-900 capitalize"
                      >
                        country
                      </label>
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-200 text-gray-500 text-sm rounded-lg focus:ring-bs_primary focus:border-bs_primary block w-full p-3"
                      >
                        <option selected>Choose country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                    <div className="city w-[100%] lg:w-[45%]">
                      <label
                        htmlFor="large-input"
                        className="capitalize text-base font-medium text-bs_textColor"
                      >
                        city
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        placeholder="City"
                        className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                      />
                    </div>
                    <div className="postCode w-[100%] lg:w-[45%]">
                      <label
                        htmlFor="large-input"
                        className="capitalize text-base font-medium text-bs_textColor"
                      >
                        Post Code
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        placeholder="Post Code"
                        className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                      />
                    </div>
                    <div className="state w-[100%] lg:w-[45%]">
                      <label
                        htmlFor="large-input"
                        className="capitalize text-base font-medium text-bs_textColor"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        placeholder="State"
                        className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                      />
                    </div>
                  </form>
                  <form className="my-8">
                    <label
                      htmlFor="large-input"
                      className="capitalize text-base font-medium text-bs_textColor"
                    >
                      Your Message For Order
                    </label>
                    <textarea
                      name=""
                      id="yourMessage"
                      placeholder="Your Message For Order"
                      rows="6"
                      className="w-full text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2 p-4"
                    ></textarea>
                  </form>
                </div>
              </div>
              <h2 id="accordion-color-heading-2" className="mt-8">
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-5 py-4 font-medium border border-gray-200 focus:ring-1 focus:ring-gray-200 rounded-xl gap-3"
                  data-accordion-target="#accordion-color-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-color-body-2"
                >
                  <span className="capitalize">you shipping address</span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-color-body-2"
                className="hidden"
                aria-labelledby="accordion-color-heading-2"
              >
                <div className="p-6 border border-gray-200">
                  <div className="flex items-center mb-8">
                    <input
                      checked
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-bs_primary bg-gray-100 border-gray-300 rounded-sm focus:ring-bs_primary focus:ring-1"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      My shipping and mailing addresses are the same.
                    </label>
                  </div>
                  <form className="mx-auto flex flex-wrap justify-between gap-5 xl:gap-6">
                    <div className="w-[90%] md:w-[45%]">
                      <label
                        htmlFor="large-input"
                        className="capitalize text-base font-medium text-bs_textColor"
                      >
                        first name
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        placeholder="First Name"
                        className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                      />
                    </div>
                    <div className="w-[90%] md:w-[45%]">
                      <label
                        htmlFor="large-input"
                        className="capitalize text-base font-medium text-bs_textColor"
                      >
                        last name
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        placeholder="Last Name"
                        className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                      />
                    </div>
                    <div className="firstName w-[90%] md:w-[45%]">
                      <label
                        htmlFor="large-input"
                        className="capitalize text-base font-medium text-bs_textColor"
                      >
                        email
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        placeholder="Email Address"
                        className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                      />
                    </div>
                    <div className="lastName w-[90%] md:w-[45%]">
                      <label
                        htmlFor="large-input"
                        className="capitalize text-base font-medium text-bs_textColor"
                      >
                        phone
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        placeholder="Phone Number"
                        className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                      />
                    </div>
                    <div className="w-[100%] lg:w-[90%]">
                      <label
                        htmlFor="large-input"
                        className="capitalize text-base font-medium text-bs_textColor"
                      >
                        address line 1
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        placeholder="address line 1"
                        className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                      />
                    </div>
                    <div className="w-[100%] lg:w-[90%]">
                      <label
                        htmlFor="large-input"
                        className="capitalize text-base font-medium text-bs_textColor"
                      >
                        address line 1
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        placeholder="address line 1"
                        className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                      />
                    </div>
                    <div className="country w-[100%] lg:w-[45%]">
                      <label
                        htmlFor="countries"
                        className="block mb-2 text-base font-medium text-gray-900 capitalize"
                      >
                        country
                      </label>
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-200 text-gray-500 text-sm rounded-lg focus:ring-bs_primary focus:border-bs_primary block w-full p-3"
                      >
                        <option selected>Choose country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                    <div className="city w-[100%] lg:w-[45%]">
                      <label
                        htmlFor="large-input"
                        className="capitalize text-base font-medium text-bs_textColor"
                      >
                        city
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        placeholder="City"
                        className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                      />
                    </div>
                    <div className="postCode w-[100%] lg:w-[45%]">
                      <label
                        htmlFor="large-input"
                        className="capitalize text-base font-medium text-bs_textColor"
                      >
                        Post Code
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        placeholder="Post Code"
                        className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                      />
                    </div>
                    <div className="state w-[100%] lg:w-[45%]">
                      <label
                        htmlFor="large-input"
                        className="capitalize text-base font-medium text-bs_textColor"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        placeholder="State"
                        className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                      />
                    </div>
                  </form>
                  <form className="mt-6">
                    <label
                      htmlFor="large-input"
                      className="capitalize text-base font-medium text-bs_textColor"
                    >
                      Your Message For Order
                    </label>
                    <input
                      type="text"
                      id="large-input"
                      placeholder="Your Message For Order"
                      className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2 h-40"
                    />
                  </form>
                  <hr className="my-6" />
                  <span className="capitalize text-bs_textColor font-semibold ">
                    Choose Shipping Method
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <div className="shippingMethodBox w-[100%] sm:w-[48%] lg:w-[24%] border border-bs_paraGray-1 text-bs_paraGray hover:border-bs_primary py-6 px-3 mt-8 rounded-xl cursor-pointer grid gap-6 lg:gap-3 xl:gap-5 grid-cols-6">
                      <label
                        htmlFor="default-radio-1"
                        className="text-sm font-medium shippingDetails col-span-5"
                      >
                        <span className="text-bs_textColor">Standard</span>
                        <br />
                        <span>Shipping Cost - Free</span>
                        <br />
                        <span>6-7 Days</span>
                      </label>
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="shippingMethod col-span-1 w-4 h-4 text-bs_primary bg-gray-100 border-gray-300 focus:ring-bs_primary"
                      />
                    </div>
                    <div className="shippingMethodBox w-[100%] sm:w-[48%] lg:w-[24%] border border-bs_paraGray-1 text-bs_paraGray hover:border-bs_primary py-6 px-4 mt-8 rounded-xl cursor-pointer grid gap-6 lg:gap-3 xl:gap-5 grid-cols-6">
                      <label
                        htmlFor="default-radio-2"
                        className="text-sm font-medium col-span-5"
                      >
                        <span className="text-bs_textColor">Express</span>
                        <br />
                        <span>Shipping Cost - $20</span>
                        <br />
                        <span>1-2 Days</span>
                      </label>
                      <input
                        id="default-radio-2"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="shippingMethod w-4 h-4 text-bs_primary bg-gray-100 border-gray-300 focus:ring-bs_primary col-span-1"
                      />
                    </div>
                    <div className="shippingMethodBox w-[100%] sm:w-[48%] lg:w-[24%] border border-bs_paraGray-1 text-bs_paraGray hover:border-bs_primary py-6 px-4 mt-8 rounded-xl cursor-pointer grid gap-6 lg:gap-3 xl:gap-5 grid-cols-6">
                      <label
                        htmlFor="default-radio-3"
                        className="text-sm font-medium col-span-5"
                      >
                        <span className="text-bs_textColor">Courier</span>
                        <br />
                        <span>Shipping Cost - $30</span>
                        <br />
                        <span>2-3 Days</span>
                      </label>
                      <input
                        id="default-radio-3"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="shippingMethod w-4 h-4 text-bs_primary bg-gray-100 border-gray-300 focus:ring-bs_primary col-span-1"
                      />
                    </div>
                    <div className="shippingMethodBox w-[100%] sm:w-[48%] lg:w-[24%] border border-bs_paraGray-1 hover:border-bs_primary text-bs_paraGray py-6 px-4 mt-8 rounded-xl cursor-pointer grid gap-6 lg:gap-3 xl:gap-5 grid-cols-6">
                      <label
                        htmlFor="default-radio-4"
                        className="text-sm font-medium col-span-5"
                      >
                        <span className="text-bs_textColor">Fastgo</span>
                        <br />
                        <span>Shipping Cost - $15</span>
                        <br />
                        <span>1-3 Days</span>
                      </label>
                      <input
                        id=" default-radio-4"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="shippingMethod w-4 h-4 text-bs_primary bg-gray-100 border-gray-300 focus:ring-bs_primary col-span-1"
                      />
                    </div>
                  </div>
                  <div className="mt-8 flex gap-2 sm:gap-8">
                    <a
                      href="#"
                      title="previous"
                      className="bg-bs_primary text-bs_white capitalize px-4 py-3 rounded-xl text-sm sm:text-base hover:bg-bs_textColor transition-all ease-in-out delay-150 duration-500"
                    >
                      <i className="fa-solid fa-arrow-left-long mr-2"></i>
                      prevoius
                    </a>
                    <a
                      href="#"
                      title="next"
                      className="bg-bs_primary text-bs_white capitalize px-4 py-3 rounded-xl text-sm sm:text-base hover:bg-bs_textColor transition-all ease-in-out delay-150 duration-500"
                    >
                      next step
                      <i className="fa-solid fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <h2 id="accordion-color-heading-3" className="mt-8">
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-5 py-4 font-medium border border-gray-200 focus:ring-1 focus:ring-blue-200 rounded-xl gap-3"
                  data-accordion-target="#accordion-color-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-color-body-3"
                >
                  <span className="capitalize">you payment info</span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-color-body-3"
                className="hidden"
                aria-labelledby="accordion-color-heading-3"
              >
                <div className="p-5 border border-t-0 border-gray-200">
                  <div className="flex">
                    <div className="w-full bg-white">
                      <div className="grid grid-cols-12 gap-4" id="tabs">
                        <button
                          className="col-span-3 py-2 text-center border border-bs_primary px-2 rounded-xl"
                          data-tab="1"
                        >
                          <input
                            type="checkbox"
                            className="flex rounded-full text-bs_primary border-gray-100"
                          />
                          <div className="flex justify-center gap-2 mb-2">
                            <img
                              src="./images/mastercard.svg"
                              alt="mastercard"
                              className="w-[24%]"
                            />
                            <img
                              src="./images/visa.svg"
                              alt="visa-card"
                              className="w-[24%]"
                            />
                            <img
                              src="./images/amex.svg"
                              alt="amex"
                              className="w-[24%]"
                            />
                            <img
                              src="./images/discover.svg"
                              alt="discover"
                              className="w-[30px]"
                            />
                          </div>
                          <h6 className="text-bs_paraGray capitalize text-sm font-semibold">
                            pay with credit card
                          </h6>
                        </button>
                        <button
                          className="col-span-3 py-2 text-center border border-bs_primary px-2 rounded-xl"
                          data-tab="2"
                        >
                          <input
                            type="checkbox"
                            className="flex rounded-full text-bs_primary border-gray-100"
                          />
                          <div className="flex justify-center gap-2 mb-2">
                            <img
                              src="./images/paypal-2.svg"
                              alt="mastercard"
                              className="w-[90%] h-[30px]"
                            />
                          </div>
                          <h6 className="text-bs_paraGray capitalize text-sm font-semibold">
                            pay with PayPal
                          </h6>
                        </button>
                        <button
                          className="col-span-3 py-2 text-center border border-bs_primary px-2 rounded-xl"
                          data-tab="3"
                        >
                          <input
                            type="checkbox"
                            className="flex rounded-full text-bs_primary border-gray-100"
                          />
                          <div className="flex justify-center gap-2 mb-2">
                            <img
                              src="./images/payoneer.svg"
                              alt="mastercard"
                              className="w-[90%] h-[30px]"
                            />
                          </div>
                          <h6 className="text-bs_paraGray capitalize text-sm font-semibold">
                            pay with Pyoneer
                          </h6>
                        </button>
                        <button
                          className="col-span-3 py-2 text-center border border-bs_primary px-2 rounded-xl"
                          data-tab="4"
                        >
                          <input
                            type="checkbox"
                            className="flex rounded-full text-bs_primary border-gray-100"
                          />
                          <div className="flex justify-center gap-2 mb-2">
                            <img
                              src="./images/cod-3.svg"
                              alt="mastercard"
                              className="w-[90%] h-[30px] mx-auto"
                            />
                          </div>
                          <h6 className="text-bs_paraGray capitalize text-sm font-semibold">
                            cash on delivery
                          </h6>
                        </button>
                      </div>
                      <div
                        className="p-4 mt-6 tab-content peer-checked:block hidden"
                        id="tab-content1"
                      >
                        <form className="mx-auto flex flex-wrap justify-between gap-5 xl:gap-6">
                          <div className="w-[90%] md:w-[45%]">
                            <label
                              for="large-input"
                              className="capitalize text-base font-medium text-bs_textColor"
                            >
                              card holder name
                            </label>
                            <input
                              type="text"
                              id="large-input"
                              placeholder="name on card"
                              className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                            />
                          </div>
                          <div className="w-[90%] md:w-[45%]">
                            <label
                              for="large-input"
                              className="capitalize text-base font-medium text-bs_textColor"
                            >
                              card number
                            </label>
                            <input
                              type="text"
                              id="large-input"
                              placeholder="you card number"
                              className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                            />
                          </div>
                          <div className="firstName w-[90%] md:w-[45%]">
                            <label
                              for="large-input"
                              className="capitalize text-base font-medium text-bs_textColor"
                            >
                              expire date
                            </label>
                            <input
                              type="text"
                              id="large-input"
                              placeholder="expire"
                              className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                            />
                          </div>
                          <div className="lastName w-[90%] md:w-[45%]">
                            <label
                              for="large-input"
                              className="capitalize text-base font-medium text-bs_textColor"
                            >
                              ccv
                            </label>
                            <input
                              type="text"
                              id="large-input"
                              placeholder="ccv"
                              className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                            />
                          </div>
                        </form>
                        <div className="mt-8 flex gap-2 sm:gap-8">
                          <a
                            href="#"
                            title="previous"
                            className="bg-bs_primary text-bs_white capitalize px-4 py-3 rounded-xl text-sm sm:text-base hover:bg-bs_textColor transition-all ease-in-out delay-150 duration-500"
                          >
                            <i className="fa-solid fa-arrow-left-long mr-2"></i>
                            prevoius
                          </a>
                          <a
                            href="#"
                            title="next"
                            className="bg-bs_primary text-bs_white capitalize px-4 py-3 rounded-xl text-sm sm:text-base hover:bg-bs_textColor transition-all ease-in-out delay-150 duration-500"
                          >
                            next step
                            <i className="fa-solid fa-arrow-right ml-2"></i>
                          </a>
                        </div>
                      </div>
                      <div
                        className="p-4 mt-6 tab-content peer-checked:block hidden"
                        id="tab-content2"
                      >
                        <form className="mx-auto flex flex-wrap justify-between gap-5 xl:gap-6">
                          <div className="w-[90%] md:w-[45%]">
                            <label
                              for="large-input"
                              className="capitalize text-base font-medium text-bs_textColor"
                            >
                              email address
                            </label>
                            <input
                              type="text"
                              id="large-input"
                              placeholder="email"
                              className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                            />
                          </div>
                          <div className="w-[90%] md:w-[45%]">
                            <label
                              for="large-input"
                              className="capitalize text-base font-medium text-bs_textColor"
                            >
                              password
                            </label>
                            <input
                              type="text"
                              id="large-input"
                              placeholder="password"
                              className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                            />
                          </div>
                          <a
                            href="#"
                            title="login"
                            className="text-bs_white bg-bs_primary py-3 px-4 rounded-xl hover:bg-bs_textColor transition-all ease-in-out delay-150 duration-500 capitalize"
                          >
                            login account
                            <i className="fa-solid fa-arrow-right  px-1"></i>
                          </a>
                        </form>
                      </div>
                      <div
                        className="p-4 mt-6 tab-content peer-checked:block hidden"
                        id="tab-content3"
                      >
                        <form className="mx-auto flex flex-wrap justify-between gap-5 xl:gap-6">
                          <div className="w-[90%] md:w-[45%]">
                            <label
                              for="large-input"
                              className="capitalize text-base font-medium text-bs_textColor"
                            >
                              email address
                            </label>
                            <input
                              type="text"
                              id="large-input"
                              placeholder="email"
                              className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                            />
                          </div>
                          <div className="w-[90%] md:w-[45%]">
                            <label
                              for="large-input"
                              className="capitalize text-base font-medium text-bs_textColor"
                            >
                              password
                            </label>
                            <input
                              type="text"
                              id="large-input"
                              placeholder="password"
                              className="block w-full p-3 text-bs_textColor border border-gray-200 rounded-lg bg-bs_white text-base focus:ring-bs_primary focus:border-bs_primary mt-2"
                            />
                          </div>
                          <a
                            href="#"
                            title="login"
                            className="text-bs_white bg-bs_primary py-3 px-4 rounded-xl hover:bg-bs_textColor transition-all ease-in-out delay-150 duration-500 capitalize"
                          >
                            login account
                            <i className="fa-solid fa-arrow-right  px-1"></i>
                          </a>
                        </form>
                      </div>
                      <div
                        className="p-4 mt-6 tab-content peer-checked:block hidden"
                        id="tab-content4"
                      >
                        <input
                          type="checkbox"
                          className="rounded-md w-6 h-6 border-gray-300 text-bs_primary focus:ring-0"
                        />
                        <label className="capitalize text-bs_textColor mx-1">
                          cash on delivery
                        </label>
                        <span className="text-bs_paraGray font-semibold block mx-8 mt-2">
                          Please read our{" "}
                          <a href="#" title="terms" className="text-bs_primary">
                            {" "}
                            Terms And Conditions
                          </a>{" "}
                          for cash on delivery.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[430px] col-span-12 md:col-span-4 xl:col-span-3 border border-gray-300 bg-bs_pink rounded-xl py-12 px-6 mt-16 md:mt-0">
            <h6 className="text-bs_textColor capitalize font-semibold pb-4">
              Cart Summary
            </h6>
            <hr className="text-bs_paraGray-1" />
            <table className="mb-16 w-full">
              <tr className="h-12">
                <td className="text-base text-bs_textColor capitalize font-semibold w-[40%]">
                  Sub Total:
                </td>
                <td className="text-bs_paraGray text-base w-[60%] text-end">
                  $4,500.00
                </td>
              </tr>
              <tr className="h-12">
                <td className="text-base text-bs_textColor capitalize font-semibold w-[40%]">
                  discount:
                </td>
                <td className="text-bs_paraGray text-base w-[60%] text-end">
                  $5.00
                </td>
              </tr>
              <tr className="h-12">
                <td className="text-base text-bs_textColor capitalize font-semibold w-[40%]">
                  Shipping:
                </td>
                <td className="text-bs_paraGray text-base w-[60%] text-end">
                  free
                </td>
              </tr>
              <tr className="border-t-[1px] h-12">
                <td className="text-lg text-bs_textColor capitalize font-semibold w-[30%]">
                  total:
                </td>
                <td className="text-bs_primary text-base w-[70%] text-end font-semibold">
                  $4,520.00
                </td>
              </tr>
            </table>
            <a
              href="#"
              title="Checkout"
              className="text-bs_white bg-bs_primary px-3 py-4 rounded-xl hover:bg-bs_textColor transition-all ease-in-out delay-150 duration-500 text-base lg:text-lg capitalize"
            >
              checkout now
              <i className="fa-solid fa-arrow-right-long px-1"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
