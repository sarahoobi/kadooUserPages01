import Breadcrumb from "../components/Breadcrumb.jsx";
import Pagination from "../components/Pagination.jsx";
import ShopSortBar from "./Partials/ShopSortBar.jsx";
import ShopListSide from "./Partials/ShopListSide.jsx";
import ProductCard from "../components/ProductCard.jsx";

const ShopList = () => {
  return (
    <>
      <Breadcrumb title="ShopList" />

      <section>
        <div className="container mt-14 mx-auto">
          <div className="grid grid-cols-12 gap-5 xl:gap-8">
            <div className="col-span-12 lg:col-span-9">
              <ShopSortBar />
              <div className="grid grid-cols-12 gap-4 mt-8">
                {[...Array(4)].map((item, index) => {
                  let image;
                  index === 0 ? (image = "./images/01-special.png") : "";
                  index === 1 ? (image = "./images/02-special.png") : "";
                  index === 2 ? (image = "./images/03-special.png") : "";
                  index === 3 ? (image = "./images/04-special.png") : "";
                  return <ProductCard img={image} i={index} />;
                })}
              </div>
              <Pagination />
            </div>
            <ShopListSide />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopList;
