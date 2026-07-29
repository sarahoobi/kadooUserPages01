const ProductCard = ({ img, i = null }) => {
  return (
    <div className="relatedItemsBox col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3 border border-pink-50 rounded-2xl p-3 hover:border-pink-500 transition-colors duration-500 delay-150 ease-in-out cursor-pointer ">
      <div className="relatedItemsWrap relative bg-pink-50 rounded-2xl p-2">
        {i === 0 && (
          <span className="capitalize text-base-100 badge-secondary badge py-[2px] rounded-2xl absolute right-4">
            new
          </span>
        )}
        {i === 1 && (
          <span className="capitalize text-base-100 badge badge-info py-[2px] rounded-2xl text-sm absolute right-4 ">
            hot
          </span>
        )}
        {i === 2 && (
          <span className="capitalize text-base-100 badge badge-warning py-[2px] rounded-2xl text-sm absolute right-4">
            out of stock
          </span>
        )}

        <img
          src={img}
          className="w-[220px] h-[220px] lg:w-[170px] lg:h-[170px] xl:w-[220px] xl:h-[220px] mx-auto"
          alt="special-gift"
        />
        {/* <div className="selectOption opacity-0 flex justify-center gap-1 text-base-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-showOption">
          <a
            href="/help"
            title="visit"
            className="visit bg-pink-500 w-10 h-10 flex justify-center items-center rounded-full relative"
            data-tooltip-target="tooltip-view"
          >
            <i className="fa-regular fa-eye relative normal-case"></i>
          </a>
          <a
            href="#"
            title="wishlist"
            className="wishList bg-pink-500 w-10 h-10 flex justify-center items-center rounded-full"
            data-tooltip-target="tooltip-WishList"
          >
            <i className="fa-regular fa-heart"></i>
          </a>
          <a
            className="compare bg-pink-500 w-10 h-10 flex justify-center items-center rounded-full"
            data-tooltip-target="tooltip-compare"
          >
            <i className="fa-solid fa-arrows-rotate bg-pink-500 p-2 rounded-full"></i>
          </a>
        </div> */}
        {/* <span
          className="tooltipView opacity-0 absolute bottom-24 left-14 capitalize text-sm text-base-100 bg-pink-500 py-1 px-3 rounded-xl"
          id="tooltip-view"
          role="tooltip"
        >
          Quickview
        </span>
        <span
          className="tooltipWishList opacity-0 absolute bottom-24 left-20 capitalize text-sm text-base-100 bg-pink-500 py-1 px-3 rounded-xl"
          id="tooltip-WishList"
          role="tooltip"
        >
          addtowishlist
        </span>
        <span
          className="tooltipCompare opacity-0 absolute bottom-24 left-28 capitalize text-sm text-base-100 bg-pink-500 py-1 px-3 rounded-xl"
          id="tooltip-compare"
          role="tooltip"
        >
          add to compare
        </span> */}
      </div>
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h6 className="capitalize text-lg font-semibold mt-2 text-bs_textColor">
            special gifts
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
          <span className="text-sm text-warning font-regular block">
            $100.0
          </span>
        </div>
        {/* <a
          href="#"
          title="add-to-cart"
          data-tooltip-target="tooltip-addToCart"
          className="flex justify-center items-center bg-purple-500 rounded-full w-10 h-10 hover:bg-pink-500 transition-colors duration-500 delay-150 ease-in-out"
        >
          <i className="fa-solid fa-bag-shopping text-base-100 text-lg"></i>
        </a>
        <span
          className="bg-pink-500 text-base-100 text-sm rounded-3xl py-1 px-2"
          id="tooltip-addToCart"
          role="tooltip"
        >
          add to cart
        </span> */}
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
  );
};

export default ProductCard;
