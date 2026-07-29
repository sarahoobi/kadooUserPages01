const Header = () => {
  return (
    // bg-base ها باید اول تعریف بشن تو tailwind یا daisy
    <header className="sticky top-0 z-50 w-full bg-base-100">
      <div id="top" className="bg-pink-100 py-2">
        <div className="container mx-auto flex flex-col gap-y-3 text-center text-sm font-semibold sm:flex-row sm:items-center sm:justify-between">
          <div className="support flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#"
              title="email-icon"
              className="flex items-center justify-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="mini-icon"
              >
                <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" />
              </svg>
              <span className="hover:text-pink-500">info@Kadooyab.com</span>
            </a>
            <a
              href="#"
              title="phone-number"
              className="flex items-center justify-center gap-1"
            >
              <svg
                className="mini-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 80C141.1 80 48 173.1 48 288l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 288C0 146.6 114.6 32 256 32s256 114.6 256 256l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104c0-114.9-93.1-208-208-208zM80 352c0-35.3 28.7-64 64-64l16 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-64zm288-64c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l16 0z" />
              </svg>
              <span className="font-bold text-xs hover:text-pink-500">
                021 28 42 68 73
              </span>
            </a>
            <a
              href="#"
              title="help"
              className="hidden items-center gap-1 lg:flex"
            >
              <svg
                className="mini-icon hover:fill-bs_black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
              </svg>
              <span className=" align-middle hover:text-pink-500">
                Need Help?
              </span>
            </a>
          </div>
          <ul className="top-header-right-side flex my-4 md:my-0 justify-center md:justify-end">
            <li className=" hover:text-pink-500 px-2">
              <a href="#" title="drop-down">
                <svg
                  className="mini-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
                <span className="align-middle px-1">Login</span>
              </a>
            </li>
            <li className=" hover:text-pink-500 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-4 h-4 text-pink-500 fill-current hover:text-gray-900"
                fill="currentColor"
              >
                <path d="M296 88C296 74.7 306.7 64 320 64C333.3 64 344 74.7 344 88L344 128L400 128C417.7 128 432 142.3 432 160C432 177.7 417.7 192 400 192L285.1 192C260.2 192 240 212.2 240 237.1C240 259.6 256.5 278.6 278.7 281.8L370.3 294.9C424.1 302.6 464 348.6 464 402.9C464 463.2 415.1 512 354.9 512L344 512L344 552C344 565.3 333.3 576 320 576C306.7 576 296 565.3 296 552L296 512L224 512C206.3 512 192 497.7 192 480C192 462.3 206.3 448 224 448L354.9 448C379.8 448 400 427.8 400 402.9C400 380.4 383.5 361.4 361.3 358.2L269.7 345.1C215.9 337.5 176 291.4 176 237.1C176 176.9 224.9 128 285.1 128L296 128L296 88z" />
              </svg>
              <a href="#" title="drop-down" className="flex group">
                <span className="align-middle">USD</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-3 h-3 text-gray-900 fill-current group-hover:text-pink-500"
                  fill="currentColor"
                >
                  <path d="M160 352C147.1 352 135.4 359.8 130.4 371.8C125.4 383.8 128.2 397.5 137.4 406.6L297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C511.9 397.4 514.6 383.7 509.6 371.7C504.6 359.7 492.9 352 480 352L160 352z" />
                </svg>
              </a>
            </li>
            <li className="hover:text-pink-500 px-2 flex items-center">
              <a href="#" title="drop-down" className="flex group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-4 h-4 text-pink-500 fill-current hover:text-gray-900"
                  fill="currentColor"
                >
                  <path d="M119.7 263.7L150.6 294.6C156.6 300.6 164.7 304 173.2 304L194.7 304C203.2 304 211.3 307.4 217.3 313.4L246.6 342.7C252.6 348.7 256 356.8 256 365.3L256 402.8C256 411.3 259.4 419.4 265.4 425.4L278.7 438.7C284.7 444.7 288.1 452.8 288.1 461.3L288.1 480C288.1 497.7 302.4 512 320.1 512C337.8 512 352.1 497.7 352.1 480L352.1 477.3C352.1 468.8 355.5 460.7 361.5 454.7L406.8 409.4C412.8 403.4 416.2 395.3 416.2 386.8L416.2 352.1C416.2 334.4 401.9 320.1 384.2 320.1L301.5 320.1C293 320.1 284.9 316.7 278.9 310.7L262.9 294.7C258.7 290.5 256.3 284.7 256.3 278.7C256.3 266.2 266.4 256.1 278.9 256.1L313.6 256.1C326.1 256.1 336.2 246 336.2 233.5C336.2 227.5 333.8 221.7 329.6 217.5L309.9 197.8C306 194 304 189.1 304 184C304 178.9 306 174 309.7 170.3L327 153C332.8 147.2 336.1 139.3 336.1 131.1C336.1 123.9 333.7 117.4 329.7 112.2C326.5 112.1 323.3 112 320.1 112C224.7 112 144.4 176.2 119.8 263.7zM528 320C528 285.4 519.6 252.8 504.6 224.2C498.2 225.1 491.9 228.1 486.7 233.3L473.3 246.7C467.3 252.7 463.9 260.8 463.9 269.3L463.9 304C463.9 321.7 478.2 336 495.9 336L520 336C522.5 336 525 335.7 527.3 335.2C527.7 330.2 527.8 325.1 527.8 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z" />
                </svg>
                <span className="align-middle px-1">EN</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-3 h-3 text-gray-900 fill-current group-hover:text-pink-500"
                  fill="currentColor"
                >
                  <path d="M160 352C147.1 352 135.4 359.8 130.4 371.8C125.4 383.8 128.2 397.5 137.4 406.6L297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C511.9 397.4 514.6 383.7 509.6 371.7C504.6 359.7 492.9 352 480 352L160 352z" />
                </svg>
              </a>
            </li>
            <li className="hidden md:flex md:mx-1">
              <span className="md:px-1 lg:px-2">Follow Us:</span>
              <a href="#" title="facebook-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-5 h-5 text-pink-500 fill-current hover:text-gray-900"
                  fill="currentColor"
                >
                  <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" />
                </svg>
              </a>
            </li>
            <li className="hidden md:block md:mx-1">
              <a href="#" title="instagram-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-5 h-5 text-pink-500 fill-current hover:text-gray-900"
                  fill="currentColor"
                >
                  <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                </svg>
              </a>
            </li>
            <li className="hidden md:block md:mx-1">
              <a href="#" title="twitter-icon mini-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-5 h-5 text-pink-500 fill-current hover:text-gray-900"
                  fill="currentColor"
                >
                  <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
                </svg>
              </a>
            </li>
            <li className="hidden md:block md:ml-1">
              <a href="#" title="linkedin-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-5 h-5 text-pink-500 fill-current hover:text-gray-900"
                  fill="currentColor"
                >
                  <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <nav className=" container mx-auto border-gray-200 border-b py-6">
        {/* mega menu -------- */}
        <div className="flex align-middle justify-center md:justify-between">
          <a href="/" title="logo">
            <img
              src="./images/logo-pink.png"
              alt="logo"
              className="w-[120px] sm:w-[200px]"
            />
          </a>
          <ul className="flex items-center lg:text-base lg:font-semibold text-center relative">
            <li className="hidden lg:block cursor-pointer dropdown dropdown-bottom">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-transparent border-none text-base"
              >
                Home{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-4 h-4"
                >
                  <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 shadow-sm"
              >
                <li>
                  <a href="#" title="homeDemo01">
                    Home Demo 01
                  </a>
                </li>
                <li>
                  <a href="#" title="homeDemo02">
                    Home Demo 02
                  </a>
                </li>
                <li>
                  <a href="#" title="homeDemo03">
                    Home Demo 03
                  </a>
                </li>
              </ul>
            </li>
            <li className="hidden lg:block dropdown dropdown-center cursor-pointer">
              <div
                tabIndex={0}
                role="button"
                className="btn border-none bg-transparent text-base"
              >
                All Category{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-4 h-4"
                >
                  <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                </svg>
              </div>
              {/* <div
                tabIndex="-1"
                className=" dropdown-content menu lg:w-[1000px] xl:w-[1250px] bg-base-100 rounded-box z-1 shadow-lg grid grid-cols-12 lg:gap-x-14 xl:gap-x-20 py-6 px-4 absolute lg:-right-43 xl:-right-30"
              >
                <ul className="xl:px-2 col-span-2">
                  <li className="font-semibold text-base py-2">Category</li>
                  <li>
                    <a href="#" title="giftbox" className="font-medium">
                      Gift Box
                    </a>
                  </li>
                  <li>
                    <a href="#" title="personalised" className="font-medium">
                      Personalised Gift{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Home" className="font-medium">
                      Home & Living{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="garment" className="font-medium">
                      Garment Care{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="jewerly" className="font-medium">
                      Jewerly & Accessories{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="ocasion" className="font-medium">
                      Ocasion Gifts{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="office" className="font-medium">
                      Office & Stationery{" "}
                    </a>
                  </li>
                </ul>
                <ul className="xl:px-2 col-span-2">
                  <li className="font-semibold text-base py-2">Category</li>
                  <li>
                    <a href="#" title="giftbox" className="font-medium">
                      Gift Box
                    </a>
                  </li>
                  <li>
                    <a href="#" title="personalised" className="font-medium">
                      Personalised Gift{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Home" className="font-medium">
                      Home & Living{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="garment" className="font-medium">
                      Garment Care{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="jewerly" className="font-medium">
                      Jewerly & Accessories{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="ocasion" className="font-medium">
                      Ocasion Gifts{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="office" className="font-medium">
                      Office & Stationery{" "}
                    </a>
                  </li>
                </ul>
                <ul className="xl:px-2 col-span-2">
                  <li className="font-semibold text-base py-2">Category</li>
                  <li>
                    <a href="#" title="giftbox" className="font-medium">
                      Gift Box
                    </a>
                  </li>
                  <li>
                    <a href="#" title="personalised" className="font-medium">
                      Personalised Gift{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Home" className="font-medium">
                      Home & Living{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="garment" className="font-medium">
                      Garment Care{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="jewerly" className="font-medium">
                      Jewerly & Accessories{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="ocasion" className="font-medium">
                      Ocasion Gifts{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="office" className="font-medium">
                      Office & Stationery{" "}
                    </a>
                  </li>
                </ul>
                <ul className="xl:px-2 col-span-2">
                  <li className="font-semibold text-base py-2">Category</li>
                  <li>
                    <a href="#" title="giftbox" className="font-medium">
                      Gift Box
                    </a>
                  </li>
                  <li>
                    <a href="#" title="personalised" className="font-medium">
                      Personalised Gift{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Home" className="font-medium">
                      Home & Living{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="garment" className="font-medium">
                      Garment Care{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="jewerly" className="font-medium">
                      Jewerly & Accessories{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="ocasion" className="font-medium">
                      Ocasion Gifts{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="office" className="font-medium">
                      Office & Stationery{" "}
                    </a>
                  </li>
                </ul>
                <img
                  src="./src/assets/images/mega-menu-banner.jpg"
                  alt="mega-menu-banner"
                  className="w-[300px] h-[180px] xl:w-[400px] xl:h-[280px] col-span-4"
                />
              </div> */}
            </li>
            <li className="hidden lg:block btn border-none bg-transparent text-base cursor-pointer">
              <a href="#" title="about" className="block my-auto py-2">
                About
              </a>
            </li>
            <li className="hidden lg:block cursor-pointer dropdown dropdown-bottom">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-transparent border-none text-base"
              >
                Pages{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-4 h-4"
                >
                  <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 shadow-sm"
              >
                <li>
                  <a href="#" title="AboutUs">
                    About Us{" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="homeDemo02">
                    Brands{" "}
                  </a>
                </li>
                <li className="dropdown dropdown-right dropdown-center mr-3">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn border-none bg-transparent pl-3 flex justify-between"
                  >
                    <span>category </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-4 h-4"
                    >
                      <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                    </svg>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 shadow-sm"
                  >
                    <li>
                      <a href="#" title="category01">
                        Category01
                      </a>
                    </li>
                    <li>
                      <a href="#" title="category01">
                        Category02
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-right dropdown-center mr-3">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn border-none bg-transparent pl-3 flex justify-between"
                  >
                    <span>Authentication</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-4 h-4"
                    >
                      <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                    </svg>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 shadow-sm"
                  >
                    <li>
                      <a href="#" title="login">
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="#" title="register">
                        Register
                      </a>
                    </li>
                    <li>
                      <a href="#" title="pass">
                        Forgot Password
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-right dropdown-center mr-3">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn border-none bg-transparent pl-3 flex justify-between"
                  >
                    <span>Extra Pages</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-4 h-4"
                    >
                      <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                    </svg>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 shadow-sm"
                  >
                    <li>
                      <a href="#" title="comming">
                        Coming Soon
                      </a>
                    </li>
                    <li>
                      <a href="#" title="return">
                        Return Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Terms">
                        Terms Of Service{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" title="privacy">
                        Privacy Policy{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Mail">
                        Mail Succes{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" title="affiliate">
                    Affiliate{" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="gallery">
                    Our Gallery{" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="contact">
                    Contact Us{" "}
                  </a>
                </li>
                <li>
                  <a href="/help" title="help">
                    Help{" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="invoices">
                    Invoices{" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="faq">
                    Faq{" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="testimonial">
                    Testimonial{" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="error">
                    Eror 404{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="hidden lg:block  cursor-pointer dropdown dropdown-bottom">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-transparent border-none text-base"
              >
                Account{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-4 h-4"
                >
                  <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 shadow-sm"
              >
                <li>
                  <a href="/userdash" title="Dashboard">
                    Dashboard{" "}
                  </a>
                </li>
                <li>
                  <a href="/myprofile" title="MyProfile">
                    My Profile{" "}
                  </a>
                </li>
                <li className="dropdown dropdown-right dropdown-center mr-3">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn border-none bg-transparent pl-3 flex justify-between"
                  >
                    <span>Orders</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-4 h-4"
                    >
                      <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                    </svg>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 shadow-sm"
                  >
                    <li>
                      <a href="#" title="list">
                        Orders List
                      </a>
                    </li>
                    <li>
                      <a href="/oderdetails" title="detail">
                        Order Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" title="wishlist">
                    My Wishlist{" "}
                  </a>
                </li>
                <li className="dropdown dropdown-right dropdown-center mr-3">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn border-none bg-transparent pl-3 flex justify-between"
                  >
                    <span>Address</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-4 h-4"
                    >
                      <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                    </svg>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 shadow-sm"
                  >
                    <li>
                      <a href="#" title="Addlist">
                        Address List
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Addaddress">
                        Add Address
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-right dropdown-center mr-3">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn border-none bg-transparent pl-3 flex justify-between"
                  >
                    <span>Soppurt Tickets</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-4 h-4"
                    >
                      <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                    </svg>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 shadow-sm"
                  >
                    <li>
                      <a href="#" title="suppotticket">
                        Support Tickets{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" title="ticketdetails">
                        Ticket Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" title="track">
                    Track My Order{" "}
                  </a>
                </li>
                <li className="dropdown dropdown-right dropdown-center mr-3">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn border-none bg-transparent pl-3 flex justify-between"
                  >
                    <span>Payment Methods</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-4 h-4"
                    >
                      <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                    </svg>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 shadow-sm"
                  >
                    <li>
                      <a href="#" title="methods">
                        Payment Methods{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Addpayment">
                        Add Payment
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" title="noti">
                    Notification{" "}
                  </a>
                </li>
                <li>
                  <a href="/usermessage" title="Massages">
                    Messages{" "}
                  </a>
                </li>
                <li>
                  <a href="/usersetting" title="Setting">
                    Setting{" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="invoices">
                    Invoices{" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="faq">
                    Faq{" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="testimonial">
                    Testimonial{" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="error">
                    Eror 404{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="hidden lg:block  cursor-pointer dropdown dropdown-bottom">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-transparent border-none text-base"
              >
                Shop{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-4 h-4"
                >
                  <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 shadow-sm"
              >
                <li className="dropdown dropdown-right dropdown-center mr-3">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn border-none bg-transparent pl-3 flex justify-between"
                  >
                    <span>Shop Grid</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-4 h-4"
                    >
                      <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                    </svg>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 shadow-sm"
                  >
                    <li>
                      <a href="#" title="ShopGrid01">
                        Shop Grid One
                      </a>
                    </li>
                    <li>
                      <a href="#" title="ShopGridTwo">
                        Shop Grid Two{" "}
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown dropdown-right dropdown-center mr-3">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn border-none bg-transparent pl-3 flex justify-between"
                  >
                    <span>Shop List</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-4 h-4"
                    >
                      <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                    </svg>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 shadow-sm"
                  >
                    <li>
                      <a href="/shop" title="ShopList01">
                        Shop List{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" title="ShopList02">
                        Shop List Two{" "}
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" title="ShopSearch">
                    Shop Search{" "}
                  </a>
                </li>

                <li>
                  <a href="#" title="ShopCart">
                    Shop Cart{" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="Checkout">
                    Checkout{" "}
                  </a>
                </li>
                <li>
                  <a href="/checkout-complete" title="CheckoutCom">
                    Checkout Complete{" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="ShopSingle">
                    Shop Single{" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="faq">
                    Faq{" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="ShopCompare">
                    Shop Compare{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="hidden lg:block  cursor-pointer dropdown dropdown-bottom">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-transparent border-none text-base"
              >
                Blog{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-4 h-4"
                >
                  <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 shadow-sm"
              >
                <li className="dropdown dropdown-right dropdown-center mr-3">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn border-none bg-transparent pl-3 flex justify-between"
                  >
                    <a href="#" title="bloggrid">
                      Blog Grid{" "}
                    </a>
                  </div>
                </li>
                <li>
                  <a href="#" title="bloggridside">
                    Blog Grid Sidebar{" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="blogSingle">
                    Blog Single{" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="blogsingleside">
                    Blog Single Sidebar{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="hidden lg:block  cursor-pointer">
              <a
                href="#"
                title="Contact"
                className=" btn border-none bg-transparent text-base xl:pr-6 py-3"
              >
                Contact
              </a>
            </li>
          </ul>
          <ul className="flex items-center">
            <li className="px-2">
              <a href="#" title="search">
                <svg
                  className="nav-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </a>
            </li>
            <li className="px-2">
              <a href="#" title="favourite" className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-6 h-6 text-pink-500 fill-current"
                  fill="currentColor"
                >
                  <path d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z" />
                </svg>
                <div className="bg-pink-500 bottom-6 left-3 w-4 h-4 absolute flex justify-center items-center rounded-full">
                  <span className="text-neutral-50 text-xs font-medium">
                    {" "}
                    2
                  </span>
                </div>
              </a>
            </li>
            <li className="px-2">
              <a href="#" title="shop-cart" className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-6 h-6 text-pink-500 fill-current"
                  fill="currentColor"
                >
                  <path d="M256 144C256 108.7 284.7 80 320 80C355.3 80 384 108.7 384 144L384 192L256 192L256 144zM208 192L144 192C117.5 192 96 213.5 96 240L96 448C96 501 139 544 192 544L448 544C501 544 544 501 544 448L544 240C544 213.5 522.5 192 496 192L432 192L432 144C432 82.1 381.9 32 320 32C258.1 32 208 82.1 208 144L208 192zM232 240C245.3 240 256 250.7 256 264C256 277.3 245.3 288 232 288C218.7 288 208 277.3 208 264C208 250.7 218.7 240 232 240zM384 264C384 250.7 394.7 240 408 240C421.3 240 432 250.7 432 264C432 277.3 421.3 288 408 288C394.7 288 384 277.3 384 264z" />
                </svg>
                <div className="bg-pink-500 bottom-6 left-3 w-4 h-4 absolute flex justify-center items-center rounded-full">
                  <span className="text-xs text-neutral-50 font-medium">5</span>
                </div>
              </a>
            </li>
          </ul>
          {/* menu-drawer---- */}

          <ul className="lg:hidden ">
            <li className="drawer">
              <input
                id="my-drawer-1"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer-1"
                  className="btn drawer-button border-none bg-[#ffffff]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="w-6 h-6 text-pink-500 fill-current"
                    fill="currentColor"
                  >
                    <path d="M64 160C64 142.3 78.3 128 96 128L480 128C497.7 128 512 142.3 512 160C512 177.7 497.7 192 480 192L96 192C78.3 192 64 177.7 64 160zM128 320C128 302.3 142.3 288 160 288L544 288C561.7 288 576 302.3 576 320C576 337.7 561.7 352 544 352L160 352C142.3 352 128 337.7 128 320zM512 480C512 497.7 497.7 512 480 512L96 512C78.3 512 64 497.7 64 480C64 462.3 78.3 448 96 448L480 448C497.7 448 512 462.3 512 480z" />
                  </svg>{" "}
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-1"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-neutral-50 min-h-full w-80 px-2">
                  <a href="./home" title="home">
                    <img
                      src="./images/logo-pink.png"
                      alt="logo"
                      className="w-[250px] h-auto mx-auto"
                    />
                  </a>
                  <li>
                    <a className="bg-neutral-50">
                      <div tabIndex={0} className="collapse">
                        <div className="collapse-title font-semibold flex">
                          <span>Home</span>{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            className="w-6 h-6"
                          >
                            <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                          </svg>
                        </div>
                        <div className="collapse-content text-sm">
                          <ul>
                            <li>
                              <a href="#" title="homedemo01">
                                Home Demo01
                              </a>
                            </li>
                            <li>
                              <a href="#" title="homedemo02">
                                Home Demo02
                              </a>
                            </li>
                            <li>
                              <a href="#" title="homedemo03">
                                Home Demo03
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="bg-neutral-50">
                      <div tabIndex={0} className="collapse">
                        <div className="collapse-title font-semibold flex">
                          <span>All Categories</span>{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            className="w-6 h-6"
                          >
                            <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                          </svg>
                        </div>
                        <div className="collapse-content text-sm">
                          <ul>
                            <li className="font-bold text-lg">Category01</li>
                            <li>
                              <a href="#" title="GiftBox">
                                Gift Box
                              </a>
                            </li>
                            <li>
                              <a href="#" title="PersonalizedGift">
                                Personalized Gift
                              </a>
                            </li>
                            <li>
                              <a href="#" title="Home&Living">
                                Home & Living
                              </a>
                            </li>
                            <li>
                              <a href="#" title="Home&Living">
                                Home & Living
                              </a>
                            </li>
                            <li>
                              <a href="#" title="Home&Living">
                                Home & Living
                              </a>
                            </li>
                            <li>
                              <a href="#" title="Home&Living">
                                Home & Living
                              </a>
                            </li>
                            <li className="font-bold text-lg mt-2">
                              Category02
                            </li>
                            <li>
                              <a href="#" title="Home&Living">
                                Home & Living
                              </a>
                            </li>
                            <li>
                              <a href="#" title="Home&Living">
                                Home & Living
                              </a>
                            </li>
                            <li>
                              <a href="#" title="Home&Living">
                                Home & Living
                              </a>
                            </li>
                            <li>
                              <a href="#" title="Home&Living">
                                Home & Living
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="pl-4">
                    <a className="font-semibold bg-neutral-50">
                      <span>About</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a className="bg-neutral-50">
                      <div tabIndex={0} className="collapse">
                        <div className="collapse-title font-semibold flex">
                          <span>Pages</span>{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            className="w-6 h-6"
                          >
                            <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                          </svg>
                        </div>
                        <ul className="collapse-content text-sm">
                          <li>
                            <a href="#" title="About Us">
                              About Us{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Brands">
                              Brands{" "}
                            </a>
                          </li>
                          <li tabIndex={0} className="collapse">
                            <a href="#" title="category" className="flex">
                              Category{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                className="w-4 h-4"
                              >
                                <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                              </svg>
                            </a>
                            <ul className="collapse-content text-sm">
                              <li>
                                <a href="#" title="category01">
                                  category01
                                </a>
                              </li>
                              <li>
                                <a href="#" title="category01">
                                  category02
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li tabIndex={0} className="collapse">
                            <a href="#" title="Authenticaion" className="flex">
                              Authenticaion{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                className="w-4 h-4"
                              >
                                <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                              </svg>
                            </a>
                            <ul className="collapse-content text-sm">
                              <li>
                                <a href="#" title="login">
                                  Login
                                </a>
                              </li>
                              <li>
                                <a href="#" title="Register">
                                  Register
                                </a>
                              </li>
                              <li>
                                <a href="#" title="forgotpassword">
                                  Forgot Password
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li tabIndex={0} className="collapse">
                            <a href="#" title="ExtraPages" className="flex">
                              Extra Pages{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                className="w-4 h-4"
                              >
                                <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                              </svg>
                            </a>
                            <ul className="collapse-content text-sm">
                              <li>
                                <a href="#" title="commingsoon">
                                  Comming Soon
                                </a>
                              </li>
                              <li>
                                <a href="#" title="returnPolicy">
                                  Return Policy
                                </a>
                              </li>
                              <li>
                                <a href="#" title="Service">
                                  Terms Of Service{" "}
                                </a>
                              </li>
                              <li>
                                <a href="#" title="privacy">
                                  Privacy Policy{" "}
                                </a>
                              </li>
                              <li>
                                <a href="#" title="Mail">
                                  Mail Success{" "}
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#" title="OurTeam">
                              Our Team{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Affiliate">
                              Affiliate{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#" title="gallery">
                              Our Gallery{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#" title="contact">
                              Contact Us{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Help">
                              Help{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#" title="invoices">
                              Invoices{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#" title="faq">
                              Faq{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#" title="testimonials">
                              Testimonials{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#" title="404">
                              404 Error{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="bg-neutral-50" href="#" title="Account">
                      <div tabIndex={0} className="collapse">
                        <div className="collapse-title font-semibold flex">
                          <span>Account</span>{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            className="w-6 h-6"
                          >
                            <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                          </svg>
                        </div>
                        <ul className="collapse-content text-sm">
                          <li>
                            <a href="/userdash" title="Dashboard">
                              Dashboard
                            </a>
                          </li>
                          <li>
                            <a href="/myprofile" title="profile">
                              My Profile{" "}
                            </a>
                          </li>
                          <li tabIndex={0} className="collapse flex">
                            <a>
                              Orders
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                className="w-4 h-4"
                              >
                                <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                              </svg>
                            </a>
                            <ul className="collapse-content text-sm">
                              <li>
                                <a href="#" title="orderList">
                                  Order List
                                </a>
                              </li>
                              <li>
                                <a href="/oderdetails" title="orderDetails">
                                  Order Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#" title="wishlist">
                              My Wishlist
                            </a>
                          </li>
                          <li tabIndex={0} className="collapse flex">
                            <a>
                              Address
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                className="w-4 h-4"
                              >
                                <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                              </svg>
                            </a>
                            <ul className="collapse-content text-sm">
                              <li>
                                <a href="#" title="addressList">
                                  Address List
                                </a>
                              </li>
                              <li>
                                <a href="#" title="addadres">
                                  Add Address
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li tabIndex={0} className="collapse flex">
                            <a href="#" title="support">
                              Support Ticket
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                className="w-4 h-4"
                              >
                                <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                              </svg>
                            </a>
                            <ul className="collapse-content text-sm">
                              <li>
                                <a href="#" title="SupportTickets">
                                  Support Tickets
                                </a>
                              </li>
                              <li>
                                <a href="#" title="ticketDetails">
                                  Ticket Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#" title="TrackOrders">
                              Track My Orders{" "}
                            </a>
                          </li>
                          <li tabIndex={0} className="collapse flex">
                            <a href="#" title="payMethods">
                              Payment Methods
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                className="w-4 h-4"
                              >
                                <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                              </svg>
                            </a>
                            <ul className="collapse-content text-sm">
                              <li>
                                <a href="#" title="SupportTickets">
                                  Payments Methods{" "}
                                </a>
                              </li>
                              <li>
                                <a href="#" title="ticketDetails">
                                  Add Payment{" "}
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#" title="notif">
                              Notification
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Message">
                              Messages{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/usersetting" title="Settings">
                              Settings{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="bg-neutral-50" href="#" title="Shop">
                      <div tabIndex={0} className="collapse">
                        <div className="collapse-title font-semibold flex">
                          <span>Shop</span>{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            className="w-6 h-6"
                          >
                            <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                          </svg>
                        </div>
                        <ul className="collapse-content text-sm">
                          <li tabIndex={0} className="collapse flex">
                            <a href="#" title="shopgrid">
                              Shop Grid
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                className="w-4 h-4"
                              >
                                <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                              </svg>
                            </a>
                            <ul className="collapse-content text-sm">
                              <li>
                                <a href="#" title="Shop01">
                                  Shop Grid One
                                </a>
                              </li>
                              <li>
                                <a href="#" title="Shop02">
                                  Shop Grid Two
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li tabIndex={0} className="collapse flex">
                            <a href="#" title="shopList">
                              Shop List
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                className="w-4 h-4"
                              >
                                <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                              </svg>
                            </a>
                            <ul className="collapse-content text-sm">
                              <li>
                                <a href="#" title="shopList01">
                                  Shop List One
                                </a>
                              </li>
                              <li>
                                <a href="#" title="ShopList02">
                                  Shop List Two
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#" title="shopsearch">
                              Shop Search
                            </a>
                          </li>
                          <li>
                            <a href="#" title="shopCart">
                              Shop Cart
                            </a>
                          </li>
                          <li>
                            <a href="#" title="ChechOut">
                              Check Out{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/checkout-complete" title="ChechOutCom">
                              Check Out Completed{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#" title="shopSingle">
                              Shop Single{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#" title="shopCompare">
                              Shop Compare{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="blog"
                      className="bg-neutral-50 collapse"
                      tabIndex={0}
                    >
                      <div className="collapse-title font-semibold flex">
                        <span>Blog</span>{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 640"
                          className="w-6 h-6"
                        >
                          <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                        </svg>
                      </div>
                      <ul className="collapse-content text-sm">
                        <li>
                          <a href="#" title="Bloggrid">
                            Blog Grid{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#" title="blogside">
                            Blog Grid Sidebar{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#" title="blogSingle">
                            Blog Single
                          </a>
                        </li>
                        <li>
                          <a href="#" title="blogSinglebar">
                            Blog Single Sidebar
                          </a>
                        </li>
                      </ul>
                    </a>
                  </li>
                  <li className="pl-4">
                    <a
                      className="font-semibold bg-neutral-50"
                      href="#"
                      title="contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <hr className="h-px bg-bs_border border-0" />
    </header>
  );
};

export default Header;
