import Breadcrumb from "../components/Breadcrumb.jsx";
import ProfileSide from "./Partials/ProfileSide.jsx";
const OderDetails = () => {
  return (
    <>
      <Breadcrumb title="Messages" />
      <div className="container mx-auto mt-14 grid md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-12 gap-x-4 mb-20">
        <ProfileSide />
        <div className="md:row-span-1 lg:col-span-9 w-full mt-4 lg:mt-0 overflow-x-hidden">
          <div className="border border-gray-200 rounded-xl py-4 px-5 h-fit">
            <div className="flex justify-between items-center ">
              <span className="text-gray-800 font-bold text-sm sm:text-xl">
                Order Details (#28VR5K59){" "}
              </span>
              <button className="flex items-center text-sm sm:text-base p-2 sm:py-3 sm:px-4 bg-pink-500 rounded-xl cursor-pointer hover:bg-gray-900 w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-4 h-4 sm:w-6 sm:h-6 fill-current text-base-100"
                  fill="currentColor"
                >
                  <path d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z" />
                </svg>
                <a
                  href="#"
                  title="orderList"
                  className="text-base-100 pl-1 sm:pl-2"
                >
                  Order List{" "}
                </a>
              </button>
            </div>
            <hr className="text-gray-200 my-6" />
            <div className="w-full overflow-x-auto max-w-full">
              <table className="w-full min-w-[650px] border-separate border-spacing-y-3 text-left">
                <thead>
                  <tr>
                    <th className="text-gray-500 font-semibold pb-4 border-0">
                      Product
                    </th>
                    <th className="text-gray-500 font-semibold pb-4 border-0">
                      Brand
                    </th>
                    <th className="text-gray-500 font-semibold pb-4 border-0">
                      Quantity
                    </th>
                    <th className="text-gray-500 font-semibold pb-4 border-0">
                      Size
                    </th>
                    <th className="text-gray-500 font-semibold pb-4 border-0">
                      Color
                    </th>
                    <th className="text-gray-500 font-semibold pb-4 border-0">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* سطر اول */}
                  <tr>
                    <td className="p-3 flex items-center rounded-l-xl bg-gray-100">
                      <a href="#" title="productInfo" className="shrink-0">
                        <img
                          src="./images/03-special.png"
                          alt="product"
                          className="w-16 sm:w-24 bg-base-100 p-2 rounded-xl"
                        />
                      </a>
                      <div className="px-3 text-gray-900 hover:text-pink-500">
                        <a href="#" title="productName">
                          <span className="font-semibold block py-1">
                            Special Gift Box
                          </span>
                          <span className="font-medium text-xs text-gray-500 block">
                            Item ID: #123456
                          </span>
                        </a>
                      </div>
                    </td>
                    <td className="bg-gray-100 font-medium p-3">Moderno</td>
                    <td className="bg-gray-100 font-medium p-3">20 Pcs</td>
                    <td className="bg-gray-100 font-medium p-3">XXL</td>
                    <td className="bg-gray-100 font-medium p-3">Black</td>
                    <td className="bg-gray-100 font-medium p-3 rounded-r-xl">
                      $150
                    </td>
                  </tr>

                  {/* سطر دوم */}
                  <tr>
                    <td className="p-3 flex items-center rounded-l-xl bg-gray-100">
                      <a href="#" title="productInfo" className="shrink-0">
                        <img
                          src="./images/02-special.png"
                          alt="product"
                          className="w-16 sm:w-24 bg-base-100 p-2 rounded-xl"
                        />
                      </a>
                      <div className="px-3 text-gray-900 hover:text-pink-500">
                        <a href="#" title="productName">
                          <span className="font-semibold block py-1">
                            Special Gift Box
                          </span>
                          <span className="font-medium text-xs text-gray-500 block">
                            Item ID: #123456
                          </span>
                        </a>
                      </div>
                    </td>
                    <td className="bg-gray-100 font-medium p-3">Moderno</td>
                    <td className="bg-gray-100 font-medium p-3">20 Pcs</td>
                    <td className="bg-gray-100 font-medium p-3">XXL</td>
                    <td className="bg-gray-100 font-medium p-3">Black</td>
                    <td className="bg-gray-100 font-medium p-3 rounded-r-xl">
                      $150
                    </td>
                  </tr>

                  {/* سطر سوم */}
                  <tr>
                    <td className="p-3 flex items-center rounded-l-xl bg-gray-100">
                      <a href="#" title="productInfo" className="shrink-0">
                        <img
                          src="./images/01-special.png"
                          alt="product"
                          className="w-16 sm:w-24 bg-base-100 p-2 rounded-xl"
                        />
                      </a>
                      <div className="px-3 text-gray-900 hover:text-pink-500">
                        <a href="#" title="productName">
                          <span className="font-semibold block py-1">
                            Special Gift Box
                          </span>
                          <span className="font-medium text-xs text-gray-500 block">
                            Item ID: #123456
                          </span>
                        </a>
                      </div>
                    </td>
                    <td className="bg-gray-100 font-medium p-3">Moderno</td>
                    <td className="bg-gray-100 font-medium p-3">20 Pcs</td>
                    <td className="bg-gray-100 font-medium p-3">XXL</td>
                    <td className="bg-gray-100 font-medium p-3">Black</td>
                    <td className="bg-gray-100 font-medium p-3 rounded-r-xl">
                      $150
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="md:flex md:justify-between md:gap-x-2 mt-4 md:mt-0">
              <div className="bg-gray-100 rounded-xl px-6 py-5 w-full h-fit">
                <span className="text-gray-900 font-semibold text-lg">
                  Shipping Address
                </span>
                <div className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="w-4 h-4 fill-current text-gray-400 inline-block align-middle"
                    fill="currentColor"
                  >
                    <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" />
                  </svg>
                  <span className="inline-block align-middle text-gray-500">
                    25/B Milford Road, Richison Drive, New York, USA
                  </span>
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl px-6 py-5 w-full mt-4 md:mt-0">
                <span className="text-gray-900 font-semibold text-lg">
                  Order Summery{" "}
                </span>
                <div className="mt-4">
                  <ul className="flex justify-between mb-3">
                    <li className="text-gray-500 mt">Subtotal</li>
                    <li className="text-gray-500">$350.00</li>
                  </ul>
                  <ul className="flex justify-between my-3">
                    <li className="text-gray-500">Shipping</li>
                    <li className="text-gray-500">Free</li>
                  </ul>
                  <ul className="flex justify-between my-3">
                    <li className="text-gray-500">Discount</li>
                    <li className="text-gray-500">$10.00</li>
                  </ul>
                  <ul className="flex justify-between">
                    <li className="text-gray-500">tax</li>
                    <li className="text-gray-500">$20.00</li>
                  </ul>
                  <hr className="text-gray-200 my-4" />
                  <ul className="flex justify-between mb-3">
                    <li className="text-gray-500">Total</li>
                    <li className="text-gray-500">$360.00</li>
                  </ul>
                  <ul className="flex justify-between">
                    <li className="text-gray-500">Paid by Credit/Debit Card</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OderDetails;
