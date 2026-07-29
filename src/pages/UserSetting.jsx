import Breadcrumb from "../components/Breadcrumb.jsx";
import ProfileSide from "./Partials/ProfileSide.jsx";
const UserSetting = () => {
  return (
    <>
      <Breadcrumb title="Dashboard" />
      <div className="container mx-auto mt-14 grid md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-12 gap-x-4 mb-20">
        <ProfileSide />
        <div className="md:row-span-1 lg:col-span-9 w-full">
          <div className="border border-gray-200 rounded-xl py-6 px-5 h-fit mt-6 lg:mt-0">
            <span className="text-gray-800 font-bold text-xl">Settings</span>
            <hr className="text-gray-200 my-6" />
            <div className="lg:grid lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <span className="font-semibold text-gray-900 text-lg">
                  Privacy Setting
                </span>
                <div className="mt-4">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="toggle toggle-secondary"
                  />
                  <span className="text-gray-500 px-1">Enable Messages</span>
                </div>
                <div div className="my-4">
                  <input type="checkbox" className="toggle toggle-secondary" />
                  <span className="text-gray-500 px-1">
                    I Want To Receive Email Notify
                  </span>
                </div>
                <div div className="my-4">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="toggle toggle-secondary"
                  />
                  <span className="text-gray-500 px-1">
                    Hide My Phone Number From Public
                  </span>
                </div>
                <div div className="my-4">
                  <input type="checkbox" className="toggle toggle-secondary" />
                  <span className="text-gray-500 px-1">
                    I Want To Receive Message
                  </span>
                </div>
                <div div className="my-4">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="toggle toggle-secondary"
                  />
                  <span className="text-gray-500 px-1">
                    Make My Profile Private
                  </span>
                </div>
                <button className="flex items-center py-3 px-4 bg-pink-500 rounded-xl cursor-pointer hover:bg-gray-900 w-fit mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="w-6 h-6 fill-current text-base-100"
                    fill="currentColor"
                  >
                    <path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z" />
                  </svg>
                  <a
                    href="#"
                    title="updateSettings"
                    className="text-base-100 pl-1"
                  >
                    Update Settings
                  </a>
                </button>
              </div>
              <div className="md:col-span-6 mt-12 lg:mt-0">
                <fieldset className="fieldset mt-3">
                  <legend className="fieldset-legend font-semibold text-gray-900 text-lg">
                    Delete Acount
                  </legend>
                  <select defaultValue="chooseReason" className="select mt-3">
                    <option disabled={true}>Choose Reason</option>
                    <option>Reason One</option>
                    <option>Reason Two</option>
                    <option>Reason Three</option>
                  </select>
                </fieldset>
                <fieldset className="fieldset mt-6">
                  <textarea
                    className="textarea h-32"
                    placeholder="Describe Your Reason"
                  ></textarea>
                </fieldset>
                <button className="flex items-center py-3 px-4 bg-pink-500 rounded-xl cursor-pointer hover:bg-gray-900 w-fit mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="w-6 h-6 fill-current text-base-100"
                    fill="currentColor"
                  >
                    <path d="M262.2 48C248.9 48 236.9 56.3 232.2 68.8L216 112L120 112C106.7 112 96 122.7 96 136C96 149.3 106.7 160 120 160L520 160C533.3 160 544 149.3 544 136C544 122.7 533.3 112 520 112L424 112L407.8 68.8C403.1 56.3 391.2 48 377.8 48L262.2 48zM128 208L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 208L464 208L464 512C464 520.8 456.8 528 448 528L192 528C183.2 528 176 520.8 176 512L176 208L128 208zM288 280C288 266.7 277.3 256 264 256C250.7 256 240 266.7 240 280L240 456C240 469.3 250.7 480 264 480C277.3 480 288 469.3 288 456L288 280zM400 280C400 266.7 389.3 256 376 256C362.7 256 352 266.7 352 280L352 456C352 469.3 362.7 480 376 480C389.3 480 400 469.3 400 456L400 280z" />
                  </svg>
                  <a
                    href="#"
                    title="updateSettings"
                    className="text-base-100 pl-1"
                  >
                    Delete Account{" "}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default UserSetting;
