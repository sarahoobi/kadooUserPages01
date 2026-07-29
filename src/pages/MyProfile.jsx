import { Divide } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb.jsx";
import ProfileSide from "./Partials/ProfileSide.jsx";
const MyProfile = () => {
  return (
    <>
      <Breadcrumb title="Messages" />
      <div className="container mx-auto mt-14 grid md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-12 gap-x-4 mb-20">
        <ProfileSide />
        <div className="md:row-span-1 lg:col-span-9 w-full">
          <div className="border border-gray-200 rounded-xl py-4 px-5 h-fit">
            <span className="text-gray-800 font-bold text-xl">
              Profile Info
            </span>
            <hr className="text-gray-200 my-6" />
            <div className="grid md:grid-rows-3 md:grid-cols-12 w-full">
              <fieldset className="fieldset md:grid-rows-1 md:col-span-6">
                <label
                  className="label font-medium text-lg text-gray-900"
                  htmlFor="name"
                >
                  Fist Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="input validator text-gray-900 py-6 w-[96%]"
                  required
                  pattern="[A-Za-z][A-Za-z0-9\-]*"
                  minLength="3"
                  maxLength="30"
                  title="Only letters, numbers or dash"
                />
                <p className="validator-hint">
                  Must be 3 to 30 characters
                  <br />
                  containing only letters, numbers or dash
                </p>
              </fieldset>
              <fieldset className="fieldset md:grid-rows-1 md:col-span-6">
                <label
                  className="label font-medium text-lg text-gray-900"
                  htmlFor="name"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Name"
                  className="input validator text-gray-900 py-6 w-[96%]"
                  required
                  pattern="[A-Za-z][A-Za-z0-9\-]*"
                  minLength="3"
                  maxLength="30"
                  title="Only letters, numbers or dash"
                />
                <p className="validator-hint">
                  Must be 3 to 30 characters
                  <br />
                  containing only letters, numbers or dash
                </p>
              </fieldset>
              <fieldset className="fieldset md:grid-rows-2 md:col-span-6">
                <label
                  className="label font-medium text-lg text-gray-900"
                  htmlFor="name"
                >
                  Email
                </label>
                <input
                  className="input validator text-gray-900 py-6 w-[96%]"
                  type="email"
                  required
                  placeholder="mail@site.com"
                />
                <div className="validator-hint">Enter valid email address</div>
              </fieldset>
              <fieldset className="fieldset md:grid-rows-2 md:col-span-6">
                <label
                  className="label font-medium text-lg text-gray-900 "
                  htmlFor="phone"
                >
                  Phone{" "}
                </label>
                <input
                  type="tel"
                  className="input validator tabular-nums w-[96%] text-gray-900 py-6"
                  required
                  placeholder="Phone"
                  pattern="[0-9]*"
                  minLength="10"
                  maxLength="10"
                  title="Must be 10 digits"
                />
                <div className="validator-hint">Enter valid phone number</div>
              </fieldset>
              <fieldset className="md:grid-rows-3 md:col-span-12 mt-6">
                <label
                  htmlFor="address"
                  className="labelfont-medium text-lg text-gray-900 "
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Iran, Tehran"
                  className="input text-gray-900 py-6 w-[100%]"
                />
              </fieldset>
            </div>
            <button className="flex items-center py-3 px-4 bg-pink-500 rounded-xl cursor-pointer hover:bg-gray-900 w-fit my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-6 h-6 fill-current text-base-100"
                fill="currentColor"
              >
                <path d="M240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM144 544C144 473.3 201.3 416 272 416L368 416C438.7 416 496 473.3 496 544L496 552C496 565.3 506.7 576 520 576C533.3 576 544 565.3 544 552L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 552C96 565.3 106.7 576 120 576C133.3 576 144 565.3 144 552L144 544z" />
              </svg>
              <a href="#" title="saveChanges" className="text-base-100 pl-2">
                Save Changes
              </a>
            </button>
          </div>
          <div className="md:row-span-2 lg:col-span-9 w-full">
            <div className=" border border-gray-200 rounded-xl py-4 px-5 mt-8">
              <span className="text-gray-800 font-bold text-xl">
                Change Password{" "}
              </span>
              <hr className="text-gray-200 my-6" />

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-gray-900 text-lg font-medium">
                  Old Password
                </legend>
                <input
                  type="text"
                  className="input w-full rounded-lg py-6 text-gray-900"
                  placeholder="Old Password"
                />
              </fieldset>
              <fieldset className="fieldset mt-6">
                <legend className="fieldset-legend text-gray-900 text-lg font-medium">
                  New Password
                </legend>
                <input
                  type="password"
                  className="input validator w-full rounded-lg py-6 text-gray-900"
                  required
                  placeholder="New Password"
                  minLength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                />
                <p className="validator-hint">
                  Must be more than 8 characters, including, one number, one
                  lowercase letter one uppercase letter
                </p>
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-gray-900 text-lg font-medium">
                  Re-Type Password
                </legend>
                <input
                  type="password"
                  className="input validator w-full rounded-lg py-6 text-gray-900"
                  required
                  placeholder="Re-Type Password"
                  minLength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                />
                <p className="validator-hint">it's not the same</p>
              </fieldset>
              <button className="flex items-center py-3 px-4 bg-pink-500 rounded-xl cursor-pointer hover:bg-gray-900 w-fit mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-6 h-6 fill-current text-base-100"
                  fill="currentColor"
                >
                  <path d="M400 416C497.2 416 576 337.2 576 240C576 142.8 497.2 64 400 64C302.8 64 224 142.8 224 240C224 258.7 226.9 276.8 232.3 293.7L71 455C66.5 459.5 64 465.6 64 472L64 552C64 565.3 74.7 576 88 576L168 576C181.3 576 192 565.3 192 552L192 512L232 512C245.3 512 256 501.3 256 488L256 448L296 448C302.4 448 308.5 445.5 313 441L346.3 407.7C363.2 413.1 381.3 416 400 416zM440 160C462.1 160 480 177.9 480 200C480 222.1 462.1 240 440 240C417.9 240 400 222.1 400 200C400 177.9 417.9 160 440 160z" />
                </svg>
                <a
                  href="#"
                  title="ChangePassword"
                  className="text-base-100 pl-2"
                >
                  Change Password
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyProfile;
