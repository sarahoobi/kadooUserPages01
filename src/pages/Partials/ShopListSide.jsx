const ShopListSide = () => {
  return (
    <div className="filterSide col-span-12 lg:col-span-3">
      <div className="searchBox border border-gray-200 rounded-xl p-8">
        <h6 className="capitalize font-semibold text-bs_textColor text-xl">
          search
        </h6>
        <hr className="my-5 text-gray-200" />
        <label className="input">
          <input type="search" required placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-6 h-6 fill-current text-pink-500"
            fill="currentColor"
          >
            <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
          </svg>
        </label>
      </div>
      <div className="category border border-gray-200 rounded-xl p-8 mt-14">
        <h6 className="capitalize font-semibold text-bs_textColor text-xl">
          category
        </h6>
        <hr className="my-5 text-gray-200" />
        <table className="w-[100%]">
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg transition-all ease-linear delay-150 duration-500 hover:text-pink-500 cursor-pointer">
            <td className="w-[90%]">home $ living</td>
            <td className="text-right w-[10%]">(15)</td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg transition-all ease-linear delay-150 duration-500 hover:text-pink-500 cursor-pointer">
            <td className="w-[90%]">garment care</td>
            <td className="text-right w-[10%]">(23)</td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg transition-all ease-linear delay-150 duration-500 hover:text-pink-500 cursor-pointer">
            <td className="w-[90%]">Jewelry $ Accessories</td>
            <td className="text-right w-[10%]">(35)</td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg transition-all ease-linear delay-150 duration-500 hover:text-pink-500 cursor-pointer">
            <td className="w-[90%]">Occasion gifts</td>
            <td className="text-right w-[10%]">(46)</td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg transition-all ease-linear delay-150 duration-500 hover:text-pink-500 cursor-pointer">
            <td className="w-[90%]">office $ Stationery</td>
            <td className="text-right w-[10%]">(39)</td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg transition-all ease-linear delay-150 duration-500 hover:text-pink-500 cursor-pointer">
            <td className="w-[90%]">Personalised gifts</td>
            <td className="text-right w-[10%]">(79)</td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg transition-all ease-linear delay-150 duration-500 hover:text-pink-500 cursor-pointer">
            <td className="w-[90%]">gifts box</td>
            <td className="text-right w-[10%]">(28)</td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg transition-all ease-linear delay-150 duration-500 hover:text-pink-500 cursor-pointer">
            <td className="w-[90%]">others</td>
            <td className="text-right w-[10%]">(25)</td>
          </tr>
        </table>
      </div>
      <div className="brands border border-gray-200 rounded-xl p-8 mt-14">
        <h6 className="capitalize font-semibold text-bs_textColor text-xl">
          brands
        </h6>
        <hr className="my-5 text-gray-200" />
        <table className="w-[100%]">
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg cursor-pointer mb-4">
            <td className="w-[90%]">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="checkbox"
                  className="w-5 h-5 text-bs_primary  border-gray-300 checked:border-bs_primary focus:ring focus:ring-bs_primary/50 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 lg:text-lg text-gray-400 capitalize"
                >
                  tovola
                </label>
              </div>
            </td>
            <td className="text-right w-[10%]">(12)</td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg cursor-pointer mb-4">
            <td className="w-[90%]">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="checkbox"
                  className="w-5 h-5 text-bs_primary  border-gray-300 checked:border-bs_primary focus:ring focus:ring-bs_primary/50 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 lg:text-lg text-gray-400 capitalize"
                >
                  tovola
                </label>
              </div>
            </td>
            <td className="text-right w-[10%]">(12)</td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg cursor-pointer mb-4">
            <td className="w-[90%]">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="checkbox"
                  className="w-5 h-5 text-bs_primary  border-gray-300 checked:border-bs_primary focus:ring focus:ring-bs_primary/50 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 lg:text-lg text-gray-400 capitalize"
                >
                  meinden gifts
                </label>
              </div>
            </td>
            <td className="text-right w-[10%]">(12)</td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg cursor-pointer mb-4">
            <td className="w-[90%]">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="checkbox"
                  className="w-5 h-5 text-bs_primary  border-gray-300 checked:border-bs_primary focus:ring focus:ring-bs_primary/50 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 lg:text-lg text-gray-400 capitalize"
                >
                  sundoy
                </label>
              </div>
            </td>
            <td className="text-right w-[10%]">(12)</td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg transition-all cursor-pointer">
            <td className="w-[90%] mb-4">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="checkbox"
                  className="w-5 h-5 text-bs_primary  border-gray-300 checked:border-bs_primary focus:ring focus:ring-bs_primary/50 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 lg:text-lg text-gray-400 capitalize"
                >
                  sahoo gifts
                </label>
              </div>
            </td>
            <td className="text-right w-[10%]">(12)</td>
          </tr>
        </table>
      </div>
      <div className="pricesRage border border-gray-200 rounded-xl p-8 mt-14">
        <h6 className="capitalize font-semibold text-bs_textColor text-xl">
          price range
        </h6>
        <hr className="my-5 text-gray-200" />

        <label
          htmlFor="default-range"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Default range
        </label>
        <input
          id="default-range"
          type="range"
          value="50"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>
      <div className="sales border border-gray-200 rounded-xl p-8 mt-14">
        <h6 className="capitalize font-semibold text-bs_textColor text-xl">
          sales
        </h6>
        <hr className="my-5 text-gray-200" />
        <table className="w-[100%]">
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg cursor-pointer mb-4">
            <td className="w-[90%]">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="checkbox"
                  className="w-5 h-5 text-bs_primary  border-gray-300 checked:border-bs_primary focus:ring focus:ring-bs_primary/50 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 lg:text-lg text-gray-400 capitalize"
                >
                  on sale
                </label>
              </div>
            </td>
            <td className="text-right w-[10%]">(12)</td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg cursor-pointer mb-4">
            <td className="w-[90%]">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="checkbox"
                  className="w-5 h-5 text-bs_primary  border-gray-300 checked:border-bs_primary focus:ring focus:ring-bs_primary/50 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 lg:text-lg text-gray-400 capitalize"
                >
                  in stock
                </label>
              </div>
            </td>
            <td className="text-right w-[10%]">(12)</td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg cursor-pointer mb-4">
            <td className="w-[90%]">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="checkbox"
                  className="w-5 h-5 text-bs_primary  border-gray-300 checked:border-bs_primary focus:ring focus:ring-bs_primary/50 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 lg:text-lg text-gray-400 capitalize"
                >
                  out of stock
                </label>
              </div>
            </td>
            <td className="text-right w-[10%]">(12)</td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg cursor-pointer mb-4">
            <td className="w-[90%]">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="checkbox"
                  className="w-5 h-5 text-bs_primary  border-gray-300 checked:border-bs_primary focus:ring focus:ring-bs_primary/50 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 lg:text-lg text-gray-400 capitalize"
                >
                  discount
                </label>
              </div>
            </td>
            <td className="text-right w-[10%]">(12)</td>
          </tr>
        </table>
      </div>
      <div className="ratings border border-gray-200 rounded-xl p-8 mt-14">
        <h6 className="capitalize font-semibold text-bs_textColor text-xl">
          ratings
        </h6>
        <hr className="my-5 text-gray-200" />
        <table className="w-[100%]">
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg cursor-pointer mb-4">
            <td className="w-[90%]">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="checkbox"
                  className="w-5 h-5 text-bs_primary  border-gray-300 checked:border-bs_primary focus:ring focus:ring-bs_primary/50 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 lg:text-lg text-bs_primary capitalize"
                >
                  <div className="rating py-1">
                    <div
                      className="mask mask-star bg-pink-500"
                      aria-label="1 star"
                      aria-current="true"
                    ></div>
                    <div
                      className="mask mask-star bg-pink-500"
                      aria-label="2 star"
                    ></div>
                    <div
                      className="mask mask-star bg-pink-300"
                      aria-label="3 star"
                    ></div>
                    <div
                      className="mask mask-star bg-pink-300"
                      aria-label="4 star"
                    ></div>
                    <div
                      className="mask mask-star bg-pink-300"
                      aria-label="5 star"
                    ></div>
                  </div>
                </label>
              </div>
            </td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg cursor-pointer mb-4">
            <td className="w-[90%]">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="checkbox"
                  className="w-5 h-5 text-bs_primary  border-gray-300 checked:border-bs_primary focus:ring focus:ring-bs_primary/50 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 lg:text-lg text-bs_primary capitalize"
                >
                  <div className="rating py-1">
                    <div
                      className="mask mask-star bg-pink-500"
                      aria-label="1 star"
                    ></div>
                    <div
                      className="mask mask-star bg-pink-500"
                      aria-label="2 star"
                      aria-current="true"
                    ></div>
                    <div
                      className="mask mask-star bg-pink-300"
                      aria-label="3 star"
                    ></div>
                    <div
                      className="mask mask-star bg-pink-300"
                      aria-label="4 star"
                    ></div>
                    <div
                      className="mask mask-star bg-pink-300"
                      aria-label="5 star"
                    ></div>
                  </div>
                </label>
              </div>
            </td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg cursor-pointer mb-4">
            <td className="w-[90%]">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="checkbox"
                  className="w-5 h-5 text-bs_primary  border-gray-300 checked:border-bs_primary focus:ring focus:ring-bs_primary/50 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 lg:text-lg text-bs_primary capitalize"
                >
                  <div className="rating py-1">
                    <div
                      className="mask mask-star bg-pink-500"
                      aria-label="1 star"
                    ></div>
                    <div
                      className="mask mask-star bg-pink-500"
                      aria-label="2 star"
                    ></div>
                    <div
                      className="mask mask-star bg-pink-500"
                      aria-label="3 star"
                      aria-current="true"
                    ></div>
                    <div
                      className="mask mask-star bg-pink-300"
                      aria-label="4 star"
                    ></div>
                    <div
                      className="mask mask-star bg-pink-300"
                      aria-label="5 star"
                    ></div>
                  </div>
                </label>
              </div>
            </td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg cursor-pointer mb-4">
            <td className="w-[90%]">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="checkbox"
                  className="w-5 h-5 text-bs_primary  border-gray-300 checked:border-bs_primary focus:ring focus:ring-bs_primary/50 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 lg:text-lg text-bs_primary capitalize"
                >
                  <div className="rating py-1">
                    <div
                      className="mask mask-star bg-pink-500"
                      aria-label="1 star"
                    ></div>
                    <div
                      className="mask mask-star bg-pink-500"
                      aria-label="2 star"
                    ></div>
                    <div
                      className="mask mask-star bg-pink-500"
                      aria-label="3 star"
                    ></div>
                    <div
                      className="mask mask-star bg-pink-500"
                      aria-label="4 star"
                      aria-current="true"
                    ></div>
                    <div
                      className="mask mask-star bg-pink-300"
                      aria-label="5 star"
                    ></div>
                  </div>
                </label>
              </div>
            </td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg cursor-pointer mb-4">
            <td className="w-[90%]">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="checkbox"
                  className="w-5 h-5 text-bs_primary  border-gray-300 checked:border-bs_primary focus:ring focus:ring-bs_primary/50 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 lg:text-lg text-pink-500 capitalize"
                >
                  <div className="rating py-1">
                    <div
                      className="mask mask-star bg-pink-500"
                      aria-label="1 star"
                    ></div>
                    <div
                      className="mask mask-star bg-pink-500"
                      aria-label="2 star"
                    ></div>
                    <div
                      className="mask mask-star bg-pink-500"
                      aria-label="3 star"
                    ></div>
                    <div
                      className="mask mask-star bg-pink-500"
                      aria-label="4 star"
                    ></div>
                    <div
                      className="mask mask-star bg-pink-500"
                      aria-label="5 star"
                      aria-current="true"
                    ></div>
                  </div>
                </label>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="colors border border-gray-200 rounded-xl p-8 mt-14">
        <h6 className="capitalize font-semibold text-bs_textColor text-xl">
          colors
        </h6>
        <hr className="my-5 text-gray-200" />
        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            className="checkbox checkbox-xl rounded-full bg-warning text-base-100"
          />
          <input
            type="checkbox"
            className="checkbox checkbox-xl rounded-full bg-secondary text-base-100"
          />
          <input
            type="checkbox"
            className="checkbox checkbox-xl rounded-full bg-error text-base-100"
          />
          <input
            type="checkbox"
            className="checkbox checkbox-xl rounded-full bg-primary text-base-100"
          />
          <input
            type="checkbox"
            className="checkbox checkbox-xl rounded-full bg-info text-base-100"
          />
        </div>
      </div>
      <div className="sizes border border-gray-200 rounded-xl p-8 mt-14">
        <h6 className="capitalize font-semibold text-bs_textColor text-xl">
          sales
        </h6>
        <hr className="my-5 text-gray-200" />
        <table className="w-[100%]">
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg cursor-pointer mb-4">
            <td className="w-[90%]">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="checkbox"
                  className="w-5 h-5 text-bs_primary  border-gray-300 checked:border-bs_primary focus:ring focus:ring-bs_primary/50 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 lg:text-lg text-gray-400 capitalize"
                >
                  extra small
                </label>
              </div>
            </td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg cursor-pointer mb-4">
            <td className="w-[90%]">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="checkbox"
                  className="w-5 h-5 text-bs_primary  border-gray-300 checked:border-bs_primary focus:ring focus:ring-bs_primary/50 rounded-md"
                />
                <label
                  for="default-checkbox"
                  className="ms-2 lg:text-lg text-gray-400 capitalize"
                >
                  small
                </label>
              </div>
            </td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg cursor-pointer mb-4">
            <td className="w-[90%]">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="checkbox"
                  className="w-5 h-5 text-bs_primary  border-gray-300 checked:border-bs_primary focus:ring focus:ring-bs_primary/50 rounded-md"
                />
                <label
                  for="default-checkbox"
                  className="ms-2 lg:text-lg text-gray-400 capitalize"
                >
                  medium
                </label>
              </div>
            </td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg cursor-pointer mb-4">
            <td className="w-[90%]">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="checkbox"
                  className="w-5 h-5 text-bs_primary  border-gray-300 checked:border-bs_primary focus:ring focus:ring-bs_primary/50 rounded-md"
                />
                <label
                  for="default-checkbox"
                  className="ms-2 lg:text-lg text-gray-400 capitalize"
                >
                  large
                </label>
              </div>
            </td>
          </tr>
          <tr className="text-gray-400 h-12 md:text-base lg:text-lg cursor-pointer mb-4">
            <td className="w-[90%]">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="checkbox"
                  className="w-5 h-5 text-bs_primary  border-gray-300 checked:border-bs_primary focus:ring focus:ring-bs_primary/50 rounded-md"
                />
                <label
                  for="default-checkbox"
                  className="ms-2 lg:text-lg text-gray-400 capitalize"
                >
                  extra large
                </label>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="bg-cover bg-center w-full h-96 rounded-xl mt-14 bg-dark-overlay text-center relative px-10 pt-24 ">
        <span
          className="uppercase text-base-100 after:absolute after:block after:content[('')] after:w-[28%] after:h-[2px] after:left-0 after:right-0 after:mx-auto after:bg-base-100 after:mt-2 
              before:absolute before:block before:contect[''] before:w-[28%] before:h-[2px] before:left-0 before:right-0 before:mx-auto before:bg-bs_white before:mt-[-10px] 
            "
        >
          Get 35% Off
        </span>
        <h2 className="capitalize text-base-100 text-3xl font-semibold my-8">
          New Collection of Gifts Box
        </h2>
        <a
          href="#"
          title="shopNow"
          className="text-base-100 capitalize bg-pink-500 hover:bg-gray-900 transition-colors delay-150 duration-500 rounded-2xl px-4 py-2"
        >
          shop now
        </a>
      </div>
    </div>
  );
};

export default ShopListSide;
