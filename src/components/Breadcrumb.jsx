const Breadcrumb = ({ title = "" }) => {
  return (
    // اینجا یه flex w-full
    <section className="flex w-full">
      <div
        className="breadcrumb w-full h-44 bg-center bg-cover justify-center"
        style={{ backgroundImage: "url(./images/breadcrumb01.jpg)" }}
      >
        {/*اینجا mx-auto*/}
        <div className="container breadcrumbBox py-14 mx-auto">
          <h4 className="text-gray-900 capitalize text-2xl font-bold">
            {title}
          </h4>
          <div className="mt-2">
            <ul className="flex">
              <li className="text-gray-900 hover:text-pink-500 transition-colors delay-150 duration-500">
                <i className="fa-solid fa-house"></i>
                <a href="/" title="home" className="capitalize">
                  home
                </a>
              </li>
              <li className="px-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-4 h-4"
                >
                  <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                </svg>
              </li>
              <li>
                <a
                  href="#"
                  title="breadcrumb"
                  class="text-bs_primary capitalize"
                >
                  {" "}
                  Checkout complete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
