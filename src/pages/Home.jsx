const Home = () => {
  return (
    <>
      <section className="flex justify-center">
        <div className="container category py-6 mt-10">
          <div className="flex overflow-x-auto scrollbar-hide gap-6 lg:gap-4">
            <div className="categoryWrap bg-pink-50 w-48 lg:w-60 flex flex-shrink-0 p-4 rounded-3xl shadow-md hover:scale-105 transition-transform">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    className="w-14 md:w-20"
                    src="./images/gift-box.png"
                    alt="gift-box"
                  />
                </div>
                <div className="pl-2">
                  <div className=" tracking-wide text-gray-900 lg:text-lg md:text-sm md:font-semibold lg:font-semibold">
                    <a href=" #" title="gift-box">
                      Gifts Box
                    </a>
                  </div>
                  <span className="text-gray-600 lg:text-base ">30 Items</span>
                </div>
              </div>
            </div>
            <div className="categoryWrap bg-pink-50 w-48 lg:w-60 flex flex-shrink-0 p-4 rounded-3xl shadow-md hover:scale-105 transition-transform mx-auto">
              <div className="flex items-center">
                <img
                  className="w-14 md:w-20"
                  src="./images/gift-for-family.png"
                  alt="gift-box"
                />
                <div className="pl-2">
                  <div className="tracking-wide text-gray-900 lg:text-lg md:text-sm md:font-semibold lg:font-semibold">
                    <a href=" #" title="gift-box">
                      Home &
                      <br />
                      Living Gifts
                    </a>
                  </div>
                  <span className="text-gray-600 lg:text-base">25 Items</span>
                </div>
              </div>
            </div>
            <div className="categoryWrap bg-pink-50 w-48 lg:w-60 flex-shrink-0 p-4 rounded-3xl shadow-md hover:scale-105 transition-transform">
              <div className="flex items-center">
                <img
                  className="w-14 md:w-20"
                  src="./images/festivals.png"
                  alt="festivals-gift"
                />
                <div className="pl-2">
                  <div className="tracking-wide text-gray-900 lg:text-lg md:text-sm md:font-semibold lg:font-semibold ">
                    <a href=" #" title="gift-box">
                      Office &
                      <br />
                      Stationary
                    </a>
                  </div>

                  <span className="text-gray-600 lg:text-base ">30 Items</span>
                </div>
              </div>
            </div>
            <div className="categoryWrap bg-pink-50 w-48 lg:w-60 flex flex-shrink-0 p-4 rounded-3xl shadow-md hover:scale-105 transition-transform">
              <div className="flex items-center">
                <img
                  className="w-14 md:w-20"
                  src="./images/wedding-gift.png"
                  alt="Occation-gifts"
                />
                <div className="pl-2">
                  <div className="tracking-wide text-gray-900 lg:text-lg md:text-sm md:font-semibold lg:font-semibold">
                    <a href=" #" title="gift-box">
                      Occation
                      <br />
                      Gifts
                    </a>
                  </div>

                  <span className="text-gray-600 lg:text-base">30 Items</span>
                </div>
              </div>
            </div>
            <div className="categoryWrap bg-pink-50 w-48 lg:w-60 flex-shrink-0 p-4 rounded-3xl shadow-md hover:scale-105 transition-transform">
              <div className="flex items-center">
                <img
                  className="w-14 md:w-20"
                  src="./images/festivals.png"
                  alt="festivals-gift"
                />
                <div className="pl-2">
                  <div className="tracking-wide text-gray-900 lg:text-lg md:text-sm md:font-semibold lg:font-semibold">
                    <a href=" #" title="gift-box">
                      Garment <br />
                      Care
                    </a>
                  </div>

                  <span className="text-gray-600 lg:text-base ">30 Items</span>
                </div>
              </div>
            </div>
            <div className="categoryWrap bg-pink-50 w-48 md:w-60 flex flex-shrink-0 p-4 rounded-3xl shadow-md hover:scale-105 transition-transform">
              <div className="flex items-center">
                <img
                  className="w-14 md:w-20"
                  src="./images/valentines-gift.png"
                  alt="personalised-gift"
                />
                <div className="pl-2">
                  <div className=" tracking-wide text-gray-900 lg:text-lg md:text-sm md:font-semibold lg:font-semibold ">
                    <a href=" #" title="gift-box">
                      personalised
                      <br />
                      Gifts
                    </a>
                  </div>

                  <span className="text-gray-600 lg:text-base ">10 Items</span>
                </div>
              </div>
            </div>
            <div className="categoryWrap bg-pink-50 w-48 md:w-60 flex flex-shrink-0 p-4 rounded-3xl shadow-md hover:scale-105 transition-transform">
              <div className="flex items-center">
                <img
                  className="w-14 md:w-20"
                  src="./images/valentines-gift.png"
                  alt="personalised-gift"
                />
                <div className="pl-2">
                  <div className=" tracking-wide text-gray-900 lg:text-lg md:text-sm md:font-semibold lg:font-semibold">
                    <a href=" #" title="gift-box">
                      Jewelry &
                      <br />
                      Accessories
                    </a>
                  </div>

                  <span className="text-gray-600 lg:text-base">10 Items</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="container mt-10">
          <div className="hero lg:grid-cols-12 justify-between">
            <div className="col-span-12 lg:col-span-3 w-full relative">
              <img
                src="./src/assets/images/hs-1-banner.jpg"
                alt="banner-mini-hero"
                className="rounded-md w-full h-auto"
              />
              <div className="absolute bottom-4 left-4">
                <span className="text-pink-500 tracking-wide font-bold block">
                  START $10.99
                </span>
                <span className="text-3xl font-semibold text-blue-950 block mb-4">
                  Special Gifts Box
                  <br></br>
                  For Your Love
                </span>
                <a
                  href="#"
                  title="shop"
                  className="bg-pink-500 text-base-100 text-base inline-flex items-center rounded-md p-2 hover:bg-blue-950 transition delay-100 duration-500"
                >
                  <span>Shop Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="w-5 h-5 ml-1"
                    fill="#fff"
                  >
                    <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* <div className="crausel-hero lg:col-span-8 lg:col-start-5">
              <img src="" alt="slider1" className="w-full h-auto rounded-md " />
            </div> */}
          </div>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="container mt-16">
          <div className="facility justify-center items-center grid grid-rows-4 md:grid-rows-2  lg:grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 rounded-xl bg-pink-50 px-6">
            <div className="facilityWrap flex md:row-start-1 lg:row-start-1 justify-start items-center  lg:justify-center py-3 px-0 relative lg:after:contet-[''] lg:after:absolute lg:after:bg-gray-200 lg:after:w-[1px] lg:after:h-full lg:after:right-0 lg:after:top-0">
              <div className="icon-wrap bg-pink-500 w-12 h-12 md:w-10 md:h-10 lg:w-16 lg:h-16 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                  fill="#ffffff"
                >
                  <path d="M96 144C87.2 144 80 151.2 80 160L80 448C80 456.8 87.2 464 96 464L99.3 464C109.7 427.1 143.7 400 184 400C224.3 400 258.2 427.1 268.7 464L371.3 464C376.2 446.6 386.4 431.3 400 420.1L400 160C400 151.2 392.8 144 384 144L96 144zM99.3 512L96 512C60.7 512 32 483.3 32 448L32 160C32 124.7 60.7 96 96 96L384 96C419.3 96 448 124.7 448 160L448 192L503.4 192C520.4 192 536.7 198.7 548.7 210.7L589.3 251.3C601.3 263.3 608 279.6 608 296.6L608 448C608 483.3 579.3 512 544 512L540.7 512C530.3 548.9 496.3 576 456 576C415.7 576 381.8 548.9 371.3 512L268.7 512C258.3 548.9 224.3 576 184 576C143.7 576 109.8 548.9 99.3 512zM448 320L560 320L560 296.6C560 292.4 558.3 288.3 555.3 285.3L514.7 244.7C511.7 241.7 507.6 240 503.4 240L448 240L448 320zM448 368L448 400.4C450.6 400.2 453.3 400 456 400C496.3 400 530.2 427.1 540.7 464L544 464C552.8 464 560 456.8 560 448L560 368L448 368zM184 528C206.1 528 224 510.1 224 488C224 465.9 206.1 448 184 448C161.9 448 144 465.9 144 488C144 510.1 161.9 528 184 528zM456 528C478.1 528 496 510.1 496 488C496 465.9 478.1 448 456 448C433.9 448 416 465.9 416 488C416 510.1 433.9 528 456 528z" />
                </svg>
              </div>
              <div className="pl-1">
                <span className="tracking-wide text-base sm:text-lg font-semibold lg:font-semibold">
                  Free Delivery
                </span>
                <br />
                <span className="text-gray-500 text-xs sm:text-sm">
                  Orders Over $20
                </span>
              </div>
            </div>
            <div className="facilityWrap flex md:row-start-1 lg:row-start-1 justify-center items-center md:justify-start lg:justify-center py-3 lg:relative lg:after:contet-[''] lg:after:absolute lg:after:bg-gray-200 lg:after:w-[1px] lg:after:h-full lg:after:right-0 lg:after:top-0">
              <div className="icon-wrap bg-pink-500 w-12 h-12 md:w-10 md:h-10 lg:w-16 lg:h-16 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                  fill="#ffffff"
                >
                  <path d="M544.1 256L552 256C565.3 256 576 245.3 576 232L576 88C576 78.3 570.2 69.5 561.2 65.8C552.2 62.1 541.9 64.2 535 71L483.3 122.8C439 86.1 382 64 320 64C191 64 84.3 159.4 66.6 283.5C64.1 301 76.2 317.2 93.7 319.7C111.2 322.2 127.4 310 129.9 292.6C143.2 199.5 223.3 128 320 128C364.4 128 405.2 143 437.7 168.3L391 215C384.1 221.9 382.1 232.2 385.8 241.2C389.5 250.2 398.3 256 408 256L544.1 256zM573.5 356.5C576 339 563.8 322.8 546.4 320.3C529 317.8 512.7 330 510.2 347.4C496.9 440.4 416.8 511.9 320.1 511.9C275.7 511.9 234.9 496.9 202.4 471.6L249 425C255.9 418.1 257.9 407.8 254.2 398.8C250.5 389.8 241.7 384 232 384L88 384C74.7 384 64 394.7 64 408L64 552C64 561.7 69.8 570.5 78.8 574.2C87.8 577.9 98.1 575.8 105 569L156.8 517.2C201 553.9 258 576 320 576C449 576 555.7 480.6 573.4 356.5z" />
                </svg>
              </div>
              <div className="pl-2">
                <span className="tracking-wide text-base sm:text-lg font-semibold lg:font-semibold">
                  Get Refund
                </span>
                <br />
                <span className="text-gray-500 text-xs sm:text-sm">
                  Whitin 30 Days Return
                </span>
              </div>
            </div>
            <div className="facilityWrap flex md:row-start-2 lg:row-start-1 justify-center items-center md:justify-start lg:justify-center py-3 relative lg:after:contet-[''] lg:after:absolute lg:after:bg-gray-200 lg:after:w-[1px] lg:after:h-full lg:after:right-0 lg:after:top-0">
              <div className="icon-wrap bg-pink-500 w-12 h-12 md:w-10 md:h-10 lg:w-16 lg:h-16 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                  fill="#ffffff"
                >
                  <path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zM296 288l128 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-128 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm-24-88c0-13.3 10.7-24 24-24l128 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-128 0c-13.3 0-24-10.7-24-24zM148 144c11 0 20 9 20 20l0 4 8 0c11 0 20 9 20 20s-9 20-20 20l-47.5 0c-6.9 0-12.5 5.6-12.5 12.5 0 6.1 4.4 11.3 10.4 12.3l41.7 7c25.3 4.2 43.9 26.1 43.9 51.8 0 26.1-19 47.7-44 51.8l0 4.7c0 11-9 20-20 20s-20-9-20-20l0-4-24 0c-11 0-20-9-20-20s9-20 20-20l55.5 0c6.9 0 12.5-5.6 12.5-12.5 0-6.1-4.4-11.3-10.4-12.3l-41.7-7C94.5 268 76 246.1 76 220.5 76 191.7 99.2 168.3 128 168l0-4c0-11 9-20 20-20z" />
                </svg>
              </div>
              <div className="pl-2">
                <span className="tracking-wide text-base sm:text-lg font-semibold lg:font-semibold">
                  Safe Payment
                </span>
                <br />
                <span className="text-gray-500 text-xs sm:text-sm lg:text-base">
                  100% Secure Payment
                </span>
              </div>
            </div>
            <div className="facilityWrap flex md:row-start-2 lg:row-start-1 items-center justify-start lg:justify-end py-3">
              <div className="icon-wrap bg-pink-500 w-12 h-12 md:w-10 md:h-10 lg:w-16 lg:h-16 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                  fill="#ffffff"
                >
                  <path d="M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z" />
                </svg>
              </div>
              <div className="pl-2">
                <span className="tracking-wide text-gray-900 text-base sm:text-lg font-semibold lg:font-semibold">
                  24/7 Support
                </span>
                <br />
                <span className="text-gray-500 text-xs sm:text-sm lg:text-base">
                  Feel Free To Call Us
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center">
        <div className="container mx-auto mt-16 py-3">
          <div className="premiumGift lg:grid lg:grid-cols-12 lg:gap-2">
            <div className="premiumGiftLeft col-span-4 mb-8 lg:mb-0 lg:px-3">
              <span className="text-pink-500 tracking-widest font-bold uppercase text-lg">
                Premium Gifts
              </span>
              <h3 className="text-lg md:text-4xl font-semibold mt-2">
                Experience{" "}
                <span className="text-2xl md:text-4xl font-semibold text-pink-500">
                  Premium
                  <br />
                  Gifts
                </span>
                <span className="text-lg md:text-4xl font-semibold">
                  {" "}
                  And Products
                </span>
              </h3>
              <p className="text-base text-gray-500 leading-8 my-6">
                It is a long established fact that a reader will by the readable
                content of a page when looking the majority have suffered
                alteration in some form at its layout ure there readable content
                of a page when looking at its layout anything hidden in the
                middle.
              </p>
              <button className="bg-pink-500 text-base-100 hover:bg-[#000000] px-4 py-3 rounded-xl font-semibold md:text-base block mt-4 cursor-pointer">
                Explore more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[12.5px] h-[14px] inline-block ml-1"
                  viewBox="0 0 448 512 "
                  fill="#ffffff"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </button>
            </div>
            <div className="premiumGiftRight lg:col-span-8 relative">
              <div className="flex justify-between relative overflow-x-hidden gap-10 sm:gap-6 md:gap-8 xl:gap-6">
                <div className="giftBoxPre flex-shrink-0 w-full sm:w-[48%] md:w-[30%] lg:w-[30%] xl:w-[31%]">
                  <div className="rounded-2xl flex justify-center items-center relative bg-pink-50 py-8 mb-3 specialGift cursor-pointer">
                    <span className="text-sm text-base-100 px-3 py-1 rounded-3xl bg-secondary block absolute top-5 right-7">
                      new
                    </span>
                    <img
                      src="./images/01-special.png"
                      className="w-[220px] h-[220px] lg:w-[170px] lg:h-[170px] xl:w-[220px] xl:h-[220px] "
                      alt="special-gift"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-md capitalize block">
                        special gift box
                      </span>
                      <div className="rate my-1 flex gap-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                        </svg>
                      </div>
                      <span className="price text-error text-ms font-medium mt-2">
                        $250.00
                      </span>
                    </div>
                    <div
                      className="tooltip tooltip-left tooltip-secondary"
                      data-tip="Add To cart"
                    >
                      <button className="btn border-none bg-primary rounded-full w-12 h-12">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-10 h-10 text-base-100 fill-current"
                          fill="currentColor"
                        >
                          <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="giftBoxPre flex-shrink-0 w-full sm:w-[48%] md:w-[30%] lg:w-[30%] xl:w-[31%]">
                  <div className="rounded-2xl flex justify-center items-center relative bg-pink-50 py-8 mb-3 specialGift cursor-pointer">
                    <span className="text-sm text-base-100 px-3 py-1 rounded-3xl bg-info block absolute top-5 right-7">
                      hot
                    </span>
                    <a href="#" title="product" className="">
                      <img
                        src="./images/02-special.png"
                        className="w-[220px] h-[220px] lg:w-[170px] lg:h-[170px] xl:w-[220px] xl:h-[220px]"
                        alt="special-gift"
                      />
                      {/* <div className="flex gap-x-3 absolute bottom-4">
                        <div
                          className="tooltip tooltip-top tooltip-secondary w-10 h-10 z-30"
                          data-tip="Quick View"
                        >
                          <button className="btn rounded-full bg-secondary border-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-base-100 fill-current"
                              fill="currentColor"
                            >
                              <path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z" />
                            </svg>
                          </button>
                        </div>
                        <div
                          className="tooltip tooltip-top tooltip-secondary w-10 h-10 z-20"
                          data-tip="Add To Wishlist"
                        >
                          <button className="btn rounded-full bg-secondary border-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="w-4 h-4 text-base-100 fill-current "
                              fill="currentColor"
                            >
                              <path d="M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z" />
                            </svg>
                          </button>
                        </div>
                        <div
                          className="tooltip tooltip-top tooltip-secondary w-10 h-10 z-10"
                          data-tip="Add To Compare"
                        >
                          <button className="btn rounded-full bg-secondary border-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="w-4 h-4 text-base-100 fill-current"
                              fill="currentColor"
                            >
                              <path d="M480.1 192l7.9 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2S477.9 .2 471 7L419.3 58.8C375 22.1 318 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1C79.2 135.5 159.3 64 256 64 300.4 64 341.2 79 373.7 104.3L327 151c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 192 344 192l136.1 0zm29.4 100.5c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-44.4 0-85.2-15-117.7-40.3L185 361c6.9-6.9 8.9-17.2 5.2-26.2S177.7 320 168 320L24 320c-13.3 0-24 10.7-24 24L0 488c0 9.7 5.8 18.5 14.8 22.2S34.1 511.8 41 505l51.8-51.8C137 489.9 194 512 256 512 385 512 491.7 416.6 509.4 292.5z" />
                            </svg>
                          </button>
                        </div>
                      </div> */}
                    </a>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-md capitalize">
                        special gift box
                      </span>
                      <div className="rate my-1 flex gap-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                        </svg>
                      </div>
                      <span className="price text-error text-ms font-medium mt-2">
                        $250.00
                      </span>
                    </div>
                    <div
                      className="tooltip tooltip-left tooltip-secondary"
                      data-tip="Add To cart"
                    >
                      <button className="btn border-none bg-primary rounded-full w-12 h-12">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-10 h-10 text-base-100 fill-current"
                          fill="currentColor"
                        >
                          <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="giftBoxPre flex-shrink-0 w-full sm:w-[48%] md:w-[30%] lg:w-[30%] xl:w-[31%]">
                  <div className="py-8 mb-3 px-6 rounded-2xl bg-pink-50 flex justify-center items-center relative specialGift cursor-pointer">
                    <span className="text-sm text-base-100 px-3 py-1 rounded-3xl bg-warning block absolute top-5 right-7">
                      outof stock
                    </span>
                    <img
                      src="./images/03-special.png"
                      className="w-[220px] h-[220px] lg:w-[170px] lg:h-[170px] xl:w-[220px] xl:h-[220px]"
                      alt="special-gift"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-md capitalize">
                        special gift box
                      </span>
                      <div className="rate my-1 flex gap-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                        </svg>
                      </div>
                      <span className="price text-error text-ms font-medium mt-2">
                        $250.00
                      </span>
                    </div>
                    <div
                      className="tooltip tooltip-left tooltip-secondary"
                      data-tip="Add To cart"
                    >
                      <button className="btn border-none bg-primary rounded-full w-12 h-12">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-10 h-10 text-base-100 fill-current"
                          fill="currentColor"
                        >
                          <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button className="bg-pink-500 rounded-full h-10 w-10 flex justify-center items-center absolute -right-2 top-1/3 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                    className="w-5 h-5"
                    fill="#ffffff"
                  >
                    <path d="M247.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L179.2 256 41.9 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                </button>
                <button className="bg-pink-500 rounded-full h-10 w-10 flex justify-center items-center absolute -left-2 top-1/3 cursor-pointer ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                    className="w-5 h-5"
                    fill="#ffffff"
                  >
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="container md:mt-16">
          <div className="options grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mt-10 gap-8">
            <div className="optionsBox relative mx-auto">
              <div className="absolute top-8 sm:top-32 md:top-8 xl:top-14 left-0 pb-10 px-10 z-10">
                <span className="uppercase bg-pink-500 text-base-100 text-xs font-semibold py-2 px-3 rounded-3xl">
                  gift box
                </span>
                <h3 className="capitalize text-xl md:text-base xl:text-xl font-semibold my-5">
                  awesome gifts box
                  <br />
                  collections
                </h3>
                <a
                  href="#"
                  title="shop-now"
                  className="uppercase text-xs sm:text-sm font-medium underline underline-offset-8 hover:text-pink-50 delay-150 duration-500 transition-colors ease-in"
                >
                  shop now
                </a>
              </div>
              <img
                className="rounded-xl"
                src="./images/mini-banner-1.jpg"
                alt="mini-banner"
              />
            </div>
            <div className="optionsBox relative mx-auto">
              <div className="absolute top-8 sm:top-32 md:top-8 xl:top-14 left-auto right-auto pb-10 px-10 py-2 z-10">
                <span className="uppercase bg-pink-500 text-base-100 text-xs font-semibold px-3 py-2 rounded-3xl">
                  Occasion Gift
                </span>
                <h3 className="capitalize text-xl md:text-base lg:text-base xl:text-xl font-semibold my-5">
                  Best Occasion Gifts
                  <br />
                  collections
                </h3>
                <a
                  href="#"
                  title="shop-now"
                  className="uppercase text-xs sm:text-sm font-medium underline underline-offset-8 hover:text-pink-50 delay-150 duration-500 transition-colors ease-in"
                >
                  Discover now
                </a>
              </div>
              <img
                className="rounded-xl"
                src="./images/mini-banner-2.jpg"
                alt="mini-banner"
              />
            </div>
            <div className="optionsBox relative mx-auto">
              <div className="absolute top-8 sm:top-32 md:top-8 xl:top-14 left-0 pb-10 px-10 z-10">
                <span className="uppercase bg-pink-500 text-base-100 text-xs font-semibold py-2 px-3 rounded-3xl">
                  Hot Sale
                </span>
                <h3 className="capitalize text-xl md:text-base lg:text-base xl:text-xl font-semibold my-5">
                  Combo Sets Gift Box
                  <br />
                  Up To <span className="text-pink-500">50%</span> Off
                </h3>
                <a
                  href="#"
                  title="shop-now"
                  className="uppercase text-xs sm:text-sm font-medium underline underline-offset-8 hover:text-bs_primary delay-150 duration-500 transition-colors ease-in"
                >
                  shop now
                </a>
              </div>
              <img
                className="rounded-xl"
                src="./images/mini-banner-3.jpg"
                alt="mini-banner"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="container mx-auto mt-16 py-3">
          <div className="uTube lg:grid lg:grid-cols-12 lg:gap-2">
            <div className="uTubeRight col-span-4 mb-8 lg:mb-0 lg:px-3 my-auto">
              <span className="text-pink-500 tracking-widest font-bold uppercase text-lg">
                Latest Video
              </span>
              <h3 className=" text-2xl md:text-4xl font-semibold mt-3">
                What makes us{" "}
                <span className="text-2xl md:text-4xl font-semibold text-pink-500">
                  different
                  <br />
                  check
                </span>
                our video
              </h3>
              <p className=" text-gray-600 text-base leading-8 my-7">
                There are many variations of passages available but the majority
                have suffered alteration in some form by injected humour
                randomised words which don't look even slightly you are going to
                use a passage believable.
              </p>
              <button className="bg-pink-500 hover:bg-gray-900 transition-all delay-150 duration-500 ease-in-out text-base-100 px-4 py-3 rounded-xl font-semibold md:text-base block mt-4 cursor-pointer">
                Shop Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-[12.5px] h-[14px] inline-block ml-1"
                  fill="#ffffff"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </button>
            </div>
            <div className="uTubeLeft lg:col-span-8 content-center relative">
              <img
                src="./src/assets/images/01.jpg"
                alt="gift"
                className="w-full  rounded-2xl"
              />
              <a
                href="#"
                title="videoYou"
                className="w-20 h-20 bg-base-100 rounded-full absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="text-primary fill-current w-20 h-20 "
                  fill="currentColor"
                >
                  <path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="container mt-16">
          <div className="grid lg:grid-cols-12 justify-between gap-x-3">
            <div className="popularPic lg:col-span-3">
              <img
                src="./images/side-banner.jpg"
                className="rounded-2xl lg:w-[300px]"
                alt="side-banner"
              />
            </div>
            <div className="popularSlider lg:col-span-9">
              <div className="flex gap-1 lg:col-end-7 mt-5 lg:mt-0 justify-end">
                <div className="tabs tabs-border">
                  <h3 className="font-bold text-gray-900 text-2xl md:col-span-2 ml-0 mr-auto relative after:absolute after:contet-[''] after:bg-purple-500 after:w-8 after:h-1 after:top-full after:left-0">
                    Popular Items
                  </h3>
                  <input
                    type="radio"
                    name="my_tabs_1"
                    className="tab text-sm md:text-base font-semibold text-secondary"
                    aria-label="Home And Living"
                    defaultChecked
                  />
                  <div className="tab-content">
                    <div className="grid grid-flow-col grid-rows-4 sm:grid-rows-2 mt-6 lg:flex lg:justify-between w-full">
                      <div className="popularItems w-full pr-3">
                        <div className="rounded-2xl flex justify-center items-center relative bg-pink-50 py-5 mb-3 cursor-pointer specialGif">
                          <span className="text-base-100  badge-secondary badge absolute top-2 right-2 z-10 text-center">
                            new
                          </span>
                          <img
                            src="./images/15.png"
                            alt="cellphone-cover"
                            className="lg:w-[120px] xl:w-[170px] 2xl:w-[250px]"
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-md capitalize block">
                              special gift box
                            </span>
                            <div className="rate my-1 flex gap-x-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                              </svg>
                            </div>
                            <span className="price text-error text-ms font-medium mt-2">
                              $250.00
                            </span>
                          </div>
                          <div
                            className="tooltip tooltip-left tooltip-secondary"
                            data-tip="Add To cart"
                          >
                            <button className="btn border-none bg-purple-500 rounded-full w-12 h-12">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-10 h-10 text-base-100 fill-current"
                                fill="currentColor"
                              >
                                <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="popularItems w-full px-3">
                        <div className="rounded-2xl flex justify-center items-center relative bg-pink-50 py-5 lg:px-2 xl:px-3 mb-3 cursor-pointer specialGift">
                          <span className="text-base-100  badge badge-info absolute top-2 right-2">
                            hot
                          </span>
                          <img
                            src="./images/14.png"
                            alt="cellphone-cover"
                            className="lg:w-[120px] xl:w-[170px] 2xl:w-[250px]"
                          />
                        </div>

                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-md capitalize block">
                              special gift box
                            </span>
                            <div className="rate my-1 flex gap-x-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                              </svg>
                            </div>
                            <span className="price text-error text-ms font-medium mt-2">
                              $250.00
                            </span>
                          </div>
                          <div
                            className="tooltip tooltip-left tooltip-secondary"
                            data-tip="Add To cart"
                          >
                            <button className="btn border-none bg-purple-500 rounded-full w-12 h-12">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-10 h-10 text-base-100 fill-current"
                                fill="currentColor"
                              >
                                <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="popularItems w-full px-3">
                        <div className="rounded-2xl flex justify-center items-center relative bg-pink-50 py-5 lg:px-2 xl:px-3 mb-3 cursor-pointer specialGift">
                          <span className="text-base-100 badge badge-error absolute top-2 right-2">
                            out of stock
                          </span>
                          <img
                            src="./images/24.png"
                            alt="cellphone-cover"
                            className="lg:w-[120px] xl:w-[170px] 2xl:w-[250px]"
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-md capitalize block">
                              special gift box
                            </span>
                            <div className="rate my-1 flex gap-x-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                              </svg>
                            </div>
                            <span className="price text-error text-ms font-medium mt-2">
                              $250.00
                            </span>
                          </div>
                          <div
                            className="tooltip tooltip-left tooltip-secondary"
                            data-tip="Add To cart"
                          >
                            <button className="btn border-none bg-purple-500 rounded-full w-12 h-12">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-10 h-10 text-base-100 fill-current"
                                fill="currentColor"
                              >
                                <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="popularItems w-full pl-3">
                        <div className="rounded-2xl flex justify-center items-center relative bg-pink-50 py-5 lg:px-2 xl:px-3 mb-3 cursor-pointer specialGift ">
                          <span className="text-base-100 badge badge-warning block absolute top-2 right-2">
                            10% off
                          </span>
                          <img
                            src="./images/07.png"
                            alt="cellphone-cover"
                            className="lg:w-[120px] xl:w-[170px] 2xl:w-[250px]"
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-md capitalize block">
                              special gift box
                            </span>
                            <div className="rate my-1 flex gap-x-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                              </svg>
                            </div>
                            <span className="price text-error text-ms font-medium mt-2">
                              $250.00
                            </span>
                          </div>
                          <div
                            className="tooltip tooltip-left tooltip-secondary"
                            data-tip="Add To cart"
                          >
                            <button className="btn border-none bg-purple-500 rounded-full w-12 h-12">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-10 h-10 text-base-100 fill-current"
                                fill="currentColor"
                              >
                                <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="my_tabs_1"
                    className="tab text-sm md:text-base font-semibold text-gray-900 hover:text-secondary"
                    aria-label="Garment Care"
                  />
                  <div className="tab-content ">
                    <div className="grid grid-flow-col grid-rows-4 sm:grid-rows-2 mt-6 lg:flex lg:justify-between w-full">
                      <div className="popularItems w-full pr-3">
                        <div className="rounded-2xl flex justify-center items-center relative bg-pink-50 py-5 mb-3 cursor-pointer specialGif">
                          <span className="text-base-100  badge-secondary badge absolute top-2 right-2 z-10 text-center">
                            new
                          </span>
                          <img
                            src="./images/07.png"
                            alt="cellphone-cover"
                            className="lg:w-[120px] xl:w-[170px] 2xl:w-[250px]"
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-md capitalize block">
                              special gift box
                            </span>
                            <div className="rate my-1 flex gap-x-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                              </svg>
                            </div>
                            <span className="price text-error text-ms font-medium mt-2">
                              $250.00
                            </span>
                          </div>
                          <div
                            className="tooltip tooltip-left tooltip-secondary"
                            data-tip="Add To cart"
                          >
                            <button className="btn border-none bg-purple-500 rounded-full w-12 h-12">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-10 h-10 text-base-100 fill-current"
                                fill="currentColor"
                              >
                                <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="popularItems w-full px-3">
                        <div className="rounded-2xl flex justify-center items-center relative bg-pink-50 py-5 lg:px-2 xl:px-3 mb-3 cursor-pointer specialGift">
                          <span className="text-base-100  badge badge-info absolute top-2 right-2">
                            hot
                          </span>
                          <img
                            src="./images/24.png"
                            alt="cellphone-cover"
                            className="lg:w-[120px] xl:w-[170px] 2xl:w-[250px]"
                          />
                        </div>

                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-md capitalize block">
                              special gift box
                            </span>
                            <div className="rate my-1 flex gap-x-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                              </svg>
                            </div>
                            <span className="price text-error text-ms font-medium mt-2">
                              $250.00
                            </span>
                          </div>
                          <div
                            className="tooltip tooltip-left tooltip-secondary"
                            data-tip="Add To cart"
                          >
                            <button className="btn border-none bg-purple-500 rounded-full w-12 h-12">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-10 h-10 text-base-100 fill-current"
                                fill="currentColor"
                              >
                                <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="popularItems w-full px-3">
                        <div className="rounded-2xl flex justify-center items-center relative bg-pink-50 py-5 lg:px-2 xl:px-3 mb-3 cursor-pointer specialGift">
                          <span className="text-base-100 badge badge-error absolute top-2 right-2">
                            out of stock
                          </span>
                          <img
                            src="./images/14.png"
                            alt="cellphone-cover"
                            className="lg:w-[120px] xl:w-[170px] 2xl:w-[250px]"
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-md capitalize block">
                              special gift box
                            </span>
                            <div className="rate my-1 flex gap-x-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                              </svg>
                            </div>
                            <span className="price text-error text-ms font-medium mt-2">
                              $250.00
                            </span>
                          </div>
                          <div
                            className="tooltip tooltip-left tooltip-secondary"
                            data-tip="Add To cart"
                          >
                            <button className="btn border-none bg-purple-500 rounded-full w-12 h-12">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-10 h-10 text-base-100 fill-current"
                                fill="currentColor"
                              >
                                <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="popularItems w-full pl-3">
                        <div className="rounded-2xl flex justify-center items-center relative bg-pink-50 py-5 lg:px-2 xl:px-3 mb-3 cursor-pointer specialGift ">
                          <span className="text-base-100 badge badge-warning block absolute top-2 right-2">
                            10% off
                          </span>
                          <img
                            src="./images/15.png"
                            alt="cellphone-cover"
                            className="lg:w-[120px] xl:w-[170px] 2xl:w-[250px]"
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-md capitalize block">
                              special gift box
                            </span>
                            <div className="rate my-1 flex gap-x-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                              </svg>
                            </div>
                            <span className="price text-error text-ms font-medium mt-2">
                              $250.00
                            </span>
                          </div>
                          <div
                            className="tooltip tooltip-left tooltip-secondary"
                            data-tip="Add To cart"
                          >
                            <button className="btn border-none bg-purple-500 rounded-full w-12 h-12">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-10 h-10 text-base-100 fill-current"
                                fill="currentColor"
                              >
                                <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="my_tabs_1"
                    className="tab text-sm md:text-base font-semibold text-gray-900 hover:text-secondary"
                    aria-label="Gifts Box"
                  />
                  <div className="tab-content ">
                    <div className="grid grid-flow-col grid-rows-4 sm:grid-rows-2 mt-6 lg:flex lg:justify-between w-full">
                      <div className="popularItems w-full pr-3">
                        <div className="rounded-2xl flex justify-center items-center relative bg-pink-50 py-5 mb-3 cursor-pointer specialGif">
                          <span className="text-base-100  badge-secondary badge absolute top-2 right-2 z-10 text-center">
                            new
                          </span>
                          <img
                            src="./images/24.png"
                            alt="cellphone-cover"
                            className="lg:w-[120px] xl:w-[170px] 2xl:w-[250px]"
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-md capitalize block">
                              special gift box
                            </span>
                            <div className="rate my-1 flex gap-x-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                              </svg>
                            </div>
                            <span className="price text-error text-ms font-medium mt-2">
                              $250.00
                            </span>
                          </div>
                          <div
                            className="tooltip tooltip-left tooltip-secondary"
                            data-tip="Add To cart"
                          >
                            <button className="btn border-none bg-purple-500 rounded-full w-12 h-12">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-10 h-10 text-base-100 fill-current"
                                fill="currentColor"
                              >
                                <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="popularItems w-full px-3">
                        <div className="rounded-2xl flex justify-center items-center relative bg-pink-50 py-5 lg:px-2 xl:px-3 mb-3 cursor-pointer specialGift">
                          <span className="text-base-100  badge badge-info absolute top-2 right-2">
                            hot
                          </span>
                          <img
                            src="./images/14.png"
                            alt="cellphone-cover"
                            className="lg:w-[120px] xl:w-[170px] 2xl:w-[250px]"
                          />
                        </div>

                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-md capitalize block">
                              special gift box
                            </span>
                            <div className="rate my-1 flex gap-x-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                              </svg>
                            </div>
                            <span className="price text-error text-ms font-medium mt-2">
                              $250.00
                            </span>
                          </div>
                          <div
                            className="tooltip tooltip-left tooltip-secondary"
                            data-tip="Add To cart"
                          >
                            <button className="btn border-none bg-purple-500 rounded-full w-12 h-12">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-10 h-10 text-base-100 fill-current"
                                fill="currentColor"
                              >
                                <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="popularItems w-full px-3">
                        <div className="rounded-2xl flex justify-center items-center relative bg-pink-50 py-5 lg:px-2 xl:px-3 mb-3 cursor-pointer specialGift">
                          <span className="text-base-100 badge badge-error absolute top-2 right-2">
                            out of stock
                          </span>
                          <img
                            src="./images/07.png"
                            alt="cellphone-cover"
                            className="lg:w-[120px] xl:w-[170px] 2xl:w-[250px]"
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-md capitalize block">
                              special gift box
                            </span>
                            <div className="rate my-1 flex gap-x-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                              </svg>
                            </div>
                            <span className="price text-error text-ms font-medium mt-2">
                              $250.00
                            </span>
                          </div>
                          <div
                            className="tooltip tooltip-left tooltip-secondary"
                            data-tip="Add To cart"
                          >
                            <button className="btn border-none bg-purple-500 rounded-full w-12 h-12">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-10 h-10 text-base-100 fill-current"
                                fill="currentColor"
                              >
                                <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="popularItems w-full pl-3">
                        <div className="rounded-2xl flex justify-center items-center relative bg-pink-50 py-5 lg:px-2 xl:px-3 mb-3 cursor-pointer specialGift ">
                          <span className="text-base-100 badge badge-warning block absolute top-2 right-2">
                            10% off
                          </span>
                          <img
                            src="./images/24.png"
                            alt="cellphone-cover"
                            className="lg:w-[120px] xl:w-[170px] 2xl:w-[250px]"
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-md capitalize block">
                              special gift box
                            </span>
                            <div className="rate my-1 flex gap-x-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                              </svg>
                            </div>
                            <span className="price text-error text-ms font-medium mt-2">
                              $250.00
                            </span>
                          </div>
                          <div
                            className="tooltip tooltip-left tooltip-secondary"
                            data-tip="Add To cart"
                          >
                            <button className="btn border-none bg-purple-500 rounded-full w-12 h-12">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-10 h-10 text-base-100 fill-current"
                                fill="currentColor"
                              >
                                <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="my_tabs_1"
                    className="tab text-sm md:text-base font-semibold text-gray-900 hover:text-secondary"
                    aria-label="Occation gifts"
                  />
                  <div className="tab-content ">
                    <div className="grid grid-flow-col grid-rows-4 sm:grid-rows-2 mt-6 lg:flex lg:justify-between w-full">
                      <div className="popularItems w-full pr-3">
                        <div className="rounded-2xl flex justify-center items-center relative bg-pink-50 py-5 mb-3 cursor-pointer specialGif">
                          <span className="text-base-100  badge-secondary badge absolute top-2 right-2 z-10 text-center">
                            new
                          </span>
                          <img
                            src="./images/15.png"
                            alt="cellphone-cover"
                            className="lg:w-[120px] xl:w-[170px] 2xl:w-[250px]"
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-md capitalize block">
                              special gift box
                            </span>
                            <div className="rate my-1 flex gap-x-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                              </svg>
                            </div>
                            <span className="price text-error text-ms font-medium mt-2">
                              $250.00
                            </span>
                          </div>
                          <div
                            className="tooltip tooltip-left tooltip-secondary"
                            data-tip="Add To cart"
                          >
                            <button className="btn border-none bg-purple-500 rounded-full w-12 h-12">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-10 h-10 text-base-100 fill-current"
                                fill="currentColor"
                              >
                                <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="popularItems w-full px-3">
                        <div className="rounded-2xl flex justify-center items-center relative bg-pink-50 py-5 lg:px-2 xl:px-3 mb-3 cursor-pointer specialGift">
                          <span className="text-base-100  badge badge-info absolute top-2 right-2">
                            hot
                          </span>
                          <img
                            src="./images/24.png"
                            alt="cellphone-cover"
                            className="lg:w-[120px] xl:w-[170px] 2xl:w-[250px]"
                          />
                        </div>

                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-md capitalize block">
                              special gift box
                            </span>
                            <div className="rate my-1 flex gap-x-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                              </svg>
                            </div>
                            <span className="price text-error text-ms font-medium mt-2">
                              $250.00
                            </span>
                          </div>
                          <div
                            className="tooltip tooltip-left tooltip-secondary"
                            data-tip="Add To cart"
                          >
                            <button className="btn border-none bg-purple-500 rounded-full w-12 h-12">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-10 h-10 text-base-100 fill-current"
                                fill="currentColor"
                              >
                                <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="popularItems w-full px-3">
                        <div className="rounded-2xl flex justify-center items-center relative bg-pink-50 py-5 lg:px-2 xl:px-3 mb-3 cursor-pointer specialGift">
                          <span className="text-base-100 badge badge-error absolute top-2 right-2">
                            out of stock
                          </span>
                          <img
                            src="./images/07.png"
                            alt="cellphone-cover"
                            className="lg:w-[120px] xl:w-[170px] 2xl:w-[250px]"
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-md capitalize block">
                              special gift box
                            </span>
                            <div className="rate my-1 flex gap-x-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                              </svg>
                            </div>
                            <span className="price text-error text-ms font-medium mt-2">
                              $250.00
                            </span>
                          </div>
                          <div
                            className="tooltip tooltip-left tooltip-secondary"
                            data-tip="Add To cart"
                          >
                            <button className="btn border-none bg-purple-500 rounded-full w-12 h-12">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-10 h-10 text-base-100 fill-current"
                                fill="currentColor"
                              >
                                <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="popularItems w-full pl-3">
                        <div className="rounded-2xl flex justify-center items-center relative bg-pink-50 py-5 lg:px-2 xl:px-3 mb-3 cursor-pointer specialGift ">
                          <span className="text-base-100 badge badge-warning block absolute top-2 right-2">
                            10% off
                          </span>
                          <img
                            src="./images/14.png"
                            alt="cellphone-cover"
                            className="lg:w-[120px] xl:w-[170px] 2xl:w-[250px]"
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-md capitalize block">
                              special gift box
                            </span>
                            <div className="rate my-1 flex gap-x-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                              </svg>
                            </div>
                            <span className="price text-error text-ms font-medium mt-2">
                              $250.00
                            </span>
                          </div>
                          <div
                            className="tooltip tooltip-left tooltip-secondary"
                            data-tip="Add To cart"
                          >
                            <button className="btn border-none bg-purple-500 rounded-full w-12 h-12">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-10 h-10 text-base-100 fill-current"
                                fill="currentColor"
                              >
                                <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="container mt-16">
          <div
            className="megaCol w-full h-auto bg-cover bg-center bg-no-repeat rounded-3xl"
            style={{ backgroundImage: "url('./images/big-banner.jpg')" }}
          >
            <div className="text-center py-16 px-5">
              <h4 className="text-gray-900 font-medium text-lg md:text-2xl tracking-widest mb-6">
                mega collections
              </h4>
              <h2 className="text-gray-900 font-semibold text-2xl md:text-[36px] uppercase mb-6">
                Huge Sale Up To 40% Off
              </h2>
              <div className="flex justify-center mb-1">
                <p className="text-gray-900 border border-x-0 border-y-[1px] text-xl py-1">
                  at our outlet stores
                </p>
              </div>
              <button
                className="btn btn-secondary hover:bg-gray-900 hover:border-gray-900 transition-all delay-150 duration-500
           ease-in-out text-base-100 rounded-3xl font-semibold md:text-base
             mt-8 animate-loadBTN"
              >
                <a href="#" title="shop">
                  shop now
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-5 h-5 ml-1"
                  fill="#fff"
                >
                  <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="mt-16 py-3 flex-row">
          <div className="container mx-auto funfact grid grid-cols-12 gap-x-8 z-30 justify-between">
            <div className="funfactLeft col-span-12 lg:col-span-5 mb-8 lg:mb-0 lg:pr-3">
              <div className="rounded-2xl bg-base-100 drop-shadow-md px-1 sm:px-8 py-3">
                <hr className="h-px border-0 mb-6" />
                <div className="tabs tabs-border flex justify-between">
                  <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab font-semibold text-xl text-gray-900 hover:text-pink-500"
                    aria-label="On Sale"
                    defaultChecked
                  />
                  <div className="tab-content border-t rounded-t-none border-t-gray-200 py-8">
                    <div className="relative bg-pink-50 mb-6 rounded-2xl p-3">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-base-100 p-2 rounded-2xl">
                          <a href="#" title="specialGift">
                            <img
                              src="./images/01-special.png"
                              alt="special gift"
                              className=":w-[100px] h-[100px] hover:scale-[1.1] transition-all delay-300 duration-500"
                            />
                          </a>
                        </div>
                        <div className="p-3">
                          <h6 className="capitalize text-gray-900 font-semibold text-base sm:text-lg mb-2 hover:text-bs_primary transition-colors delay-300 duration-500">
                            <a href="#" title="special-gift">
                              special gift box
                            </a>
                          </h6>

                          <div className="mt-2">
                            <div className="rate my-1 flex gap-x-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                              </svg>
                            </div>
                            <span className="line-through text-gray-500 font-semibold">
                              60.00
                            </span>
                            <span className="text-error font-semibold px-3">
                              $40.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-base-100 absolute -right-3 bottom-0 rounded-full p-2 w-16 h-16">
                        {" "}
                      </div>
                      <div
                        className="tooltip tooltip-left tooltip-secondary absolute -right-3 bottom-0 rounded-full p-2"
                        data-tip="Add To Cart"
                      >
                        <button className="btn rounded-full bg-pink-500 w-12 h-12 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-10 h-10 text-base-100 fill-current"
                            fill="currentColor"
                          >
                            <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="relative bg-pink-50 mb-6 rounded-2xl p-3">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-base-100 p-2 rounded-2xl">
                          <a href="#" title="specialGift">
                            <img
                              src="./images/02-special.png"
                              alt="special gift"
                              className="w-[100px] h-[100px] hover:scale-[1.1] transition-all delay-300 duration-500"
                            />
                          </a>
                        </div>
                        <div className="p-3">
                          <h6 className="capitalize text-gray-900 font-semibold sm:text-lg mb-2 hover:text-pink-500 transition-colors delay-300 duration-500">
                            <a href="#" title="special-gift">
                              special gift box
                            </a>
                          </h6>
                          <div className="rate my-1 flex gap-x-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                            </svg>
                          </div>
                          <div className="mt-2">
                            <span className="line-through text-gray-600 font-semibold">
                              60.00
                            </span>
                            <span className="text-bs_warning font-semibold px-3">
                              $40.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-base-100 absolute -right-3 bottom-0 rounded-full p-2 w-16 h-16">
                        {" "}
                      </div>
                      <div
                        className="tooltip tooltip-left tooltip-secondary absolute -right-3 bottom-0 rounded-full p-2"
                        data-tip="Add To Cart"
                      >
                        <button className="btn rounded-full bg-pink-500 w-12 h-12 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-10 h-10 text-base-100 fill-current"
                            fill="currentColor"
                          >
                            <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="relative bg-pink-50 mb-6 rounded-2xl p-3 z-20">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 p-2 rounded-2xl bg-base-100">
                          <a href="#" title="specialGift">
                            <img
                              src="./images/02-special.png"
                              alt="special gift"
                              className="w-[100px] h-[100px] hover:scale-[1.1] transition-all delay-300 duration-500"
                            />
                          </a>
                        </div>
                        <div className="p-3">
                          <h6 className="capitalize text-gray-900 font-semibold sm:text-lg mb-2 hover:text-pink-500 transition-colors delay-300 duration-500">
                            <a href="#" title="special-gift">
                              special gift box
                            </a>
                          </h6>
                          <div className="rate my-1 flex gap-x-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                            </svg>
                          </div>
                          <div className="mt-2">
                            <span className="line-through text-gray-600 font-semibold">
                              60.00
                            </span>
                            <span className="text-bs_warning font-semibold px-3">
                              $40.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-base-100 absolute -right-3 bottom-0 rounded-full p-2 w-16 h-16">
                        {" "}
                      </div>
                      <div
                        className="tooltip tooltip-left tooltip-secondary absolute -right-3 bottom-0 rounded-full p-2"
                        data-tip="Add To Cart"
                      >
                        <button className="btn rounded-full bg-pink-500 w-12 h-12 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-10 h-10 text-base-100 fill-current"
                            fill="currentColor"
                          >
                            <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab font-semibold text-xl text-gray-900 hover:text-pink-500"
                    aria-label="Best Seller"
                  />
                  <div className="tab-content border-t rounded-t-none border-t-gray-200 py-8">
                    <div className="relative bg-pink-50 mb-6 rounded-2xl p-3">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-base-100 p-2 rounded-2xl">
                          <a href="#" title="specialGift">
                            <img
                              src="./images/02-special.png"
                              alt="special gift"
                              className=":w-[100px] h-[100px] hover:scale-[1.1] transition-all delay-300 duration-500"
                            />
                          </a>
                        </div>
                        <div className="p-3">
                          <h6 className="capitalize text-gray-900 font-semibold text-base sm:text-lg mb-2 hover:text-bs_primary transition-colors delay-300 duration-500">
                            <a href="#" title="special-gift">
                              special gift box
                            </a>
                          </h6>

                          <div className="mt-2">
                            <div className="rate my-1 flex gap-x-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                              </svg>
                            </div>
                            <span className="line-through text-gray-500 font-semibold">
                              60.00
                            </span>
                            <span className="text-error font-semibold px-3">
                              $40.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-base-100 absolute -right-3 bottom-0 rounded-full p-2 w-16 h-16">
                        {" "}
                      </div>
                      <div
                        className="tooltip tooltip-left tooltip-secondary absolute -right-3 bottom-0 rounded-full p-2"
                        data-tip="Add To Cart"
                      >
                        <button className="btn rounded-full bg-pink-500 w-12 h-12 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-10 h-10 text-base-100 fill-current"
                            fill="currentColor"
                          >
                            <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="relative bg-pink-50 mb-6 rounded-2xl p-3">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-base-100 p-2 rounded-2xl">
                          <a href="#" title="specialGift">
                            <img
                              src="./images/06-special.png"
                              alt="special gift"
                              className="w-[100px] h-[100px] hover:scale-[1.1] transition-all delay-300 duration-500"
                            />
                          </a>
                        </div>
                        <div className="p-3">
                          <h6 className="capitalize text-gray-900 font-semibold sm:text-lg mb-2 hover:text-pink-500 transition-colors delay-300 duration-500">
                            <a href="#" title="special-gift">
                              special gift box
                            </a>
                          </h6>
                          <div className="rate my-1 flex gap-x-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                            </svg>
                          </div>
                          <div className="mt-2">
                            <span className="line-through text-gray-600 font-semibold">
                              60.00
                            </span>
                            <span className="text-bs_warning font-semibold px-3">
                              $40.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-base-100 absolute -right-3 bottom-0 rounded-full p-2 w-16 h-16">
                        {" "}
                      </div>
                      <div
                        className="tooltip tooltip-left tooltip-secondary absolute -right-3 bottom-0 rounded-full p-2"
                        data-tip="Add To Cart"
                      >
                        <button className="btn rounded-full bg-pink-500 w-12 h-12 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-10 h-10 text-base-100 fill-current"
                            fill="currentColor"
                          >
                            <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="relative bg-pink-50 mb-6 rounded-2xl p-3 z-20">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 p-2 rounded-2xl bg-base-100">
                          <a href="#" title="specialGift">
                            <img
                              src="./images/03-special.png"
                              alt="special gift"
                              className="w-[100px] h-[100px] hover:scale-[1.1] transition-all delay-300 duration-500"
                            />
                          </a>
                        </div>
                        <div className="p-3">
                          <h6 className="capitalize text-gray-900 font-semibold sm:text-lg mb-2 hover:text-pink-500 transition-colors delay-300 duration-500">
                            <a href="#" title="special-gift">
                              special gift box
                            </a>
                          </h6>
                          <div className="rate my-1 flex gap-x-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                            </svg>
                          </div>
                          <div className="mt-2">
                            <span className="line-through text-gray-600 font-semibold">
                              60.00
                            </span>
                            <span className="text-bs_warning font-semibold px-3">
                              $40.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-base-100 absolute -right-3 bottom-0 rounded-full p-2 w-16 h-16">
                        {" "}
                      </div>
                      <div
                        className="tooltip tooltip-left tooltip-secondary absolute -right-3 bottom-0 rounded-full p-2"
                        data-tip="Add To Cart"
                      >
                        <button className="btn rounded-full bg-pink-500 w-12 h-12 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-10 h-10 text-base-100 fill-current"
                            fill="currentColor"
                          >
                            <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab font-semibold text-xl text-gray-900 hover:text-pink-500"
                    aria-label="Top Rated"
                  />
                  <div className="tab-content border-t rounded-t-none border-t-gray-200 py-8 ">
                    <div className="relative bg-pink-50 mb-6 rounded-2xl p-3">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-base-100 p-2 rounded-2xl">
                          <a href="#" title="specialGift">
                            <img
                              src="./images/06-special.png"
                              alt="special gift"
                              className=":w-[100px] h-[100px] hover:scale-[1.1] transition-all delay-300 duration-500"
                            />
                          </a>
                        </div>
                        <div className="p-3">
                          <h6 className="capitalize text-gray-900 font-semibold text-base sm:text-lg mb-2 hover:text-bs_primary transition-colors delay-300 duration-500">
                            <a href="#" title="special-gift">
                              special gift box
                            </a>
                          </h6>

                          <div className="mt-2">
                            <div className="rate my-1 flex gap-x-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-4 h-4 text-warning fill-current"
                                fill="currentColor"
                              >
                                <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                              </svg>
                            </div>
                            <span className="line-through text-gray-500 font-semibold">
                              60.00
                            </span>
                            <span className="text-error font-semibold px-3">
                              $40.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-base-100 absolute -right-3 bottom-0 rounded-full p-2 w-16 h-16">
                        {" "}
                      </div>
                      <div
                        className="tooltip tooltip-left tooltip-secondary absolute -right-3 bottom-0 rounded-full p-2"
                        data-tip="Add To Cart"
                      >
                        <button className="btn rounded-full bg-pink-500 w-12 h-12 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-10 h-10 text-base-100 fill-current"
                            fill="currentColor"
                          >
                            <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="relative bg-pink-50 mb-6 rounded-2xl p-3">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-base-100 p-2 rounded-2xl">
                          <a href="#" title="specialGift">
                            <img
                              src="./images/01-special.png"
                              alt="special gift"
                              className="w-[100px] h-[100px] hover:scale-[1.1] transition-all delay-300 duration-500"
                            />
                          </a>
                        </div>
                        <div className="p-3">
                          <h6 className="capitalize text-gray-900 font-semibold sm:text-lg mb-2 hover:text-pink-500 transition-colors delay-300 duration-500">
                            <a href="#" title="special-gift">
                              special gift box
                            </a>
                          </h6>
                          <div className="rate my-1 flex gap-x-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                            </svg>
                          </div>
                          <div className="mt-2">
                            <span className="line-through text-gray-600 font-semibold">
                              60.00
                            </span>
                            <span className="text-bs_warning font-semibold px-3">
                              $40.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-base-100 absolute -right-3 bottom-0 rounded-full p-2 w-16 h-16">
                        {" "}
                      </div>
                      <div
                        className="tooltip tooltip-left tooltip-secondary absolute -right-3 bottom-0 rounded-full p-2"
                        data-tip="Add To Cart"
                      >
                        <button className="btn rounded-full bg-pink-500 w-12 h-12 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-10 h-10 text-base-100 fill-current"
                            fill="currentColor"
                          >
                            <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="relative bg-pink-50 mb-6 rounded-2xl p-3 z-20">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 p-2 rounded-2xl bg-base-100">
                          <a href="#" title="specialGift">
                            <img
                              src="./images/04-special.png"
                              alt="special gift"
                              className="w-[100px] h-[100px] hover:scale-[1.1] transition-all delay-300 duration-500"
                            />
                          </a>
                        </div>
                        <div className="p-3">
                          <h6 className="capitalize text-gray-900 font-semibold sm:text-lg mb-2 hover:text-pink-500 transition-colors delay-300 duration-500">
                            <a href="#" title="special-gift">
                              special gift box
                            </a>
                          </h6>
                          <div className="rate my-1 flex gap-x-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              className="w-4 h-4 text-warning fill-current"
                              fill="currentColor"
                            >
                              <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                            </svg>
                          </div>
                          <div className="mt-2">
                            <span className="line-through text-gray-600 font-semibold">
                              60.00
                            </span>
                            <span className="text-bs_warning font-semibold px-3">
                              $40.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-base-100 absolute -right-3 bottom-0 rounded-full p-2 w-16 h-16">
                        {" "}
                      </div>
                      <div
                        className="tooltip tooltip-left tooltip-secondary absolute -right-3 bottom-0 rounded-full p-2"
                        data-tip="Add To Cart"
                      >
                        <button className="btn rounded-full bg-pink-500 w-12 h-12 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-10 h-10 text-base-100 fill-current"
                            fill="currentColor"
                          >
                            <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="funfactRihgt col-span-12 lg:col-span-7 z-20">
              <span className="text-pink-500 tracking-widest font-bold uppercase text-lg">
                Our Funfact
              </span>
              <h3 className="text-gray-900 text-lg md:text-4xl font-semibold mt-2">
                We Are{" "}
                <span className="text-2xl md:text-4xl font-semibold text-pink-500">
                  Gifoy, Amaze
                </span>
                With Perfect Gift.
              </h3>
              <p className=" text-gray-600 text-base leading-8 my-6">
                There are many variations of passages available but the majority
                have suffered alteration in some form by injected humour
                randomised words which don't look even If you are going to use a
                passage you need to be sure there isn't anything embarrassing
                hidden in the middle of text slightly making this the first true
                generator on the you are going to use a passage believable.
              </p>
              <div className="grid sm:grid-rows-2 md:grid-rows-1 md:grid-cols-3 gap-0 sm:gap-6 mt-20">
                <div className="sm:row-start-1 md:row-span-1 rounded-2xl text-center shadow-md px-5 py-4 z-20 bg-base-100 mb-10 sm:mb-0">
                  <img
                    src="./images/sale.jpg"
                    alt="sale"
                    className="w-[100px] mx-auto"
                  />
                  <div className="mt-5">
                    <span className="text-[50px] font-extrabold text-gray-900">
                      50
                    </span>
                    <sup className="text-gray-900 text-base font-semibold">
                      k
                    </sup>
                    <h5 className="text-gray-900 font-semibold text-xl">
                      Total Sales
                    </h5>
                  </div>
                </div>
                <div className="sm:row-start-1 md:row-span-1 rounded-2xl text-center shadow-md px-5 py-4 z-20 bg-base-100 mb-20 sm:mb-0">
                  <img
                    src="./images/sale.jpg"
                    alt="sale"
                    className="w-[100px] mx-auto"
                  />
                  <div className="mt-5">
                    <span className="text-[50px] font-extrabold text-gray-900">
                      90
                    </span>
                    <sup className="text-gray-900 text-base font-semibold">
                      k
                    </sup>
                    <h5 className="text-gray-900 font-semibold text-xl capitalize">
                      happy clients
                    </h5>
                  </div>
                </div>
                <div className="sm:row-start-2 md:row-span-1 rounded-2xl text-center shadow-md px-5 py-4 z-20 bg-base-100">
                  <img
                    src="./images/sale.jpg"
                    alt="sale"
                    className="w-[50px] sm:w-[100px] mx-auto"
                  />
                  <div className="mt-5">
                    <span className="text-[50px] font-extrabold text-gray-900">
                      150
                    </span>
                    <sup className="text-gray-900 text-base font-semibold">
                      +
                    </sup>
                    <h5 className="text-gray-900 font-semibold text-xl capitalize">
                      Team workers
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          style={{ backgroundImage: "url('./images/buble.jpg')" }}
          className="container-fluid -mt-10  sm:-mt-8 md:-mt-10 lg:-mt-20 xl:-mt-35 w-full h-[580px] bg-cover bg-center py-5 "
        >
          <div className="container text-center mt-2 mx-auto">
            <h2 className="text-base-100 font-semibold text-2xl md:text-[36px] capitalize mb-6 pt-28">
              Best Deals For This Week
            </h2>
            <p className="text-base-100">
              It is a long established fact that a reader will be distracted by
              the readable content of a
              <br />
              page when looking at its layout.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-8 mt-10 gap-2">
              <div className="flex flex-col bg-base-100 items-center justify-center rounded-2xl sm:col-start-2 lg:col-start-3 py-4 px-6">
                <span className="text-pink-500 text-3xl font-bold">352</span>
                <span className="text-gray-900 text-lg font-semibold">
                  DAYS
                </span>
              </div>
              <div className="flex flex-col bg-base-100 justify-center items-center rounded-2xl py-4 px-6">
                <span className="text-pink-500 text-3xl font-bold">00</span>
                <span className="text-gray-900 text-lg font-semibold">
                  HOURS
                </span>
              </div>
              <div className="flex flex-col bg-base-100 justify-center items-center rounded-2xl py-4 px-6">
                <span className="text-pink-500 text-3xl font-bold">02</span>
                <span className="text-gray-900 text-lg font-semibold">
                  MINUTES
                </span>
              </div>
              <div className="flex flex-col bg-base-100 justify-center items-center rounded-2xl py-4 px-6">
                <span className="text-pink-500 text-3xl font-bold">44</span>
                <span className="text-gray-900 text-lg font-semibold">
                  SECONDS
                </span>
              </div>
            </div>
          </div>{" "}
          <div className="container mx-auto mt-10">
            <div className="relative">
              <div className="grid sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-8 xl:grid-cols-10 gap-x-4">
                <div className="giftBoxPre flex-shrink-0 sm:col-span-3 lg:col-span-2">
                  <div className="rounded-2xl flex justify-center items-center relative bg-pink-50 py-5 mb-3 specialGift cursor-pointer">
                    <span className="text-base-100 rounded-xl badge badge-secondary block absolute top-5 right-7">
                      new
                    </span>
                    <img
                      src="./images/01-special.png"
                      className="w-[220px] h-[220px] lg:w-[170px] lg:h-[170px] xl:w-[220px] xl:h-[220px] "
                      alt="special-gift"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-md capitalize block">
                        special gift box
                      </span>
                      <div className="rate my-1 flex gap-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                        </svg>
                      </div>
                      <span className="price text-error text-ms font-medium mt-2">
                        $250.00
                      </span>
                    </div>
                    <div
                      className="tooltip tooltip-left tooltip-secondary"
                      data-tip="Add To cart"
                    >
                      <button className="btn border-none bg-primary rounded-full w-12 h-12">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-10 h-10 text-base-100 fill-current"
                          fill="currentColor"
                        >
                          <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="giftBoxPre flex-shrink-0 sm:col-span-3 lg:col-span-2">
                  <div className="rounded-2xl flex justify-center items-center relative bg-pink-50 py-5 mb-3 specialGift cursor-pointer">
                    <span className="text-base-100 rounded-xl badge badge-info block absolute top-5 right-7">
                      hot
                    </span>
                    <a href="#" title="product" className="">
                      <img
                        src="./images/02-special.png"
                        className="w-[220px] h-[220px] lg:w-[170px] lg:h-[170px] xl:w-[220px] xl:h-[220px]"
                        alt="special-gift"
                      />
                    </a>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-md capitalize">
                        special gift box
                      </span>
                      <div className="rate my-1 flex gap-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                        </svg>
                      </div>
                      <span className="price text-error text-ms font-medium mt-2">
                        $250.00
                      </span>
                    </div>
                    <div
                      className="tooltip tooltip-left tooltip-secondary"
                      data-tip="Add To cart"
                    >
                      <button className="btn border-none bg-primary rounded-full w-12 h-12">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-10 h-10 text-base-100 fill-current"
                          fill="currentColor"
                        >
                          <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="giftBoxPre flex-shrink-0  md:col-span-3 lg:col-span-2  hidden md:block">
                  <div className="py-5 mb-3 px-6 rounded-2xl bg-pink-50 flex justify-center items-center relative specialGift cursor-pointer">
                    <span className="text-base-100 rounded-xl badge badge-warning block absolute top-5 right-7">
                      outof stock
                    </span>
                    <img
                      src="./images/03-special.png"
                      className="w-[220px] h-[220px] lg:w-[170px] lg:h-[170px] xl:w-[220px] xl:h-[220px]"
                      alt="special-gift"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-md capitalize">
                        special gift box
                      </span>
                      <div className="rate my-1 flex gap-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                        </svg>
                      </div>
                      <span className="price text-error text-ms font-medium mt-2">
                        $250.00
                      </span>
                    </div>
                    <div
                      className="tooltip tooltip-left tooltip-secondary"
                      data-tip="Add To cart"
                    >
                      <button className="btn border-none bg-primary rounded-full w-12 h-12">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-10 h-10 text-base-100 fill-current"
                          fill="currentColor"
                        >
                          <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="giftBoxPre flex-shrink-0  lg:col-span-2 hidden lg:block">
                  <div className="py-5 mb-3 px-6 rounded-2xl bg-pink-50 flex justify-center items-center relative specialGift cursor-pointer">
                    <span className="text-base-100 rounded-xl badge badge-warning block absolute top-5 right-7">
                      outof stock
                    </span>
                    <img
                      src="./images/03-special.png"
                      className="w-[220px] h-[220px] lg:w-[170px] lg:h-[170px] xl:w-[220px] xl:h-[220px]"
                      alt="special-gift"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-md capitalize">
                        special gift box
                      </span>
                      <div className="rate my-1 flex gap-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                        </svg>
                      </div>
                      <span className="price text-error text-ms font-medium mt-2">
                        $250.00
                      </span>
                    </div>
                    <div
                      className="tooltip tooltip-left tooltip-secondary"
                      data-tip="Add To cart"
                    >
                      <button className="btn border-none bg-primary rounded-full w-12 h-12">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-10 h-10 text-base-100 fill-current"
                          fill="currentColor"
                        >
                          <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="giftBoxPre flex-shrink-0 xl:col-span-2 hidden xl:block">
                  <div className="py-5 mb-3 px-6 rounded-2xl bg-pink-50 flex justify-center items-center relative specialGift cursor-pointer">
                    <span className="text-sm text-base-100 px-3 py-1 rounded-3xl bg-warning block absolute top-5 right-7">
                      out of stock
                    </span>
                    <img
                      src="./images/03-special.png"
                      className="w-[220px] h-[220px] lg:w-[170px] lg:h-[170px] xl:w-[220px] xl:h-[220px]"
                      alt="special-gift"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-md capitalize">
                        special gift box
                      </span>
                      <div className="rate my-1 flex gap-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-warning fill-current"
                          fill="currentColor"
                        >
                          <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                        </svg>
                      </div>
                      <span className="price text-error text-ms font-medium mt-2">
                        $250.00
                      </span>
                    </div>
                    <div
                      className="tooltip tooltip-left tooltip-secondary"
                      data-tip="Add To cart"
                    >
                      <button className="btn border-none bg-primary rounded-full w-12 h-12">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-10 h-10 text-base-100 fill-current"
                          fill="currentColor"
                        >
                          <path d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* butooooooon?????---- */}
              {/* <div>
                <button className="bg-pink-500 rounded-full h-10 w-10 flex justify-center items-center absolute -right-2 top-1/3 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                    className="w-5 h-5"
                    fill="#ffffff"
                  >
                    <path d="M247.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L179.2 256 41.9 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                </button>
                <button className="bg-pink-500 rounded-full h-10 w-10 flex justify-center items-center absolute -left-2 top-1/3 cursor-pointer ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                    className="w-5 h-5"
                    fill="#ffffff"
                  >
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center mt-50">
        <div className="relative">
          <img
            src="./images/aboutUsBg.png"
            className="w-[150px] absolute -top-14"
            alt="shape"
          />
        </div>
        <div className="container mt-36">
          <div className="grid grid-cols-6 lg:gap-3">
            <div className="col-span-6 lg:col-span-3 z-10">
              <div className="flex justify-between lg:justify-center relative lg:gap-4 items-center">
                <div className="relative">
                  <img
                    src="./images/aboutUs01.jpg"
                    className="w-[400px] md:h-[485px] rounded-b-[100px] rounded-tr-[100px] rounded-tl-[30px] relative mx-auto z-20"
                    alt="Experience"
                  />
                  <div className="hidden sm:block absolute -top-4 -left-4 border-[5px] border-pink-500 h-[480px] w-[300px] rounded-b-[100px] rounded-tr-[100px] rounded-tl-[30px] z-10 rotate-2"></div>
                </div>
                <div className="absolute top-5 left-5 flex items-center bg-base-100 rounded-tr-[100px] rounded-b-[100px] rounded-tl-[30px] p-3 z-20">
                  <img
                    src="./images/employee.jpg"
                    className="w-[80px] rounded-full px-2"
                    alt="employee"
                  />
                  <span className="font-bold text-base text-gray-900 capitalize px-2">
                    30 years of
                    <br />
                    Experience
                  </span>
                </div>
                <div>
                  <img
                    src="./images/aboutUs02.jpg"
                    className="w-[150px] sm:w-[200px] rounded-full"
                    alt="gifts"
                  />
                  <img
                    src="./images/aboutUs03.jpg"
                    className="w-[150px] sm:w-[200px] rounded-b-full rounded-tr-full rounded-tl-[30px] mt-5"
                    alt="happy"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-3 mb-8 lg:mb-0 lg:px-3 mt-10 lg:mt-0 xl:mt-8">
              <span className="text-pink-500 tracking-widest font-bold uppercase text-lg">
                About Us
              </span>
              <h3 className="text-gray-900 text-2xl md:text-4xl font-semibold mt-2">
                We Provide Best And Quality
                <span className="text-2xl md:text-4xl font-semibold text-pink-500">
                  Gifts
                  <br />
                  Box
                </span>
                Product For You
              </h3>
              <p className=" text-gray-600 text-base leading-8 my-6">
                We are standard text ever since the when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
                It has survived not only five but also the leap into electronic
                remaining essentially by injected humour unchanged.
              </p>
              <div className="grid lg:grid-cols-4 gap-3 pb-6">
                <div className="aboutCheck col-span-2 flex gap-1 items-center">
                  <a
                    href="#"
                    title="check"
                    className="bg-primary w-8 h-8 flex items-center justify-center rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      className="text-base-100 fill-current w-4 h-4"
                      fill="currentColor"
                    >
                      <path d="M249.9 66.8c10.4-14.3 7.2-34.3-7.1-44.7s-34.3-7.2-44.7 7.1l-106 145.7-37.5-37.5c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c6.6 6.6 15.8 10 25.1 9.3s17.9-5.5 23.4-13.1l128-176zm128 136c10.4-14.3 7.2-34.3-7.1-44.7s-34.3-7.2-44.7 7.1l-170 233.7-69.5-69.5c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c6.6 6.6 15.8 10 25.1 9.3s17.9-5.5 23.4-13.1l192-264z" />
                    </svg>
                  </a>
                  <span className="font-bold text-gray-900 text-base">
                    Streamlined Shipping Experience
                  </span>
                </div>
                <div className="aboutCheck col-span-2 flex gap-1 items-center">
                  <a
                    href="#"
                    title="check"
                    className="bg-primary w-8 h-8 flex items-center justify-center rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      className="text-base-100 fill-current w-4 h-4"
                      fill="currentColor"
                    >
                      <path d="M249.9 66.8c10.4-14.3 7.2-34.3-7.1-44.7s-34.3-7.2-44.7 7.1l-106 145.7-37.5-37.5c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c6.6 6.6 15.8 10 25.1 9.3s17.9-5.5 23.4-13.1l128-176zm128 136c10.4-14.3 7.2-34.3-7.1-44.7s-34.3-7.2-44.7 7.1l-170 233.7-69.5-69.5c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c6.6 6.6 15.8 10 25.1 9.3s17.9-5.5 23.4-13.1l192-264z" />
                    </svg>
                  </a>
                  <span className="font-bold text-gray-900 text-base">
                    Affordable Modern Design
                  </span>
                </div>

                <div className="aboutCheck col-span-2 flex gap-1 items-center">
                  <a
                    href="#"
                    title="check"
                    className="bg-primary w-8 h-8 flex items-center justify-center rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      className="text-base-100 fill-current w-4 h-4"
                      fill="currentColor"
                    >
                      <path d="M249.9 66.8c10.4-14.3 7.2-34.3-7.1-44.7s-34.3-7.2-44.7 7.1l-106 145.7-37.5-37.5c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c6.6 6.6 15.8 10 25.1 9.3s17.9-5.5 23.4-13.1l128-176zm128 136c10.4-14.3 7.2-34.3-7.1-44.7s-34.3-7.2-44.7 7.1l-170 233.7-69.5-69.5c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c6.6 6.6 15.8 10 25.1 9.3s17.9-5.5 23.4-13.1l192-264z" />
                    </svg>
                  </a>
                  <span className="font-bold text-gray-900 text-base">
                    Price & Easy To Shop
                  </span>
                </div>
                <div className="aboutCheck col-span-2 flex gap-1 items-center">
                  <a
                    href="#"
                    title="check"
                    className="bg-primary w-8 h-8 flex items-center justify-center rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      className="text-base-100 fill-current w-4 h-4"
                      fill="currentColor"
                    >
                      <path d="M249.9 66.8c10.4-14.3 7.2-34.3-7.1-44.7s-34.3-7.2-44.7 7.1l-106 145.7-37.5-37.5c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c6.6 6.6 15.8 10 25.1 9.3s17.9-5.5 23.4-13.1l128-176zm128 136c10.4-14.3 7.2-34.3-7.1-44.7s-34.3-7.2-44.7 7.1l-170 233.7-69.5-69.5c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c6.6 6.6 15.8 10 25.1 9.3s17.9-5.5 23.4-13.1l192-264z" />
                    </svg>
                  </a>
                  <span className="font-bold text-gray-900 text-base">
                    We Made Awesome Products
                  </span>
                </div>
              </div>
              <button className="bg-pink-500 transition-all delay-50 duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] text-base-100 px-3 py-3 rounded-xl font-semibold md:text-base cursor-pointer mt-4 hover:bg-gray-900">
                <span className="inline-block px-1"> Discover More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 text-base-100 fill-current inline-block"
                  fill="currentColor"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-pink-50  mt-16">
        <div className="container py-14">
          <div className="grid grid-cols-6 items-center py-8">
            <div className="col-span-6 md:col-span-2">
              <span className="text-pink-500 tracking-widest font-bold uppercase text-lg">
                Why Choose Us
              </span>
              <h3 className="text-gray-900 text-lg md:text-4xl font-semibold mt-2">
                We Provide Premium
                <br />
                Quality Gifts For You
              </h3>
            </div>
            <img
              src="./images/choosing.jpg"
              className="col-span-6 md:w-[416px] md:col-span-2 rounded-full mt-6 md:mt-0"
              alt="choose"
            />
            <p className="col-span-6 md:col-span-2 text-gray-600 text-base leading-8 my-6 pl-2">
              There are many variations of passages available but the majority
              have suffered you are going to use a passage you need to be sure
              alteration in some form by injected humour randomised words even
              slightly believable.
            </p>
          </div>
          <div className="grid grid-cols-6 gap-6 lg:gap-2 xl:gap-6 mt-12">
            <div className="col-span-6 lg:col-span-2 flex py-5 px-4 bg-base-100 rounded-2xl">
              <div className="flex-shrink-0 p-2">
                <img
                  src="./images/waranty.jpg"
                  alt="waranty"
                  className="w-[60px] md:w-[80px]"
                />
              </div>
              <div className="p-2">
                <h5 className="text-gray-900 font-semibold text-base sm:text-2xl capitalize">
                  trusted partner
                </h5>
                <p className=" text-gray-600 text-base leading-8 mt-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-2 flex py-5 px-4 bg-base-100 rounded-2xl">
              <div className="flex-shrink-0 p-2">
                <img
                  src="./images/price.jpg"
                  alt="special gift"
                  className="w-[60px] md:w-[80px]"
                />
              </div>
              <div className="p-2">
                <h5 className="text-gray-900 font-semibold text-base sm:text-2xl capitalize">
                  Affordable price{" "}
                </h5>
                <p className="text-gray-600 text-base leading-8 mt-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-2 flex py-5 px-4 bg-base-100 rounded-2xl">
              <div className="flex-shrink-0 p-2">
                <img
                  src="./images/delivery.jpg"
                  alt="special gift"
                  className="w-[60px] md:w-[80px]"
                />
              </div>
              <div className="p-2">
                <h5 className="text-gray-900 font-semibold text-base sm:text-2xl capitalize">
                  free shipping{" "}
                </h5>
                <p className="text-gray-600 text-base leading-8 mt-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="container mt-16">
          <div className="text-center mb-10">
            <span className="text-pink-500 tracking-widest font-bold uppercase text-lg">
              Our Gallery
            </span>
            <h3 className="text-gray-900 text-lg md:text-4xl font-semibold my-2">
              Let's Check Our Photo
              <span className="text-2xl md:text-4xl font-semibold text-pink-500">
                Gallery
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-4 grid-rows-2 gap-2 md:gap-4 lg:gap-6">
            <div className="relative">
              <img
                className="col-span-1 row-span-1 rounded-2xl"
                src="./images/gallery01.jpg"
                alt="Gallery"
              />
              <div className="hidden bg-bs_purple absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-2xl w-[305px] h-[345px] col-span-1 row-span-1 ">
                <a
                  href="#"
                  className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] py-5 px-6 bg-base-100 rounded-full"
                  title="gallery"
                >
                  <i className="fa-solid fa-plus text-pink-50 text-[32px]"></i>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                className="col-span-1 row-span-1 rounded-2xl"
                src="./images/gallery02.jpg"
                alt="Gallery"
              />
              <div className="hidden bg-bs_purple absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-2xl w-[305px] h-[345px] col-span-1 row-span-1 ">
                <a
                  href="#"
                  className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] py-5 px-6 bg-base-100 rounded-full"
                  title="gallery"
                >
                  <i className="fa-solid fa-plus text-pink-50 text-[32px]"></i>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                className="col-span-1 row-span-1 rounded-2xl"
                src="./images/gallery03.jpg"
                alt="Gallery"
              />
              <div className="hidden bg-bs_purple absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-2xl w-[305px] h-[345px] col-span-1 row-span-1 ">
                <a
                  href="#"
                  className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] py-5 px-6 bg-base-100 rounded-full"
                  title="gallery"
                >
                  <i className="fa-solid fa-plus text-pink-50 text-[32px]"></i>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                className="col-span-1 row-span-1 rounded-2xl"
                src="./images/gallery04.jpg"
                alt="Gallery"
              />
              <div className="hidden bg-bs_purple absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-2xl w-[305px] h-[345px] col-span-1 row-span-1 ">
                <a
                  href="#"
                  className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] py-5 px-6 bg-base-100 rounded-full"
                  title="gallery"
                >
                  <i className="fa-solid fa-plus text-pink-50 text-[32px]"></i>
                </a>
              </div>
            </div>
            <img
              className="w-full  col-span-2 row-span-1 rounded-2xl"
              src="./images/gallery05.jpg"
              alt="Gallery"
            />
            <div className="relative">
              <img
                className="col-span-1 row-span-1 rounded-2xl"
                src="./images/gallery06.jpg"
                alt="Gallery"
              />
              <div className="hidden bg-bs_purple absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-2xl w-[305px] h-[345px] col-span-1 row-span-1 ">
                <a
                  href="#"
                  className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] py-5 px-6 bg-base-100 rounded-full"
                  title="gallery"
                >
                  <i className="fa-solid fa-plus text-pink-50 text-[32px]"></i>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                className="col-span-1 row-span-1 rounded-2xl"
                src="./images/gallery07.jpg"
                alt="Gallery"
              />
              <div className="hidden bg-bs_purple absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-2xl w-[305px] h-[345px] col-span-1 row-span-1 ">
                <a
                  href="#"
                  className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] py-5 px-6 bg-base-100 rounded-full"
                  title="gallery"
                >
                  <i className="fa-solid fa-plus text-pink-50 text-[32px]"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------      Testimonials       --------    */}
      <section className="flex justify-center">
        <div
          style={{ backgroundImage: "url('./images/tetsimonialBg.png')" }}
          className="w-full h-[550px] sm:h-[500px] md:h-[700px] lg:h-[600px] bg-cover bg-center mt-14"
        >
          <div className="container mx-auto">
            <div className="text-center pt-14">
              <span className="text-pink-500 tracking-widest font-bold uppercase text-lg">
                Testimonials
              </span>
              <h3 className="text-gray-900 text-lg md:text-4xl font-semibold mt-2">
                What Our Client
                <span className="text-2xl md:text-4xl font-semibold text-pink-500">
                  Say's
                </span>
                About Us
              </h3>
            </div>
            <div className="relative overflow-x-hidden">
              <div className="flex justify-between sm:gap-14 md:gap-8 lg:gap-3 mt-12 animate-slide w-[100%]">
                <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[24%] flex-shrink-0 bg-base-100 rounded-b-[60px] rounded-tl-[60px] rounded-tr-3xl py-10 px-6">
                  <div className="flex items-center gap-2">
                    <img
                      src="./images/testi01.jpg"
                      alt="Testimonials"
                      className="rounded-full w-[70px] border-8  border-pink-500 border-t-0 border-r-0"
                    />
                    <div>
                      <h6 className="capitalize text-gray-900 font-semibold sm:text-lg">
                        reid e butt{" "}
                      </h6>
                      <span className="text-pink-500 font-semibold capitalize">
                        customer
                      </span>
                    </div>
                  </div>
                  <hr className="h-px bg-base-200 border-0 my-4" />
                  <p className="text-gray-600 my-4">
                    There are many variations of long passages available but the
                    content majority have suffered to the editor page when
                    looking at its layout alteration in some injected.
                  </p>
                  <div className="rate my-1 flex gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                    </svg>
                  </div>
                  <div className="relative">
                    <img
                      src="./images/quote.png"
                      alt="quote"
                      className="w-[80px] opacity-45 absolute right-3 bottom-0 p-3"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[24%] flex-shrink-0 bg-base-100 rounded-b-[60px] rounded-tl-[60px] rounded-tr-3xl py-10 px-6">
                  <div className="flex items-center gap-2">
                    <img
                      src="./images/testi02.jpg"
                      alt="Testimonials"
                      className="rounded-full w-[70px] border-8  border-pink-500 border-t-0 border-r-0"
                    />
                    <div>
                      <h6 className="capitalize text-gray-900 font-semibold sm:text-lg">
                        parker gimenez{" "}
                      </h6>
                      <span className="text-pink-500 font-semibold capitalize">
                        customer
                      </span>
                    </div>
                  </div>
                  <hr className="h-px bg-base-200 border-0 my-4" />
                  <p className="text-gray-600 my-4">
                    There are many variations of long passages available but the
                    content majority have suffered to the editor page when
                    looking at its layout alteration in some injected.
                  </p>
                  <div className="rate my-1 flex gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                    </svg>
                  </div>
                  <div className="relative">
                    <img
                      src="./images/quote.png"
                      alt="quote"
                      className="w-[80px] opacity-45 absolute right-3 bottom-0 p-3"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[24%] flex-shrink-0 bg-base-100 rounded-b-[60px] rounded-tl-[60px] rounded-tr-3xl py-10 px-6">
                  <div className="flex items-center gap-2">
                    <img
                      src="./images/testi03.jpg"
                      alt="Testimonials"
                      className="rounded-full w-[70px] border-8  border-pink-500 border-t-0 border-r-0"
                    />
                    <div>
                      <h6 className="capitalize text-gray-900 font-semibold sm:text-lg">
                        gordo novak{" "}
                      </h6>
                      <span className="text-pink-500 font-semibold capitalize">
                        customer
                      </span>
                    </div>
                  </div>
                  <hr className="h-px bg-base-200 border-0 my-4" />
                  <p className="text-gray-600 my-4">
                    There are many variations of long passages available but the
                    content majority have suffered to the editor page when
                    looking at its layout alteration in some injected.
                  </p>
                  <div className="rate my-1 flex gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                    </svg>
                  </div>
                  <div className="relative">
                    <img
                      src="./images/quote.png"
                      alt="quote"
                      className="w-[80px] opacity-45 absolute right-3 bottom-0 p-3"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[24%] flex-shrink-0 bg-base-100 rounded-b-[60px] rounded-tl-[60px] rounded-tr-3xl py-10 px-6">
                  <div className="flex items-center gap-2">
                    <img
                      src="./images/testi04.jpg"
                      alt="Testimonials"
                      className="rounded-full w-[70px] border-8  border-pink-500 border-t-0 border-r-0"
                    />
                    <div>
                      <h6 className="capitalize text-gray-900 font-semibold sm:text-lg">
                        silvya h green{" "}
                      </h6>
                      <span className="text-pink-500 font-semibold capitalize">
                        customer
                      </span>
                    </div>
                  </div>
                  <hr className="h-px bg-base-200 border-0 my-4" />
                  <p className="text-gray-600 my-4">
                    There are many variations of long passages available but the
                    content majority have suffered to the editor page when
                    looking at its layout alteration in some injected.
                  </p>
                  <div className="rate my-1 flex gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                    </svg>
                  </div>
                  <div className="relative">
                    <img
                      src="./images/quote.png"
                      alt="quote"
                      className="w-[80px] opacity-45 absolute right-3 bottom-0 p-3"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[24%] flex-shrink-0 bg-base-100 rounded-b-[60px] rounded-tl-[60px] rounded-tr-3xl py-10 px-6">
                  <div className="flex items-center gap-2">
                    <img
                      src="./images/testi05.jpg"
                      alt="Testimonials"
                      className="rounded-full w-[70px] border-8  border-pink-500 border-t-0 border-r-0"
                    />
                    <div>
                      <h6 className="capitalize text-gray-900 font-semibold sm:text-lg">
                        reid e butt{" "}
                      </h6>
                      <span className="text-pink-500 font-semibold capitalize">
                        customer
                      </span>
                    </div>
                  </div>
                  <hr className="h-px bg-base-200 border-0 my-4" />
                  <p className="text-gray-600 my-4">
                    There are many variations of long passages available but the
                    content majority have suffered to the editor page when
                    looking at its layout alteration in some injected.
                  </p>
                  <div className="rate my-1 flex gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-pink-500 fill-current"
                      fill="currentColor"
                    >
                      <path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z" />
                    </svg>
                  </div>
                  <div className="relative">
                    <img
                      src="./images/quote.png"
                      alt="quote"
                      className="w-[80px] absolute right-3 bottom-0 p-3 opacity-45"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------     Blog       --------    */}

      <section className="flex justify-center">
        <div className="container mt-16">
          <div className="text-center pt-14">
            <span className="text-pink-500 tracking-widest font-bold uppercase text-lg">
              Our Blog
            </span>
            <h3 className="text-gray-900 text-lg md:text-4xl font-semibold mt-2">
              Our Latest News &
              <span className="text-2xl md:text-4xl font-semibold text-pink-500">
                Blog{" "}
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-12 md:gap-4 lg:gap-6 mt-8">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 border-gray-200 border-[1px] rounded-2xl py-6 px-4 mb-6 md:mb-0">
              <div className="relative">
                <img
                  src="./src/assets/images/blog01.jpg"
                  alt="blogphoto"
                  className="rounded-2xl mx-auto"
                />
                <div className="text-base-100 bg-primary font-semibold absolute top-6 right-0 py-1 px-2 rounded-l-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-4 h-4 text-base-100 fill-current inline-block mx-1"
                    fill="currentColor"
                  >
                    <path d="M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zM384 432c8.8 0 16-7.2 16-16l0-64-88 0 0 80 72 0zm16-128l0-80-88 0 0 80 88 0zm-136 0l0-80-80 0 0 80 80 0zm-128 0l0-80-88 0 0 80 88 0zM48 352l0 64c0 8.8 7.2 16 16 16l72 0 0-80-88 0zm136 0l0 80 80 0 0-80-80 0zM120 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0z" />
                  </svg>
                  <span>Aus 12,2024</span>
                </div>
              </div>
              <div className="mt-4 lg:flex lg:items-center gap-4 md:gap-2 lg:gap-6">
                <a
                  href="#"
                  title="nameUser"
                  className="hover:text-pink-500 transition-colors ease-in delay-100 duration-300 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-4 w-4 text-pink-500 fill-current"
                    fill="currentColor"
                  >
                    <path d="M406.5 399.6C387.4 352.9 341.5 320 288 320l-64 0c-53.5 0-99.4 32.9-118.5 79.6-35.6-37.3-57.5-87.9-57.5-143.6 0-114.9 93.1-208 208-208s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3l64 0c38.8 0 71.2 27.6 78.5 64.3zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" />
                  </svg>
                  <span className="capitalize font-semibold text-sm px-1">
                    {" "}
                    By Alicia Davis
                  </span>
                </a>
                <a
                  href="#"
                  title="comments"
                  className="hover:text-pink-500 transition-colors ease-in delay-100 duration-300 flex"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="h-4 w-4 text-pink-500 fill-current"
                    fill="currentColor"
                  >
                    <path d="M76.2 258.7c6.1-15.2 4-32.6-5.6-45.9-14.5-20.1-22.6-43.7-22.6-68.8 0-66.8 60.5-128 144-128s144 61.2 144 128-60.5 128-144 128c-15.9 0-31.1-2.3-45.3-6.5-10.3-3.1-21.4-2.5-31.4 1.5l-50.4 20.2 11.4-28.5zM0 144c0 35.8 11.6 69.1 31.7 96.8L1.9 315.2c-1.3 3.2-1.9 6.6-1.9 10 0 14.8 12 26.8 26.8 26.8 3.4 0 6.8-.7 10-1.9l96.3-38.5c18.6 5.5 38.4 8.4 58.9 8.4 106 0 192-78.8 192-176S298-32 192-32 0 46.8 0 144zM384 512c20.6 0 40.3-3 58.9-8.4l96.3 38.5c3.2 1.3 6.6 1.9 10 1.9 14.8 0 26.8-12 26.8-26.8 0-3.4-.7-6.8-1.9-10l-29.7-74.4c20-27.8 31.7-61.1 31.7-96.8 0-82.4-61.7-151.5-145-170.7-1.6 16.3-5.1 31.9-10.1 46.9 63.9 14.8 107.2 67.3 107.2 123.9 0 25.1-8.1 48.7-22.6 68.8-9.6 13.3-11.7 30.6-5.6 45.9l11.4 28.5-50.4-20.2c-10-4-21.1-4.5-31.4-1.5-14.2 4.2-29.4 6.5-45.3 6.5-72.2 0-127.1-45.7-140.7-101.2-15.6 3.2-31.7 5-48.1 5.2 16.4 81.9 94.7 144 188.8 144z" />
                  </svg>
                  <span className="capitalize font-semibold text-sm px-1">
                    {" "}
                    2.5k Comments
                  </span>
                </a>
              </div>
              <hr className="h-px bg-base-200 border-0 my-4" />
              <h2 className="text-gray-900 font-semibold text:lg md:text-xl capitalize mb-4 hover:text-pink-500 transition-colors ease-in delay-100 duration-300">
                <a href="#" title="blogtitle">
                  There are many variations passage available majority suffered.
                </a>
              </h2>
              <p className="text-gray-600 text-base leading-8 mt-2">
                There are many variations available the majority have suffered
                alteration randomised words.
              </p>
              <button
                className="bg-pink-500 hover:bg-gray-900 transition-all delay-100 duration-300
          ease-[cubic-bezier(0.25,0.46,0.45,0.94)] text-base-100 px-5 py-3 rounded-xl font-semibold md:text-base
          max-w-[150px] mt-8 cursor-pointer"
              >
                <span className="px-1">Read More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 text-base-100 fill-current inline-block"
                  fill="currentColor"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </button>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 border-gray-200 border-[1px] rounded-2xl py-6 px-4 mb-6 md:mb-0 ">
              <div className=" relative">
                <img
                  src="./src/assets/images/blog01.jpg"
                  alt="blogphoto"
                  className="rounded-2xl mx-auto"
                />
                <div className="text-base-100 bg-primary font-semibold absolute top-6 right-0 py-1 px-2 rounded-l-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-4 h-4 text-base-100 fill-current inline-block mx-1"
                    fill="currentColor"
                  >
                    <path d="M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zM384 432c8.8 0 16-7.2 16-16l0-64-88 0 0 80 72 0zm16-128l0-80-88 0 0 80 88 0zm-136 0l0-80-80 0 0 80 80 0zm-128 0l0-80-88 0 0 80 88 0zM48 352l0 64c0 8.8 7.2 16 16 16l72 0 0-80-88 0zm136 0l0 80 80 0 0-80-80 0zM120 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0z" />
                  </svg>
                  <span>Aus 15,2024</span>
                </div>
              </div>
              <div className="mt-4 lg:flex lg:items-center gap-4 md:gap-2 lg:gap-6">
                <a
                  href="#"
                  title="nameUser"
                  className="hover:text-pink-500 transition-colors ease-in delay-100 duration-300 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-4 w-4 text-pink-500 fill-current"
                    fill="currentColor"
                  >
                    <path d="M406.5 399.6C387.4 352.9 341.5 320 288 320l-64 0c-53.5 0-99.4 32.9-118.5 79.6-35.6-37.3-57.5-87.9-57.5-143.6 0-114.9 93.1-208 208-208s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3l64 0c38.8 0 71.2 27.6 78.5 64.3zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" />
                  </svg>
                  <span className="capitalize font-semibold text-sm px-1">
                    {" "}
                    By Alicia Davis
                  </span>
                </a>
                <a
                  href="#"
                  title="comments"
                  className="hover:text-pink-500 transition-colors ease-in delay-100 duration-300 flex"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="h-4 w-4 text-pink-500 fill-current"
                    fill="currentColor"
                  >
                    <path d="M76.2 258.7c6.1-15.2 4-32.6-5.6-45.9-14.5-20.1-22.6-43.7-22.6-68.8 0-66.8 60.5-128 144-128s144 61.2 144 128-60.5 128-144 128c-15.9 0-31.1-2.3-45.3-6.5-10.3-3.1-21.4-2.5-31.4 1.5l-50.4 20.2 11.4-28.5zM0 144c0 35.8 11.6 69.1 31.7 96.8L1.9 315.2c-1.3 3.2-1.9 6.6-1.9 10 0 14.8 12 26.8 26.8 26.8 3.4 0 6.8-.7 10-1.9l96.3-38.5c18.6 5.5 38.4 8.4 58.9 8.4 106 0 192-78.8 192-176S298-32 192-32 0 46.8 0 144zM384 512c20.6 0 40.3-3 58.9-8.4l96.3 38.5c3.2 1.3 6.6 1.9 10 1.9 14.8 0 26.8-12 26.8-26.8 0-3.4-.7-6.8-1.9-10l-29.7-74.4c20-27.8 31.7-61.1 31.7-96.8 0-82.4-61.7-151.5-145-170.7-1.6 16.3-5.1 31.9-10.1 46.9 63.9 14.8 107.2 67.3 107.2 123.9 0 25.1-8.1 48.7-22.6 68.8-9.6 13.3-11.7 30.6-5.6 45.9l11.4 28.5-50.4-20.2c-10-4-21.1-4.5-31.4-1.5-14.2 4.2-29.4 6.5-45.3 6.5-72.2 0-127.1-45.7-140.7-101.2-15.6 3.2-31.7 5-48.1 5.2 16.4 81.9 94.7 144 188.8 144z" />
                  </svg>
                  <span className="capitalize font-semibold text-sm px-1">
                    {" "}
                    3.1k Comments
                  </span>
                </a>
              </div>
              <hr className="h-px bg-base-200 border-0 my-4" />
              <h2 className="text-gray-900 font-semibold text:lg md:text-xl capitalize mb-4 hover:text-pink-500 transition-colors ease-in delay-100 duration-300">
                <a href="#" title="blogtitle">
                  Contrary to popular belief making simply random piece latin.
                </a>
              </h2>
              <p className="text-gray-600 text-base leading-8 mt-2">
                There are many variations available the majority have suffered
                alteration randomised words.
              </p>
              <button
                className="bg-pink-500 hover:bg-gray-900 transition-all delay-100 duration-300
          ease-[cubic-bezier(0.25,0.46,0.45,0.94)] text-base-100 px-5 py-3 rounded-xl font-semibold md:text-base
          max-w-[150px] mt-8 cursor-pointer"
              >
                <span className="px-1">Read More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 text-base-100 fill-current inline-block"
                  fill="currentColor"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </button>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 border-gray-200 border-[1px] rounded-2xl py-6 px-4">
              <div className="relative">
                <img
                  src="./src/assets/images/blog01.jpg"
                  alt="blogphoto"
                  className="rounded-2xl mx-auto"
                />
                <div className="text-base-100 bg-primary font-semibold absolute top-6 right-0 py-1 px-2 rounded-l-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-4 h-4 text-base-100 fill-current inline-block mx-1"
                    fill="currentColor"
                  >
                    <path d="M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zM384 432c8.8 0 16-7.2 16-16l0-64-88 0 0 80 72 0zm16-128l0-80-88 0 0 80 88 0zm-136 0l0-80-80 0 0 80 80 0zm-128 0l0-80-88 0 0 80 88 0zM48 352l0 64c0 8.8 7.2 16 16 16l72 0 0-80-88 0zm136 0l0 80 80 0 0-80-80 0zM120 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0z" />
                  </svg>
                  <span>Aus 18,2024</span>
                </div>
              </div>
              <div className="mt-4 lg:flex lg:items-center gap-4 md:gap-2 lg:gap-6">
                <a
                  href="#"
                  title="nameUser"
                  className="hover:text-pink-500 transition-colors ease-in delay-100 duration-300 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-4 w-4 text-pink-500 fill-current"
                    fill="currentColor"
                  >
                    <path d="M406.5 399.6C387.4 352.9 341.5 320 288 320l-64 0c-53.5 0-99.4 32.9-118.5 79.6-35.6-37.3-57.5-87.9-57.5-143.6 0-114.9 93.1-208 208-208s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3l64 0c38.8 0 71.2 27.6 78.5 64.3zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" />
                  </svg>
                  <span className="capitalize font-semibold text-sm px-1">
                    {" "}
                    By Alicia Davis
                  </span>
                </a>
                <a
                  href="#"
                  title="comments"
                  className="hover:text-pink-500 transition-colors ease-in delay-100 duration-500 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="h-4 w-4 text-pink-500 fill-current"
                    fill="currentColor"
                  >
                    <path d="M76.2 258.7c6.1-15.2 4-32.6-5.6-45.9-14.5-20.1-22.6-43.7-22.6-68.8 0-66.8 60.5-128 144-128s144 61.2 144 128-60.5 128-144 128c-15.9 0-31.1-2.3-45.3-6.5-10.3-3.1-21.4-2.5-31.4 1.5l-50.4 20.2 11.4-28.5zM0 144c0 35.8 11.6 69.1 31.7 96.8L1.9 315.2c-1.3 3.2-1.9 6.6-1.9 10 0 14.8 12 26.8 26.8 26.8 3.4 0 6.8-.7 10-1.9l96.3-38.5c18.6 5.5 38.4 8.4 58.9 8.4 106 0 192-78.8 192-176S298-32 192-32 0 46.8 0 144zM384 512c20.6 0 40.3-3 58.9-8.4l96.3 38.5c3.2 1.3 6.6 1.9 10 1.9 14.8 0 26.8-12 26.8-26.8 0-3.4-.7-6.8-1.9-10l-29.7-74.4c20-27.8 31.7-61.1 31.7-96.8 0-82.4-61.7-151.5-145-170.7-1.6 16.3-5.1 31.9-10.1 46.9 63.9 14.8 107.2 67.3 107.2 123.9 0 25.1-8.1 48.7-22.6 68.8-9.6 13.3-11.7 30.6-5.6 45.9l11.4 28.5-50.4-20.2c-10-4-21.1-4.5-31.4-1.5-14.2 4.2-29.4 6.5-45.3 6.5-72.2 0-127.1-45.7-140.7-101.2-15.6 3.2-31.7 5-48.1 5.2 16.4 81.9 94.7 144 188.8 144z" />
                  </svg>
                  <span className="capitalize font-semibold text-sm px-1">
                    {" "}
                    1.6k Comments
                  </span>
                </a>
              </div>
              <hr className="h-px bg-base-200 border-0 my-4" />
              <h2 className="text-gray-900 font-semibold text:lg md:text-xl capitalize mb-4 hover:text-pink-500 transition-colors ease-in delay-100 duration-300">
                <a href="#" title="blogtitle">
                  If you are going use passage you need sure there middle
                  text.{" "}
                </a>
              </h2>
              <p className="text-gray-600 text-base leading-8 mt-2">
                There are many variations available the majority have suffered
                alteration randomised words.
              </p>
              <button
                className="bg-pink-500 hover:bg-gray-900 transition-all delay-100 duration-300
          ease-[cubic-bezier(0.25,0.46,0.45,0.94)] text-base-100 px-5 py-3 rounded-xl font-semibold md:text-base
          max-w-[150px] mt-8 cursor-pointer"
              >
                <span className="px-1">Read More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 text-base-100 fill-current inline-block"
                  fill="currentColor"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="flex justify-center">
        <div className="container mt-16">
          <div
            style={{ backgroundImage: "url('./images/newsletter.jpg')" }}
            className="w-full h-80 bg-cover bg-center rounded-2xl py-10 text-center"
          >
            <h4 className="text-base-100 font-bold uppercase text-2xl mt-10 mb-4">
              Get <span className="text-[#FBA707] "> 20%</span> Off Discount
              Coupon
            </h4>
            <span className="text-base-100 font-semibold text-lg">
              by subscribe our newsletter
            </span>
            <div className="mt-10 relative">
              <form action="#">
                <input
                  type="email"
                  className="form-control rounded-full w-[40%] p-4"
                  placeholder=" Your Email Address"
                />
                <button
                  type="submit"
                  className="bg-pink-500 text-base-100 text-lg rounded-full py-2 px-4 absolute top-2 right-[10%] sm:right-[29%]"
                >
                  Subscribe
                  <i className="fa-regular fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      <section className="container-fluid">
        <div className="bg-pink-50 flex justify-center mt-20">
          <div className="text-center mt-16 py-10">
            <h4 className="text-bs_textColor font-semibold uppercase text-2xl mb-4">
              Trusted by over <span className="text-pink-500"> 4.5k+ </span>{" "}
              companies
            </h4>
            <div className="my-10 grid grid-cols-6 justify-center gap-5 items-center ">
              <img
                src="./images/brand01.png"
                className="w-[180px] col-span-2 md:col-span-1 py-2"
                alt="companyName"
              />
              <img
                src="./images/brand02.png"
                className="w-[180px] col-span-2 md:col-span-1"
                alt="companyName"
              />
              <img
                src="./images/brand03.png"
                className="w-[180px] col-span-2 md:col-span-1"
                alt="companyName"
              />
              <img
                src="./images/brand04.png"
                className="w-[180px] col-span-2 md:col-span-1"
                alt="companyName"
              />
              <img
                src="./images/brand05.png"
                className="w-[180px] col-span-2 md:col-span-1"
                alt="companyName"
              />
              <img
                src="./images/brand06.png"
                className="w-[180px] col-span-2 md:col-span-1"
                alt="companyName"
              />
            </div>
            <button className="bg-pink-500 transition-all delay-50 duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] text-base-100 px-3 py-3 rounded-xl font-semibold  cursor-pointer mt-4 hover:bg-gray-900">
              <span className="inline-block px-1 capitalize md:text-base">
                view all brands
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 text-base-100 fill-current inline-block"
                fill="currentColor"
              >
                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
