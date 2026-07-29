import Breadcrumb from "../components/Breadcrumb.jsx";

const Help = () => {
  return (
    <>
      <Breadcrumb title="Help" />
      <section className="container mx-auto">
        <div className="my-16">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900">
              How can we help?
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Ask Questions. Browse Topics. Find Answers.
            </p>
            <form className="max-w-md mx-auto mt-10 mb-6">
              <label
                htmlFor="default-search"
                className="mb-2 font-medium text-gray-600 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-bs_primary focus:border-bs_primary"
                  placeholder="Search"
                  required
                />
                <div className="absolute inset-y-0 end-5 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <span className="absolute left-0 mt-2">
                  <b>Suggestions:</b>
                  <span className="text-gray-500">
                    {" "}
                    Payment, Refunds, Shipping
                  </span>
                </span>
              </div>
            </form>
            <div className="grid grid-cols-12 xl:gap-10 gap-6 my-16">
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-gray-200 rounded-xl py-8 px-5 sm:p-8 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-14 h-14 block mx-auto  fill-pink-500"
                  fill="currentColor"
                >
                  <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
                </svg>
                <h3 className="capitalize font-semibold text-xl text-gray-900 my-4">
                  Managing Account
                </h3>
                <p className="text-gray-500 mb-10">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have alteration in some form, by injected
                  humour words which don't look even slightly believable.
                </p>
                <a
                  href="#"
                  title="readMore"
                  className="bg-pink-500 text-base-100 rounded-3xl py-3 px-5 hover:bg-gray-900 transition-colors ease-in-out delay-150 duration-500"
                >
                  read more
                </a>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-gray-200 rounded-xl py-8 px-5 sm:p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-14 h-14 block mx-auto  fill-pink-500"
                  fill="currentColor"
                >
                  <path d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM384 416C384 389.1 367.5 366.1 344 356.7L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184L296 356.7C272.5 366.2 256 389.2 256 416C256 451.3 284.7 480 320 480C355.3 480 384 451.3 384 416zM208 240C225.7 240 240 225.7 240 208C240 190.3 225.7 176 208 176C190.3 176 176 190.3 176 208C176 225.7 190.3 240 208 240zM192 320C192 302.3 177.7 288 160 288C142.3 288 128 302.3 128 320C128 337.7 142.3 352 160 352C177.7 352 192 337.7 192 320zM480 352C497.7 352 512 337.7 512 320C512 302.3 497.7 288 480 288C462.3 288 448 302.3 448 320C448 337.7 462.3 352 480 352zM464 208C464 190.3 449.7 176 432 176C414.3 176 400 190.3 400 208C400 225.7 414.3 240 432 240C449.7 240 464 225.7 464 208z" />
                </svg>
                <h3 className="capitalize font-semibold text-xl text-gray-900 my-4">
                  Working With Dashboard
                </h3>
                <p className="text-gray-500 mb-10">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have alteration in some form, by injected
                  humour words which don't look even slightly believable.
                </p>
                <a
                  href="#"
                  title="readMore"
                  className="bg-pink-500 text-base-100 rounded-3xl py-3 px-5 hover:bg-gray-900 transition-colors ease-in-out delay-150 duration-500"
                >
                  read more
                </a>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-gray-200 rounded-xl py-8 px-5 sm:p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-14 h-14 block mx-auto  fill-pink-500"
                  fill="currentColor"
                >
                  <path d="M64 192L64 224L576 224L576 192C576 156.7 547.3 128 512 128L128 128C92.7 128 64 156.7 64 192zM64 272L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 272L64 272zM128 424C128 410.7 138.7 400 152 400L200 400C213.3 400 224 410.7 224 424C224 437.3 213.3 448 200 448L152 448C138.7 448 128 437.3 128 424zM272 424C272 410.7 282.7 400 296 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L296 448C282.7 448 272 437.3 272 424z" />
                </svg>
                <h3 className="capitalize font-semibold text-xl text-gray-900 my-4">
                  Payment Options
                </h3>
                <p className="text-gray-500 mb-10">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have alteration in some form, by injected
                  humour words which don't look even slightly believable.
                </p>
                <a
                  href="#"
                  title="readMore"
                  className="bg-pink-500 text-base-100 rounded-3xl py-3 px-5 hover:bg-gray-900 transition-colors ease-in-out delay-150 duration-500"
                >
                  read more
                </a>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-gray-200 rounded-xl py-8 px-5 sm:p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-14 h-14 block mx-auto  fill-pink-500"
                  fill="currentColor"
                >
                  <path d="M64 160C64 124.7 92.7 96 128 96L416 96C451.3 96 480 124.7 480 160L480 192L530.7 192C547.7 192 564 198.7 576 210.7L621.3 256C633.3 268 640 284.3 640 301.3L640 448C640 483.3 611.3 512 576 512L572.7 512C562.3 548.9 528.3 576 488 576C447.7 576 413.8 548.9 403.3 512L300.7 512C290.3 548.9 256.3 576 216 576C175.7 576 141.8 548.9 131.3 512L128 512C92.7 512 64 483.3 64 448L64 400L24 400C10.7 400 0 389.3 0 376C0 362.7 10.7 352 24 352L136 352C149.3 352 160 341.3 160 328C160 314.7 149.3 304 136 304L24 304C10.7 304 0 293.3 0 280C0 266.7 10.7 256 24 256L200 256C213.3 256 224 245.3 224 232C224 218.7 213.3 208 200 208L24 208C10.7 208 0 197.3 0 184C0 170.7 10.7 160 24 160L64 160zM576 352L576 301.3L530.7 256L480 256L480 352L576 352zM256 488C256 465.9 238.1 448 216 448C193.9 448 176 465.9 176 488C176 510.1 193.9 528 216 528C238.1 528 256 510.1 256 488zM488 528C510.1 528 528 510.1 528 488C528 465.9 510.1 448 488 448C465.9 448 448 465.9 448 488C448 510.1 465.9 528 488 528z" />
                </svg>
                <h3 className="capitalize font-semibold text-xl text-gray-900 my-4">
                  Delivery Information
                </h3>
                <p className="text-gray-500 mb-10">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have alteration in some form, by injected
                  humour words which don't look even slightly believable.
                </p>
                <a
                  href="#"
                  title="readMore"
                  className="bg-pink-500 text-base-100 rounded-3xl py-3 px-5 hover:bg-gray-900 transition-colors ease-in-out delay-150 duration-500"
                >
                  read more
                </a>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-gray-200 rounded-xl py-8 px-5 sm:p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-14 h-14 block mx-auto  fill-pink-500"
                  fill="currentColor"
                >
                  <path d="M320 48C306.7 48 296 58.7 296 72L296 84L294.2 84C257.6 84 228 113.7 228 150.2C228 183.6 252.9 211.8 286 215.9L347 223.5C352.1 224.1 356 228.5 356 233.7C356 239.4 351.4 243.9 345.8 243.9L272 244C256.5 244 244 256.5 244 272C244 287.5 256.5 300 272 300L296 300L296 312C296 325.3 306.7 336 320 336C333.3 336 344 325.3 344 312L344 300L345.8 300C382.4 300 412 270.3 412 233.8C412 200.4 387.1 172.2 354 168.1L293 160.5C287.9 159.9 284 155.5 284 150.3C284 144.6 288.6 140.1 294.2 140.1L360 140C375.5 140 388 127.5 388 112C388 96.5 375.5 84 360 84L344 84L344 72C344 58.7 333.3 48 320 48zM141.3 405.5L98.7 448L64 448C46.3 448 32 462.3 32 480L32 544C32 561.7 46.3 576 64 576L384.5 576C413.5 576 441.8 566.7 465.2 549.5L591.8 456.2C609.6 443.1 613.4 418.1 600.3 400.3C587.2 382.5 562.2 378.7 544.4 391.8L424.6 480L312 480C298.7 480 288 469.3 288 456C288 442.7 298.7 432 312 432L384 432C401.7 432 416 417.7 416 400C416 382.3 401.7 368 384 368L231.8 368C197.9 368 165.3 381.5 141.3 405.5z" />
                </svg>
                <h3 className="capitalize font-semibold text-xl text-gray-900 my-4">
                  Refund Policy
                </h3>
                <p className="text-gray-500 mb-10">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have alteration in some form, by injected
                  humour words which don't look even slightly believable.
                </p>
                <a
                  href="#"
                  title="readMore"
                  className="bg-pink-500 text-base-100 rounded-3xl py-3 px-5 hover:bg-gray-900 transition-colors ease-in-out delay-150 duration-500"
                >
                  read more
                </a>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-gray-200 rounded-xl py-8 px-5 sm:p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-14 h-14 block mx-auto fill-pink-500"
                  fill="currentColor"
                >
                  <path d="M525.2 82.9C536.7 88 544 99.4 544 112L544 528C544 540.6 536.7 552 525.2 557.1C513.7 562.2 500.4 560.3 490.9 552L444.3 511.3C400.7 473.2 345.6 451 287.9 448.3L287.9 544C287.9 561.7 273.6 576 255.9 576L223.9 576C206.2 576 191.9 561.7 191.9 544L191.9 448C121.3 448 64 390.7 64 320C64 249.3 121.3 192 192 192L276.5 192C338.3 191.8 397.9 169.3 444.4 128.7L491 88C500.4 79.7 513.9 77.8 525.3 82.9zM288 384L288 384.2C358.3 386.9 425.8 412.7 480 457.6L480 182.3C425.8 227.2 358.3 253 288 255.7L288 384z" />
                </svg>
                <h3 className="capitalize font-semibold text-xl text-gray-900 my-4">
                  Affiliate Program
                </h3>
                <p className="text-gray-500 mb-10">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have alteration in some form, by injected
                  humour words which don't look even slightly believable.
                </p>
                <a
                  href="#"
                  title="readMore"
                  className="bg-pink-500 text-base-100 rounded-3xl py-3 px-5 hover:bg-gray-900 transition-colors ease-in-out delay-150 duration-500"
                >
                  read more
                </a>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-gray-200 rounded-xl py-8 px-5 sm:p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-14 h-14 block mx-auto fill-pink-500"
                  fill="currentColor"
                >
                  <path d="M288 192C288 139 245 96 192 96C139 96 96 139 96 192C96 245 139 288 192 288C245 288 288 245 288 192zM544 448C544 395 501 352 448 352C395 352 352 395 352 448C352 501 395 544 448 544C501 544 544 501 544 448zM534.6 150.6C547.1 138.1 547.1 117.8 534.6 105.3C522.1 92.8 501.8 92.8 489.3 105.3L105.3 489.3C92.8 501.8 92.8 522.1 105.3 534.6C117.8 547.1 138.1 547.1 150.6 534.6L534.6 150.6z" />
                </svg>
                <h3 className="capitalize font-semibold text-xl text-gray-900 my-4">
                  Offers And Discounts
                </h3>
                <p className="text-gray-500 mb-10">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have alteration in some form, by injected
                  humour words which don't look even slightly believable.
                </p>
                <a
                  href="#"
                  title="readMore"
                  className="bg-pink-500 text-base-100 rounded-3xl py-3 px-5 hover:bg-gray-900 transition-colors ease-in-out delay-150 duration-500"
                >
                  read more
                </a>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-gray-200 rounded-xl py-8 px-5 sm:p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-14 h-14 block mx-auto fill-pink-500"
                  fill="currentColor"
                >
                  <path d="M320 64C326.6 64 332.9 66.7 337.4 71.5L481.4 223.5L481.9 224L560 224C577.7 224 592 238.3 592 256C592 270.5 582.4 282.7 569.2 286.7L523.1 493.9C516.6 523.2 490.6 544 460.6 544L179.3 544C149.3 544 123.3 523.2 116.8 493.9L70.8 286.7C57.6 282.8 48 270.5 48 256C48 238.3 62.3 224 80 224L158.1 224L158.6 223.5L302.6 71.5C307.1 66.7 313.4 64 320 64zM320 122.9L224.2 224L415.8 224L320 122.9zM240 328C240 314.7 229.3 304 216 304C202.7 304 192 314.7 192 328L192 440C192 453.3 202.7 464 216 464C229.3 464 240 453.3 240 440L240 328zM320 304C306.7 304 296 314.7 296 328L296 440C296 453.3 306.7 464 320 464C333.3 464 344 453.3 344 440L344 328C344 314.7 333.3 304 320 304zM448 328C448 314.7 437.3 304 424 304C410.7 304 400 314.7 400 328L400 440C400 453.3 410.7 464 424 464C437.3 464 448 453.3 448 440L448 328z" />
                </svg>
                <h3 className="capitalize font-semibold text-xl text-gray-900 my-4">
                  Place An Order
                </h3>
                <p className="text-gray-500 mb-10">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have alteration in some form, by injected
                  humour words which don't look even slightly believable.
                </p>
                <a
                  href="#"
                  title="readMore"
                  className="bg-pink-500 text-base-100 rounded-3xl py-3 px-5 hover:bg-gray-900 transition-colors ease-in-out delay-150 duration-500"
                >
                  read more
                </a>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-gray-200 rounded-xl py-8 px-5 sm:p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-14 h-14 block mx-auto fill-pink-500"
                  fill="currentColor"
                >
                  <path d="M576 112C576 100.9 570.3 90.6 560.8 84.8C551.3 79 539.6 78.4 529.7 83.4L413.5 141.5L234.1 81.6C226 78.9 217.3 79.5 209.7 83.3L81.7 147.3C70.8 152.8 64 163.9 64 176L64 528C64 539.1 69.7 549.4 79.2 555.2C88.7 561 100.4 561.6 110.3 556.6L226.4 498.5L399.7 556.3C395.4 549.9 391.2 543.2 387.1 536.4C376.1 518.1 365.2 497.1 357.1 474.6L255.9 440.9L255.9 156.4L383.9 199.1L383.9 298.4C414.9 262.6 460.9 240 511.9 240C534.5 240 556.1 244.4 575.9 252.5L576 112zM512 288C445.7 288 392 340.8 392 405.9C392 474.8 456.1 556.3 490.6 595.2C502.2 608.2 521.9 608.2 533.5 595.2C568 556.3 632.1 474.8 632.1 405.9C632.1 340.8 578.4 288 512.1 288zM472 408C472 385.9 489.9 368 512 368C534.1 368 552 385.9 552 408C552 430.1 534.1 448 512 448C489.9 448 472 430.1 472 408z" />
                </svg>
                <h3 className="capitalize font-semibold text-xl text-bs_textColor my-4">
                  Order Tracking Instructions
                </h3>
                <p className="text-gray-500 mb-10">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have alteration in some form, by injected
                  humour words which don't look even slightly believable.
                </p>
                <a
                  href="#"
                  title="readMore"
                  className="bg-pink-500 text-base-100 rounded-3xl py-3 px-5 hover:bg-gray-900 transition-colors ease-in-out delay-150 duration-500"
                >
                  read more
                </a>
              </div>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900">
              {" "}
              Haven't found the answer? We can help.
            </h2>
            <p className="text-gray-500 text-sm mt-2 mb-10">
              {" "}
              Contact us and we'll get back to you as soon as possible.
            </p>
            <a
              href="#"
              title="submitATicket"
              className="capitalize bg-pink-500 text-base-100 p-5 rounded-xl"
            >
              submit a ticket
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Help;
