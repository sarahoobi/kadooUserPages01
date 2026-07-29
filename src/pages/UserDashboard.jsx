import Breadcrumb from "../components/Breadcrumb.jsx";
import ProfileSide from "./Partials/ProfileSide.jsx";
const UserDashboard = () => {
  return (
    <>
      <Breadcrumb title="Dashboard" />
      <div className="container mx-auto mt-14 grid md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-12 gap-x-4 mb-20">
        <ProfileSide />
        <div className="md:row-span-1 lg:col-span-9 w-full overflow-x-hidden">
          <div className="border border-gray-200 rounded-xl py-4 px-5 h-fit mt-6 lg:mt-0">
            <span className="text-gray-800 font-bold text-xl">Summary</span>
            <hr className="text-gray-200 my-6" />

            <div className="stats grid grid-cols-12 w-full gap-x-4 grid-flow-row">
              <div className="stat bg-purple-50 px-3 py-8 rounded-xl border border-purple-50 col-span-12 sm:col-span-6  md:col-span-4">
                <div className="stat-figure bg-purple-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="w-16 h-16 fill-current text-base-100 p-2"
                    fill="currentColor"
                  >
                    <path d="M104 112C90.7 112 80 122.7 80 136L80 184C80 197.3 90.7 208 104 208L152 208C165.3 208 176 197.3 176 184L176 136C176 122.7 165.3 112 152 112L104 112zM256 128C238.3 128 224 142.3 224 160C224 177.7 238.3 192 256 192L544 192C561.7 192 576 177.7 576 160C576 142.3 561.7 128 544 128L256 128zM256 288C238.3 288 224 302.3 224 320C224 337.7 238.3 352 256 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L256 288zM256 448C238.3 448 224 462.3 224 480C224 497.7 238.3 512 256 512L544 512C561.7 512 576 497.7 576 480C576 462.3 561.7 448 544 448L256 448zM80 296L80 344C80 357.3 90.7 368 104 368L152 368C165.3 368 176 357.3 176 344L176 296C176 282.7 165.3 272 152 272L104 272C90.7 272 80 282.7 80 296zM104 432C90.7 432 80 442.7 80 456L80 504C80 517.3 90.7 528 104 528L152 528C165.3 528 176 517.3 176 504L176 456C176 442.7 165.3 432 152 432L104 432z" />
                  </svg>
                </div>
                <div className="stat-value text-purple-500">50</div>
                <div className="stat-desc text-purple-500">Pending Orders</div>
              </div>

              <div className="stat bg-green-50 px-3 py-8 rounded-xl border border-green-50 col-span-12 sm:col-span-6 md:col-span-4 mt-4 sm:mt-0">
                <div className="stat-figure bg-green-600 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640 "
                    className="w-16 h-16 fill-current text-base-100 p-2"
                    fill="currentColor"
                  >
                    <path d="M296.5 69.2C311.4 62.3 328.6 62.3 343.5 69.2L562.1 170.2C570.6 174.1 576 182.6 576 192C576 201.4 570.6 209.9 562.1 213.8L343.5 314.8C328.6 321.7 311.4 321.7 296.5 314.8L77.9 213.8C69.4 209.8 64 201.3 64 192C64 182.7 69.4 174.1 77.9 170.2L296.5 69.2zM112.1 282.4L276.4 358.3C304.1 371.1 336 371.1 363.7 358.3L528 282.4L562.1 298.2C570.6 302.1 576 310.6 576 320C576 329.4 570.6 337.9 562.1 341.8L343.5 442.8C328.6 449.7 311.4 449.7 296.5 442.8L77.9 341.8C69.4 337.8 64 329.3 64 320C64 310.7 69.4 302.1 77.9 298.2L112 282.4zM77.9 426.2L112 410.4L276.3 486.3C304 499.1 335.9 499.1 363.6 486.3L527.9 410.4L562 426.2C570.5 430.1 575.9 438.6 575.9 448C575.9 457.4 570.5 465.9 562 469.8L343.4 570.8C328.5 577.7 311.3 577.7 296.4 570.8L77.9 469.8C69.4 465.8 64 457.3 64 448C64 438.7 69.4 430.1 77.9 426.2z" />
                  </svg>
                </div>
                <div className="stat-value text-green-600">250</div>
                <div className="stat-desc text-green-600">
                  Compeleted Orders
                </div>
              </div>

              <div className="stat sm:col-span-6  bg-red-50 px-3 py-8 rounded-xl border border-red-50 col-span-12  md:col-span-4 mt-4 md:mt-0">
                <div className="stat-figure bg-red-600 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="w-16 h-16 fill-current text-base-100 p-2"
                    fill="currentColor"
                  >
                    <path d="M512 176C520.8 176 528 183.2 528 192L528 224L112 224L112 192C112 183.2 119.2 176 128 176L512 176zM528 288L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 288L528 288zM128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192C576 156.7 547.3 128 512 128L128 128zM144 408C144 421.3 154.7 432 168 432L216 432C229.3 432 240 421.3 240 408C240 394.7 229.3 384 216 384L168 384C154.7 384 144 394.7 144 408zM288 408C288 421.3 298.7 432 312 432L376 432C389.3 432 400 421.3 400 408C400 394.7 389.3 384 376 384L312 384C298.7 384 288 394.7 288 408z" />
                  </svg>
                </div>
                <div className="stat-value text-red-600">&15.80k</div>
                <div className="stat-desc text-red-600">My Balance</div>
              </div>
            </div>
          </div>
          <div className="md:row-span-2 lg:col-span-9 w-full">
            <div className="border border-gray-200 rounded-xl py-4 px-5 mt-8">
              <div className="flex justify-between items-center">
                <span className="text-gray-800 font-bold sm:text-xl">
                  Recent Orders{" "}
                </span>
                <button className="flex items-center py-2 px-3 sm:py-3 sm:px-4 bg-pink-500 rounded-xl cursor-pointer hover:bg-gray-900 w-fit">
                  <a href="#" title="View All Orders" className="text-base-100">
                    View All Orders
                  </a>
                </button>
              </div>
              <hr className="text-gray-200 my-4" />
              <div className="w-full max-w-full overflow-x-auto">
                <table className="w-full min-w-[600px] table border-separate border-spacing-y-6 bg-pin-cols">
                  <thead>
                    <tr>
                      <th className="text-gray-500 text-base  sm:w-[20%] border-b-0">
                        #Order No
                      </th>
                      <th className="text-gray-500 text-base  sm:w-[25%] border-b-0">
                        Purchased Date
                      </th>
                      <th className="text-gray-500 text-base sm:w-[10%] border-b-0">
                        Total
                      </th>
                      <th className="text-gray-500 text-base  sm:w-[15%] text-center border-b-0">
                        Status
                      </th>
                      <th className="text-gray-500 text-base sm:w-[10%] border-b-0">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" h-16 ">
                      <th className="text-pink-500 font-medium rounded-tl-xl rounded-bl-xl bg-gray-50 ">
                        #28VR5K59
                      </th>
                      <td className="text-gray-900 text-[15px] font-medium bg-gray-50">
                        August 20, 2024
                      </td>
                      <td className="bg-gray-50">$3,650</td>
                      <td className="text-center bg-gray-50">
                        <span className="bg-purple-100 text-purple-500 font-bold text-xs px-3 py-1 rounded-xl items-center ">
                          Pending
                        </span>
                      </td>
                      <td className="bg-gray-50 rounded-tr-xl rounded-br-xl">
                        <div className="tooltip " data-tip="Details">
                          <div className="tooltip-content bg-pink-500 border border-pink-500">
                            details
                          </div>
                          <button className="btn hover:bg-gray-500 group text-gray-600 hover:text-base-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 640"
                              className="w-6 h-6 fill-current "
                              fill="currentColor"
                            >
                              <path d="M320 144C254.8 144 201.2 173.6 160.1 211.7C121.6 247.5 95 290 81.4 320C95 350 121.6 392.5 160.1 428.3C201.2 466.4 254.8 496 320 496C385.2 496 438.8 466.4 479.9 428.3C518.4 392.5 545 350 558.6 320C545 290 518.4 247.5 479.9 211.7C438.8 173.6 385.2 144 320 144zM127.4 176.6C174.5 132.8 239.2 96 320 96C400.8 96 465.5 132.8 512.6 176.6C559.4 220.1 590.7 272 605.6 307.7C608.9 315.6 608.9 324.4 605.6 332.3C590.7 368 559.4 420 512.6 463.4C465.5 507.1 400.8 544 320 544C239.2 544 174.5 507.2 127.4 463.4C80.6 419.9 49.3 368 34.4 332.3C31.1 324.4 31.1 315.6 34.4 307.7C49.3 272 80.6 220 127.4 176.6zM320 400C364.2 400 400 364.2 400 320C400 290.4 383.9 264.5 360 250.7C358.6 310.4 310.4 358.6 250.7 360C264.5 383.9 290.4 400 320 400zM240.4 311.6C242.9 311.9 245.4 312 248 312C283.3 312 312 283.3 312 248C312 245.4 311.8 242.9 311.6 240.4C274.2 244.3 244.4 274.1 240.5 311.5zM286 196.6C296.8 193.6 308.2 192.1 319.9 192.1C328.7 192.1 337.4 193 345.7 194.7C346 194.8 346.2 194.8 346.5 194.9C404.4 207.1 447.9 258.6 447.9 320.1C447.9 390.8 390.6 448.1 319.9 448.1C258.3 448.1 206.9 404.6 194.7 346.7C192.9 338.1 191.9 329.2 191.9 320.1C191.9 309.1 193.3 298.3 195.9 288.1C196.1 287.4 196.2 286.8 196.4 286.2C208.3 242.8 242.5 208.6 285.9 196.7z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className=" h-16">
                      <th className="text-pink-500 font-medium bg-gray-50 rounded-tl-xl rounded-bl-xl">
                        #28VR5K59
                      </th>
                      <td className="text-gray-900 text-[15px] font-medium bg-gray-50">
                        August 20, 2024
                      </td>
                      <td className="bg-gray-50">$3,650</td>
                      <td className="text-center bg-gray-50">
                        <span className="bg-blue-100 text-info font-bold text-xs px-3 py-1 rounded-xl">
                          Processing
                        </span>
                      </td>
                      <td className="bg-gray-50 rounded-tr-xl rounded-br-xl">
                        <div className="tooltip " data-tip="Details">
                          <div className="tooltip-content bg-pink-500 border border-pink-500">
                            details
                          </div>
                          <button className="btn hover:bg-gray-500 group text-gray-600 hover:text-base-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 640"
                              className="w-6 h-6 fill-current "
                              fill="currentColor"
                            >
                              <path d="M320 144C254.8 144 201.2 173.6 160.1 211.7C121.6 247.5 95 290 81.4 320C95 350 121.6 392.5 160.1 428.3C201.2 466.4 254.8 496 320 496C385.2 496 438.8 466.4 479.9 428.3C518.4 392.5 545 350 558.6 320C545 290 518.4 247.5 479.9 211.7C438.8 173.6 385.2 144 320 144zM127.4 176.6C174.5 132.8 239.2 96 320 96C400.8 96 465.5 132.8 512.6 176.6C559.4 220.1 590.7 272 605.6 307.7C608.9 315.6 608.9 324.4 605.6 332.3C590.7 368 559.4 420 512.6 463.4C465.5 507.1 400.8 544 320 544C239.2 544 174.5 507.2 127.4 463.4C80.6 419.9 49.3 368 34.4 332.3C31.1 324.4 31.1 315.6 34.4 307.7C49.3 272 80.6 220 127.4 176.6zM320 400C364.2 400 400 364.2 400 320C400 290.4 383.9 264.5 360 250.7C358.6 310.4 310.4 358.6 250.7 360C264.5 383.9 290.4 400 320 400zM240.4 311.6C242.9 311.9 245.4 312 248 312C283.3 312 312 283.3 312 248C312 245.4 311.8 242.9 311.6 240.4C274.2 244.3 244.4 274.1 240.5 311.5zM286 196.6C296.8 193.6 308.2 192.1 319.9 192.1C328.7 192.1 337.4 193 345.7 194.7C346 194.8 346.2 194.8 346.5 194.9C404.4 207.1 447.9 258.6 447.9 320.1C447.9 390.8 390.6 448.1 319.9 448.1C258.3 448.1 206.9 404.6 194.7 346.7C192.9 338.1 191.9 329.2 191.9 320.1C191.9 309.1 193.3 298.3 195.9 288.1C196.1 287.4 196.2 286.8 196.4 286.2C208.3 242.8 242.5 208.6 285.9 196.7z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className=" h-16">
                      <th className="text-pink-500 font-medium bg-gray-50 rounded-tl-xl rounded-bl-xl">
                        #28VR5K59
                      </th>
                      <td className="text-gray-900 text-[15px] font-medium bg-gray-50">
                        August 20, 2024
                      </td>
                      <td className="bg-gray-50">$3,650</td>
                      <td className="text-center bg-gray-50">
                        <span className="bg-green-100 text-success font-bold text-xs px-3 py-1 rounded-xl">
                          {" "}
                          Completed
                        </span>
                      </td>
                      <td className="bg-gray-50 rounded-tr-xl rounded-br-xl">
                        <div className="tooltip " data-tip="Details">
                          <div className="tooltip-content bg-pink-500 border border-pink-500">
                            details
                          </div>
                          <button className="btn hover:bg-gray-500 group text-gray-600 hover:text-base-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 640"
                              className="w-6 h-6 fill-current "
                              fill="currentColor"
                            >
                              <path d="M320 144C254.8 144 201.2 173.6 160.1 211.7C121.6 247.5 95 290 81.4 320C95 350 121.6 392.5 160.1 428.3C201.2 466.4 254.8 496 320 496C385.2 496 438.8 466.4 479.9 428.3C518.4 392.5 545 350 558.6 320C545 290 518.4 247.5 479.9 211.7C438.8 173.6 385.2 144 320 144zM127.4 176.6C174.5 132.8 239.2 96 320 96C400.8 96 465.5 132.8 512.6 176.6C559.4 220.1 590.7 272 605.6 307.7C608.9 315.6 608.9 324.4 605.6 332.3C590.7 368 559.4 420 512.6 463.4C465.5 507.1 400.8 544 320 544C239.2 544 174.5 507.2 127.4 463.4C80.6 419.9 49.3 368 34.4 332.3C31.1 324.4 31.1 315.6 34.4 307.7C49.3 272 80.6 220 127.4 176.6zM320 400C364.2 400 400 364.2 400 320C400 290.4 383.9 264.5 360 250.7C358.6 310.4 310.4 358.6 250.7 360C264.5 383.9 290.4 400 320 400zM240.4 311.6C242.9 311.9 245.4 312 248 312C283.3 312 312 283.3 312 248C312 245.4 311.8 242.9 311.6 240.4C274.2 244.3 244.4 274.1 240.5 311.5zM286 196.6C296.8 193.6 308.2 192.1 319.9 192.1C328.7 192.1 337.4 193 345.7 194.7C346 194.8 346.2 194.8 346.5 194.9C404.4 207.1 447.9 258.6 447.9 320.1C447.9 390.8 390.6 448.1 319.9 448.1C258.3 448.1 206.9 404.6 194.7 346.7C192.9 338.1 191.9 329.2 191.9 320.1C191.9 309.1 193.3 298.3 195.9 288.1C196.1 287.4 196.2 286.8 196.4 286.2C208.3 242.8 242.5 208.6 285.9 196.7z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr className="h-16">
                      <th className="text-pink-500 font-medium bg-gray-50 rounded-tl-xl rounded-bl-xl">
                        #28VR5K59
                      </th>
                      <td className="text-gray-900 text-[15px] font-medium bg-gray-50">
                        August 20, 2024
                      </td>
                      <td className="bg-gray-50">$3,650</td>
                      <td className="text-center bg-gray-50">
                        <span className="bg-red-100 text-error font-bold text-xs px-3 py-1 rounded-xl">
                          {" "}
                          Cancelled
                        </span>
                      </td>
                      <td className="bg-gray-50 rounded-br-xl rounded-tr-xl">
                        <div className="tooltip " data-tip="Details">
                          <div className="tooltip-content bg-pink-500 border border-pink-500">
                            details
                          </div>
                          <button className="btn hover:bg-gray-500 group text-gray-600 hover:text-base-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 640"
                              className="w-6 h-6 fill-current "
                              fill="currentColor"
                            >
                              <path d="M320 144C254.8 144 201.2 173.6 160.1 211.7C121.6 247.5 95 290 81.4 320C95 350 121.6 392.5 160.1 428.3C201.2 466.4 254.8 496 320 496C385.2 496 438.8 466.4 479.9 428.3C518.4 392.5 545 350 558.6 320C545 290 518.4 247.5 479.9 211.7C438.8 173.6 385.2 144 320 144zM127.4 176.6C174.5 132.8 239.2 96 320 96C400.8 96 465.5 132.8 512.6 176.6C559.4 220.1 590.7 272 605.6 307.7C608.9 315.6 608.9 324.4 605.6 332.3C590.7 368 559.4 420 512.6 463.4C465.5 507.1 400.8 544 320 544C239.2 544 174.5 507.2 127.4 463.4C80.6 419.9 49.3 368 34.4 332.3C31.1 324.4 31.1 315.6 34.4 307.7C49.3 272 80.6 220 127.4 176.6zM320 400C364.2 400 400 364.2 400 320C400 290.4 383.9 264.5 360 250.7C358.6 310.4 310.4 358.6 250.7 360C264.5 383.9 290.4 400 320 400zM240.4 311.6C242.9 311.9 245.4 312 248 312C283.3 312 312 283.3 312 248C312 245.4 311.8 242.9 311.6 240.4C274.2 244.3 244.4 274.1 240.5 311.5zM286 196.6C296.8 193.6 308.2 192.1 319.9 192.1C328.7 192.1 337.4 193 345.7 194.7C346 194.8 346.2 194.8 346.5 194.9C404.4 207.1 447.9 258.6 447.9 320.1C447.9 390.8 390.6 448.1 319.9 448.1C258.3 448.1 206.9 404.6 194.7 346.7C192.9 338.1 191.9 329.2 191.9 320.1C191.9 309.1 193.3 298.3 195.9 288.1C196.1 287.4 196.2 286.8 196.4 286.2C208.3 242.8 242.5 208.6 285.9 196.7z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr className="h-16">
                      <th className="text-pink-500 font-medium bg-gray-50 rounded-tl-xl rounded-bl-xl">
                        #28VR5K59
                      </th>
                      <td className="text-gray-900 text-[15px] font-medium bg-gray-50">
                        August 20, 2024
                      </td>
                      <td className="bg-gray-50">$3,650</td>
                      <td className="text-center bg-gray-50">
                        <span className="bg-green-100 text-success font-bold text-xs px-3 py-1 rounded-xl ">
                          {" "}
                          Completed
                        </span>
                      </td>
                      <td className="bg-gray-50 rounded-tr-xl rounded-br-xl">
                        <div className="tooltip " data-tip="Details">
                          <div className="tooltip-content bg-pink-500 border border-pink-500">
                            details
                          </div>
                          <button className="btn hover:bg-gray-500 group text-gray-600 hover:text-base-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 640"
                              className="w-6 h-6 fill-current "
                              fill="currentColor"
                            >
                              <path d="M320 144C254.8 144 201.2 173.6 160.1 211.7C121.6 247.5 95 290 81.4 320C95 350 121.6 392.5 160.1 428.3C201.2 466.4 254.8 496 320 496C385.2 496 438.8 466.4 479.9 428.3C518.4 392.5 545 350 558.6 320C545 290 518.4 247.5 479.9 211.7C438.8 173.6 385.2 144 320 144zM127.4 176.6C174.5 132.8 239.2 96 320 96C400.8 96 465.5 132.8 512.6 176.6C559.4 220.1 590.7 272 605.6 307.7C608.9 315.6 608.9 324.4 605.6 332.3C590.7 368 559.4 420 512.6 463.4C465.5 507.1 400.8 544 320 544C239.2 544 174.5 507.2 127.4 463.4C80.6 419.9 49.3 368 34.4 332.3C31.1 324.4 31.1 315.6 34.4 307.7C49.3 272 80.6 220 127.4 176.6zM320 400C364.2 400 400 364.2 400 320C400 290.4 383.9 264.5 360 250.7C358.6 310.4 310.4 358.6 250.7 360C264.5 383.9 290.4 400 320 400zM240.4 311.6C242.9 311.9 245.4 312 248 312C283.3 312 312 283.3 312 248C312 245.4 311.8 242.9 311.6 240.4C274.2 244.3 244.4 274.1 240.5 311.5zM286 196.6C296.8 193.6 308.2 192.1 319.9 192.1C328.7 192.1 337.4 193 345.7 194.7C346 194.8 346.2 194.8 346.5 194.9C404.4 207.1 447.9 258.6 447.9 320.1C447.9 390.8 390.6 448.1 319.9 448.1C258.3 448.1 206.9 404.6 194.7 346.7C192.9 338.1 191.9 329.2 191.9 320.1C191.9 309.1 193.3 298.3 195.9 288.1C196.1 287.4 196.2 286.8 196.4 286.2C208.3 242.8 242.5 208.6 285.9 196.7z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className=" h-16">
                      <th className="text-pink-500 font-medium bg-gray-50 rounded-tl-xl rounded-bl-xl">
                        #28VR5K59
                      </th>
                      <td className="text-gray-900 text-[15px] font-medium bg-gray-50">
                        August 20, 2024
                      </td>
                      <td className="bg-gray-50 ">$3,650</td>
                      <td className="text-center bg-gray-50 ">
                        <span className="bg-green-100 text-success font-bold text-xs px-3 py-1 rounded-xl">
                          {" "}
                          Completed
                        </span>
                      </td>
                      <td className="bg-gray-50 rounded-br-xl rounded-tr-xl">
                        <div className="tooltip " data-tip="Details">
                          <div className="tooltip-content bg-pink-500 border border-pink-500">
                            details
                          </div>
                          <button className="btn hover:bg-gray-500 group text-gray-600 hover:text-base-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 640"
                              className="w-6 h-6 fill-current "
                              fill="currentColor"
                            >
                              <path d="M320 144C254.8 144 201.2 173.6 160.1 211.7C121.6 247.5 95 290 81.4 320C95 350 121.6 392.5 160.1 428.3C201.2 466.4 254.8 496 320 496C385.2 496 438.8 466.4 479.9 428.3C518.4 392.5 545 350 558.6 320C545 290 518.4 247.5 479.9 211.7C438.8 173.6 385.2 144 320 144zM127.4 176.6C174.5 132.8 239.2 96 320 96C400.8 96 465.5 132.8 512.6 176.6C559.4 220.1 590.7 272 605.6 307.7C608.9 315.6 608.9 324.4 605.6 332.3C590.7 368 559.4 420 512.6 463.4C465.5 507.1 400.8 544 320 544C239.2 544 174.5 507.2 127.4 463.4C80.6 419.9 49.3 368 34.4 332.3C31.1 324.4 31.1 315.6 34.4 307.7C49.3 272 80.6 220 127.4 176.6zM320 400C364.2 400 400 364.2 400 320C400 290.4 383.9 264.5 360 250.7C358.6 310.4 310.4 358.6 250.7 360C264.5 383.9 290.4 400 320 400zM240.4 311.6C242.9 311.9 245.4 312 248 312C283.3 312 312 283.3 312 248C312 245.4 311.8 242.9 311.6 240.4C274.2 244.3 244.4 274.1 240.5 311.5zM286 196.6C296.8 193.6 308.2 192.1 319.9 192.1C328.7 192.1 337.4 193 345.7 194.7C346 194.8 346.2 194.8 346.5 194.9C404.4 207.1 447.9 258.6 447.9 320.1C447.9 390.8 390.6 448.1 319.9 448.1C258.3 448.1 206.9 404.6 194.7 346.7C192.9 338.1 191.9 329.2 191.9 320.1C191.9 309.1 193.3 298.3 195.9 288.1C196.1 287.4 196.2 286.8 196.4 286.2C208.3 242.8 242.5 208.6 285.9 196.7z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="h-16">
                      <th className="text-pink-500 font-medium  bg-gray-50 rounded-tl-xl rounded-bl-xl">
                        #28VR5K59
                      </th>
                      <td className="text-gray-900 text-[15px] font-medium bg-gray-50 ">
                        August 20, 2024
                      </td>
                      <td className="bg-gray-50 ">$3,650</td>
                      <td className="text-center bg-gray-50 ">
                        <span className="bg-green-100 text-success font-bold text-xs px-3 py-1 rounded-xl">
                          {" "}
                          Completed
                        </span>
                      </td>
                      <td className="bg-gray-50 rounded-tr-xl rounded-br-xl">
                        <div className="tooltip " data-tip="Details">
                          <div className="tooltip-content bg-pink-500 border border-pink-500">
                            details
                          </div>
                          <button className="btn hover:bg-gray-500 group text-gray-600 hover:text-base-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 640"
                              className="w-6 h-6 fill-current "
                              fill="currentColor"
                            >
                              <path d="M320 144C254.8 144 201.2 173.6 160.1 211.7C121.6 247.5 95 290 81.4 320C95 350 121.6 392.5 160.1 428.3C201.2 466.4 254.8 496 320 496C385.2 496 438.8 466.4 479.9 428.3C518.4 392.5 545 350 558.6 320C545 290 518.4 247.5 479.9 211.7C438.8 173.6 385.2 144 320 144zM127.4 176.6C174.5 132.8 239.2 96 320 96C400.8 96 465.5 132.8 512.6 176.6C559.4 220.1 590.7 272 605.6 307.7C608.9 315.6 608.9 324.4 605.6 332.3C590.7 368 559.4 420 512.6 463.4C465.5 507.1 400.8 544 320 544C239.2 544 174.5 507.2 127.4 463.4C80.6 419.9 49.3 368 34.4 332.3C31.1 324.4 31.1 315.6 34.4 307.7C49.3 272 80.6 220 127.4 176.6zM320 400C364.2 400 400 364.2 400 320C400 290.4 383.9 264.5 360 250.7C358.6 310.4 310.4 358.6 250.7 360C264.5 383.9 290.4 400 320 400zM240.4 311.6C242.9 311.9 245.4 312 248 312C283.3 312 312 283.3 312 248C312 245.4 311.8 242.9 311.6 240.4C274.2 244.3 244.4 274.1 240.5 311.5zM286 196.6C296.8 193.6 308.2 192.1 319.9 192.1C328.7 192.1 337.4 193 345.7 194.7C346 194.8 346.2 194.8 346.5 194.9C404.4 207.1 447.9 258.6 447.9 320.1C447.9 390.8 390.6 448.1 319.9 448.1C258.3 448.1 206.9 404.6 194.7 346.7C192.9 338.1 191.9 329.2 191.9 320.1C191.9 309.1 193.3 298.3 195.9 288.1C196.1 287.4 196.2 286.8 196.4 286.2C208.3 242.8 242.5 208.6 285.9 196.7z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserDashboard;
