const ShopSortBar = () => {
  return (
    <div className="sortingBar sm:flex sm:justify-between bg-base-100 border border-gray-200 py-3 px-4 rounded-xl">
      <form
        action="#"
        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2 w-full"
      >
        <label htmlFor="sort" className="text-gray-500 capitalize pr-1">
          Sort By:
        </label>
        <select
          defaultValue="Default Sorting"
          className="select w-36 rounded-xl"
        >
          <option disabled={true}>Default Sorting</option>
          <option>Latest Items</option>
          <option>Best Sellers Items</option>
          <option>Price - Low To High</option>
          <option>Price - High To Low</option>
        </select>

        <span className="text-gray-500 text-base">
          Showing 1-10 of 50 Results
        </span>
      </form>
      <div className="flex justify-center sm:justify-end items-center gap-1 mt-4 sm:mt-0">
        <a
          href="#"
          title="sorting"
          className="w-10 h-10 flex justify-center items-center border border-gray-200 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-5 h-5 fill-gray-400"
            fill="currentColor"
          >
            <path d="M480 160L480 288L352 288L352 160L480 160zM480 352L480 480L352 480L352 352L480 352zM288 288L160 288L160 160L288 160L288 288zM160 352L288 352L288 480L160 480L160 352zM160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96z" />
          </svg>
        </a>
        <a
          href="#"
          title="sorting"
          className="w-10 h-10 flex justify-center items-center bg-pink-500 rounded-full text-base-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-5 h-5 fill-base-100"
            fill="currentColor"
          >
            <path d="M112 208C138.5 208 160 186.5 160 160C160 133.5 138.5 112 112 112C85.5 112 64 133.5 64 160C64 186.5 85.5 208 112 208zM256 128C238.3 128 224 142.3 224 160C224 177.7 238.3 192 256 192L544 192C561.7 192 576 177.7 576 160C576 142.3 561.7 128 544 128L256 128zM256 288C238.3 288 224 302.3 224 320C224 337.7 238.3 352 256 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L256 288zM256 448C238.3 448 224 462.3 224 480C224 497.7 238.3 512 256 512L544 512C561.7 512 576 497.7 576 480C576 462.3 561.7 448 544 448L256 448zM112 528C138.5 528 160 506.5 160 480C160 453.5 138.5 432 112 432C85.5 432 64 453.5 64 480C64 506.5 85.5 528 112 528zM160 320C160 293.5 138.5 272 112 272C85.5 272 64 293.5 64 320C64 346.5 85.5 368 112 368C138.5 368 160 346.5 160 320z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ShopSortBar;
