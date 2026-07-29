const Footer = () => {
  return (
    <footer className="text-white">
      <div
        style={{ backgroundImage: "url('./images/footerBg.png')" }}
        className="w-full h-auto bg-cover bg-center flex justify-center"
      >
        <div className="container py-16 md:px-0 px-3">
          <div className="grid grid-cols-6 sm:grid-cols-7 gap-4 justify-between md:gap-10 lg:gap-2 xl:gap-8">
            <div className="col-span-4 sm:col-span-3 md:col-span-3 lg:col-span-2 mb-6">
              <img
                src="./images/logo-d2d0b6a6.webp"
                className="w-[150px] md:w-[170px]"
                alt="logo"
              />
              <p className="mt-1 pr-8 leading-8">
                We are many variations of the passages available but the majoro
                have suffered alteration injected.
              </p>
              <div className="flex flex-col gap-2 mt-6">
                <a href="#" title="phone" className="items-center flex">
                  <div className="rounded-full bg-pink-500 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 text-base-100 fill-current"
                      fill="currentColore"
                    >
                      <path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base px-1">
                    +2 123 654 7898
                  </span>
                </a>
                <a href="#" title="location" className="mt-2 items-center flex">
                  <div className="rounded-full bg-pink-500 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      className="w-4 h-4 text-base-100 fill-current"
                      fill="currentColore"
                    >
                      <path d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base px-1">
                    25/B Milford Road, New York
                  </span>
                </a>
                <a href="#" title="email" className="mt-2 items-center flex">
                  <div className="rounded-full bg-pink-500 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 text-base-100 fill-current"
                      fill="currentColore"
                    >
                      <path d="M61.4 64C27.5 64 0 91.5 0 125.4 0 126.3 0 127.1 .1 128L0 128 0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256-.1 0c0-.9 .1-1.7 .1-2.6 0-33.9-27.5-61.4-61.4-61.4L61.4 64zM464 192.3L464 384c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-191.7 154.8 117.4c31.4 23.9 74.9 23.9 106.4 0L464 192.3zM48 125.4C48 118 54 112 61.4 112l389.2 0c7.4 0 13.4 6 13.4 13.4 0 4.2-2 8.2-5.3 10.7L280.2 271.5c-14.3 10.8-34.1 10.8-48.4 0L53.3 136.1c-3.3-2.5-5.3-6.5-5.3-10.7z" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base px-1">
                    info@example.com
                  </span>
                </a>
                <a href="#" title="worktime" className="mt-2 items-center flex">
                  <div className="rounded-full bg-pink-500 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 text-base-100 fill-current"
                      fill="currentColore"
                    >
                      <path d="M464 256a208 208 0 1 1 -416 0 208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0 256 256 0 1 0 -512 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                  </div>

                  <span className="text-sm md:text-base px-1">
                    Mon-Fri (9.00AM - 8.00PM)
                  </span>
                </a>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 relative">
              <span className=" lg:font-semibold after:block after:content[('')] after:absolute after:bg-pink-500 after:h-[2px] after:w-[10px] after:mt-2  after:rounded-full before:block before:content[('')] before:absolute before:bg-gray-300 before:h-[2px] before:w-[30px] before:top-8 before:left-[16px] before:rounded-full">
                Quick Links
              </span>
              <ul className="mt-4">
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    About Us
                  </a>
                </li>
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    Delivery Info
                  </a>
                </li>
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    Contact Us
                  </a>
                </li>
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    Update News
                  </a>
                </li>
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    Our Testimonials
                  </a>
                </li>
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    Terms Of Service
                  </a>
                </li>
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-3 sm:col-span-2 md:col-span-2 lg:col-span-1 relative">
              <span className="text:xs md:text-base lg:font-semibold after:block after:content[('')] after:absolute after:bg-pink-500 after:h-[2px] after:w-[10px] after:mt-2  after:rounded-full before:block before:content[('')] before:absolute before:bg-gray-300 before:h-[2px] before:w-[30px] before:top-8 before:left-[16px] before:rounded-full">
                Browse Category
              </span>
              <ul className="mt-4">
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    Home & Living
                  </a>
                </li>
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    Garment Care
                  </a>
                </li>
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    Jewelry & Accessories
                  </a>
                </li>
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    Occasion Gifts
                  </a>
                </li>
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    Office & Stationery
                  </a>
                </li>
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    Personalised Gifts
                  </a>
                </li>
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    Gifts Box
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-3 sm:col-span-2 md:col-span-3 lg:col-span-1 relative">
              <span className="text:xs md:text-base lg:font-semibold after:block after:content[('')] after:absolute after:bg-pink-500 after:h-[2px] after:w-[10px] after:mt-2  after:rounded-full before:block before:content[('')] before:absolute before:bg-gray-300 before:h-[2px] before:w-[30px] before:top-8 before:left-[16px] before:rounded-full">
                Support Center
              </span>
              <ul className="mt-4">
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    FAQ's
                  </a>
                </li>
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    How To Buy
                  </a>
                </li>
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    Support Center
                  </a>
                </li>
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    Track Your Order
                  </a>
                </li>
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    Returns Policy
                  </a>
                </li>
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    Our Affiliates
                  </a>
                </li>
                <li className="text:xs md:text-sm py-3 hover:text-pink-500 duration-500 delay-150">
                  <a href="#" title="footer-links">
                    Site Map
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 relative">
              <span className="text:xs md:text-base lg:font-semibold after:block after:content[('')] after:absolute after:bg-pink-500 after:h-[2px] after:w-[10px] after:mt-2  after:rounded-full before:block before:content[('')] before:absolute before:bg-gray-300 before:h-[2px] before:w-[30px] before:top-8 before:left-[16px] before:rounded-full ">
                Get Mobile App
              </span>
              <p className="text:sm md:text-base my-6">
                Gifoy App is now available on App Store & Google Play.
              </p>
              <h6 className="text:sm md:text-base lg:font-semibold mb-2">
                download our mobile app
              </h6>
              <div className="my-2 flex items-center gap-2 mb-4">
                <a
                  href="#"
                  title="googlePlay"
                  className="flex items-center bg-pink-500 rounded-lg p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="h-10 w-10 text-base-100 fill-current"
                    fill="currentColor"
                  >
                    <path d="M389.6 298.3L168.9 77L449.7 238.2L389.6 298.3zM111.3 64C98.3 70.8 89.6 83.2 89.6 99.3L89.6 540.6C89.6 556.7 98.3 569.1 111.3 575.9L367.9 319.9L111.3 64zM536.5 289.6L477.6 255.5L411.9 320L477.6 384.5L537.7 350.4C555.7 336.1 555.7 303.9 536.5 289.6zM168.9 563L449.7 401.8L389.6 341.7L168.9 563z" />
                  </svg>
                  <div className="px-1">
                    <span className="capitalize font-semibold text-xs">
                      get it on
                    </span>
                    <br />
                    <span className="capitalize text-sm font-semibold">
                      google play
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  title="AppStore"
                  className="flex items-center bg-pink-500 rounded-lg  py-1 px-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-8 w-8 text-base-100 fill-current"
                    fill="currentColor"
                  >
                    <path d="M255.9 120.9l9.1-15.7c5.6-9.8 18.1-13.1 27.9-7.5s13.1 18.1 7.5 27.9l-87.5 151.5 63.3 0c20.5 0 32 24.1 23.1 40.8l-185.5 0c-11.3 0-20.4-9.1-20.4-20.4s9.1-20.4 20.4-20.4l52 0 66.6-115.4-20.8-36.1c-5.6-9.8-2.3-22.2 7.5-27.9 9.8-5.6 22.2-2.3 27.9 7.5l8.9 15.7zm-78.7 218l-19.6 34c-5.6 9.8-18.1 13.1-27.9 7.5s-13.1-18.1-7.5-27.9l14.6-25.2c16.4-5.1 29.8-1.2 40.4 11.6zm168.9-61.7l53.1 0c11.3 0 20.4 9.1 20.4 20.4S410.5 318 399.2 318l-29.5 0 19.9 34.5c5.6 9.8 2.3 22.2-7.5 27.9-9.8 5.6-22.2 2.3-27.9-7.5-33.5-58.1-58.7-101.6-75.4-130.6-17.1-29.5-4.9-59.1 7.2-69.1 13.4 23 33.4 57.7 60.1 104zM256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM40 256a216 216 0 1 1 432 0 216 216 0 1 1 -432 0z" />
                  </svg>
                  <div className="px-1">
                    <span className="capitalize font-semibold text-xs">
                      get it on
                    </span>
                    <br />
                    <span className="capitalize text-sm font-semibold">
                      App store
                    </span>
                  </div>
                </a>
              </div>
              <span className="text:xs md:text-base lg:font-semibold ">
                We Accept:
              </span>
              <div className="flex flex-wrpa gap-2 my-2">
                <img className="w-10" src="./images/visa.svg" alt="visa-card" />
                <img
                  className="w-10"
                  src="./images/mastercard.svg"
                  alt="mastercard"
                />
                <img className="w-10" src="./images/amex.svg" alt="amex" />
                <img
                  className="w-10"
                  src="./images/discover.svg"
                  alt="discover"
                />
                <img
                  className="w-10"
                  src="./src/assets/images/paypal.svg"
                  alt="paypal"
                />
              </div>
            </div>
          </div>
          <hr className="h-px bg-gray-600 border-0 mt-10 mb-6" />
          <div className="copyRight flex justify-between items-center gap-4">
            <p className="text-xs md:text-sm">
              © Copyright 2025{" "}
              <span className="text-pink-500 font-bold">Kadooyab</span> All
              Rights Reserved.
            </p>
            <div className="socialMedia flex items-center">
              <span className="capitalize text-sm md:text-sm px-3">
                follow us:
              </span>
              <a
                href="#"
                title="facebook-icon"
                className="bg-gray-800 rounded-full mx-1 w-8 h-8 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-4 h-4 fill-current text-base-100"
                  fill="currentColor"
                >
                  <path d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z" />
                </svg>
              </a>
              <a
                href="#"
                title="twitter-icon"
                className="bg-gray-800 rounded-full mx-1 w-8 h-8 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-4 h-4 fill-current text-base-100"
                  fill="currentColor"
                >
                  <path d="M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z" />
                </svg>
              </a>
              <a
                href="#"
                title="insta-icon"
                className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center mx-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-4 h-4 fill-current text-base-100"
                  fill="currentColor"
                >
                  <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a
                href="#"
                title="youtube-icon"
                className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center ml-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="w-4 h-4 fill-current text-base-100"
                  fill="currentColor"
                >
                  <path d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
