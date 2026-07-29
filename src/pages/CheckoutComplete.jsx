import Breadcrumb from "../components/Breadcrumb.jsx";

const Payment = () => {
  return (
    <>
      <Breadcrumb title="Payment" />
      <section className="">
        <div className="container my-16">
          <div className="w-full sm:[w-90%] md:w-[70%] lg:w-[50%] text-center border border-gray-200 rounded-xl py-6 px-6 sm:px-10 bg-pink-50 flex flex-col items-center gap-6 mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-full text-base-100 bg-[#15D4C9]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-8 h-8 fill-current text-base-100"
                fill="currentColor"
              >
                <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" />
              </svg>
            </div>
            <h4 className="font-semibold text-xl capitalize">
              Thank you for your order!
            </h4>
            <p className="text-gray-500">
              Your order has been placed and will be processed as soon as
              possible.Make sure you make note of<b>38HF654DWR</b>.You will be
              receiving an email shortly with confirmation of your order.
            </p>
            <a
              href="#"
              title="goBackShopping"
              className=" capitalize text-base-100 bg-pink-500 hover:bg-gray-900 transition-all delay-150 duration-500 ease-in-out px-5 py-3 rounded-xl"
            >
              go back shopping
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-5 h-5 fill-current text-base-100 ml-2 inline-block"
                fill="currentColor"
              >
                <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
