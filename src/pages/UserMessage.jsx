import Breadcrumb from "../components/Breadcrumb.jsx";
import ProfileSide from "./Partials/ProfileSide.jsx";

const UserMessage = () => {
  return (
    <>
      <Breadcrumb title="Messages" />
      <div className="container mx-auto mt-14  grid md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-12 gap-x-4 mb-20">
        <ProfileSide />

        <div className="md:row-span-2 lg:col-span-9 border border-gray-200 rounded-xl py-4 px-5">
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl text-gray-900">Messages</span>
            <a href="#" title="user01">
              <img
                src="./images/testi03.jpg"
                alt="user01"
                className="w-12 h-12 rounded-full"
              />
            </a>
          </div>
          <hr className="text-gray-200 my-4" />
          <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-12 gap-x-3">
            <div className="row-span-1 md:col-span-5">
              <div className=" h-[900px] overflow-y-scroll my-4">
                <div className="border border-gray-200 rounded-xl">
                  <div className="py-6 px-1 border-b-[1px] border-b-gray-200">
                    <a href="#" title="user01" className="flex">
                      <div className="indicator shrink-0">
                        <span className="indicator-item indicator-middle bg-secondary w-3 h-3 rounded-full border-3 border-base-100 border-rounded-full mt-1"></span>
                        <div className="place-items-center pl-2 ">
                          <img
                            src="./images/testi03.jpg"
                            alt="user01"
                            className="w-12 h-12 rounded-full"
                          />
                        </div>
                      </div>
                      <div className="ml-3 grow-1">
                        <span className="font-bold text-sm text-gray-900">
                          Angela Howe
                        </span>
                        <p className="text-sm text-gray-400">
                          Hello, It is a long established fact...
                        </p>
                      </div>
                      <div className="grow-1 text-right">
                        <span className=" text-gray-400 text-xs">just now</span>
                      </div>
                    </a>
                  </div>
                  <div className="py-6 px-1  border-b-[1px] border-b-gray-200">
                    <a href="#" title="user01" className="flex">
                      <div className="indicator shrink-0">
                        <span className="indicator-item indicator-middle bg-error w-3 h-3 rounded-full border-3 border-base-100 border-rounded-full mt-1"></span>
                        <div className="place-items-center pl-2 ">
                          <img
                            src="./images/profilePic.jpg"
                            alt="user01"
                            className="w-12 h-12 rounded-full"
                          />
                        </div>
                      </div>
                      <div className="ml-3 grow-1">
                        <span className="font-bold text-sm text-gray-900">
                          Par Khar
                        </span>
                        <p className="text-sm text-gray-400">
                          Hello, It is a long established fact...
                        </p>
                      </div>
                      <div className="grow-1 text-right">
                        <span className=" text-gray-400 text-xs">
                          15 min ago
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="py-6 px-1 border-b-[1px] border-b-gray-200">
                    <a href="#" title="user01" className="flex">
                      <div className="indicator shrink-0">
                        <span className="indicator-item indicator-middle bg-warning w-3 h-3 rounded-full border-3 border-base-100 border-rounded-full mt-1"></span>
                        <div className="place-items-center pl-2 ">
                          <img
                            src="./images/testi01.jpg"
                            alt="user01"
                            className="w-12 h-12 rounded-full"
                          />
                        </div>
                      </div>
                      <div className="ml-3 grow-1">
                        <span className="font-bold text-sm text-gray-900">
                          Achooloo{" "}
                        </span>
                        <p className="text-sm text-gray-400">
                          Hello, It is a long established fact...
                        </p>
                      </div>
                      <div className="grow-1 text-right">
                        <span className=" text-gray-400 text-xs">
                          5 hours ago
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="py-6 px-1 border-b-[1px] border-b-gray-200">
                    <a href="#" title="user01" className="flex">
                      <div className="indicator shrink-0">
                        <span className="indicator-item indicator-middle bg-warning w-3 h-3 rounded-full border-3 border-base-100 border-rounded-full mt-1"></span>
                        <div className="place-items-center pl-2 ">
                          <img
                            src="./images/testi02.jpg"
                            alt="user01"
                            className="w-12 h-12 rounded-full"
                          />
                        </div>
                      </div>
                      <div className="ml-3 grow-1">
                        <span className="font-bold text-sm text-gray-900">
                          Nicky Minazh
                        </span>
                        <p className="text-sm text-gray-400">
                          Hello, It is a long established fact...
                        </p>
                      </div>
                      <div className="grow-1 text-right">
                        <span className=" text-gray-400 text-xs">
                          5 hours ago
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="py-6 px-1 border-b-[1px] border-b-gray-200">
                    <a href="#" title="user01" className="flex">
                      <div className="indicator shrink-0">
                        <span className="indicator-item indicator-middle bg-warning w-3 h-3 rounded-full border-3 border-base-100 border-rounded-full mt-1"></span>
                        <div className="place-items-center pl-2 ">
                          <img
                            src="./images/testi04.jpg"
                            alt="user01"
                            className="w-12 h-12 rounded-full"
                          />
                        </div>
                      </div>
                      <div className="ml-3 grow-1">
                        <span className="font-bold text-sm text-gray-900">
                          Zhin Zhin Pari{" "}
                        </span>
                        <p className="text-sm text-gray-400">
                          Hello, It is a long established fact...
                        </p>
                      </div>
                      <div className="grow-1 text-right">
                        <span className=" text-gray-400 text-xs">
                          5 hours ago
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="py-6 px-1 border-b-[1px] border-b-gray-200">
                    <a href="#" title="user01" className="flex">
                      <div className="indicator shrink-0">
                        <span className="indicator-item indicator-middle bg-warning w-3 h-3 rounded-full border-3 border-base-100 border-rounded-full mt-1"></span>
                        <div className="place-items-center pl-2 ">
                          <img
                            src="./images/testi01.jpg"
                            alt="user01"
                            className="w-12 h-12 rounded-full"
                          />
                        </div>
                      </div>
                      <div className="ml-3 grow-1">
                        <span className="font-bold text-sm text-gray-900">
                          Achooloo{" "}
                        </span>
                        <p className="text-sm text-gray-400">
                          Hello, It is a long established fact...
                        </p>
                      </div>
                      <div className="grow-1 text-right">
                        <span className=" text-gray-400 text-xs">
                          5 hours ago
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="py-6 px-1 border-b-[1px] border-b-gray-200">
                    <a href="#" title="user01" className="flex">
                      <div className="indicator shrink-0">
                        <span className="indicator-item indicator-middle bg-warning w-3 h-3 rounded-full border-3 border-base-100 border-rounded-full mt-1"></span>
                        <div className="place-items-center pl-2 ">
                          <img
                            src="./images/testi02.jpg"
                            alt="user01"
                            className="w-12 h-12 rounded-full"
                          />
                        </div>
                      </div>
                      <div className="ml-3 grow-1">
                        <span className="font-bold text-sm text-gray-900">
                          Nicky Minazh
                        </span>
                        <p className="text-sm text-gray-400">
                          Hello, It is a long established fact...
                        </p>
                      </div>
                      <div className="grow-1 text-right">
                        <span className=" text-gray-400 text-xs">
                          5 hours ago
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="py-6 px-1 border-b-[1px] border-b-gray-200">
                    <a href="#" title="user01" className="flex">
                      <div className="indicator shrink-0">
                        <span className="indicator-item indicator-middle bg-warning w-3 h-3 rounded-full border-3 border-base-100 border-rounded-full mt-1"></span>
                        <div className="place-items-center pl-2 ">
                          <img
                            src="./images/testi04.jpg"
                            alt="user01"
                            className="w-12 h-12 rounded-full"
                          />
                        </div>
                      </div>
                      <div className="ml-3 grow-1">
                        <span className="font-bold text-sm text-gray-900">
                          anegila jooli{" "}
                        </span>
                        <p className="text-sm text-gray-400">
                          Hello, It is a long established fact...
                        </p>
                      </div>
                      <div className="grow-1 text-right">
                        <span className=" text-gray-400 text-xs">
                          5 hours ago
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="py-6 px-1 border-b-[1px] border-b-gray-200">
                    <a href="#" title="user01" className="flex">
                      <div className="indicator shrink-0">
                        <span className="indicator-item indicator-middle bg-warning w-3 h-3 rounded-full border-3 border-base-100 border-rounded-full mt-1"></span>
                        <div className="place-items-center pl-2 ">
                          <img
                            src="./images/testi01.jpg"
                            alt="user01"
                            className="w-12 h-12 rounded-full"
                          />
                        </div>
                      </div>
                      <div className="ml-3 grow-1">
                        <span className="font-bold text-sm text-gray-900">
                          mari Pari{" "}
                        </span>
                        <p className="text-sm text-gray-400">
                          Hello, It is a long established fact...
                        </p>
                      </div>
                      <div className="grow-1 text-right">
                        <span className=" text-gray-400 text-xs">
                          5 hours ago
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="py-6 px-1  border-b-gray-200">
                    <a href="#" title="user01" className="flex">
                      <div className="indicator shrink-0">
                        <span className="indicator-item indicator-middle bg-warning w-3 h-3 rounded-full border-3 border-base-100 border-rounded-full mt-1"></span>
                        <div className="place-items-center pl-2 ">
                          <img
                            src="./images/testi04.jpg"
                            alt="user01"
                            className="w-12 h-12 rounded-full"
                          />
                        </div>
                      </div>
                      <div className="ml-3 grow-1">
                        <span className="font-bold text-sm text-gray-900">
                          Zhin Zhin Pari{" "}
                        </span>
                        <p className="text-sm text-gray-400">
                          Hello, It is a long established fact...
                        </p>
                      </div>
                      <div className="grow-1 text-right">
                        <span className=" text-gray-400 text-xs">
                          5 hours ago
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-2 md:col-span-7">
              <div className=" h-[680px] overflow-y-scroll my-4">
                <div className="sticky h-24 ">
                  <div className="chat chat-start py-3">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img alt="profile picture" src="./images/testi03.jpg" />
                      </div>
                    </div>
                    <div className="chat-bubble bg-pink-50 text-gray-500 py-4 px-5 rounded-t-xl rounded-br-xl">
                      Hello, It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </div>
                  </div>
                  <div className="chat chat-end py-3">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="profile picture"
                          src="./images/profilePic.jpg"
                        />
                      </div>
                    </div>
                    <div className="chat-bubble text-pink-500 bg-blue-50 py-4 px-5 rounded-t-xl rounded-bl-xl">
                      There are many variations of passages available but the
                      majority have suffered alteration in some form by injected
                      humour.
                    </div>
                  </div>
                  <div className="chat chat-start py-3">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img alt="profile picture" src="./images/testi03.jpg" />
                      </div>
                    </div>
                    <div className="chat-bubble bg-pink-50 text-gray-500 py-4 px-5 rounded-t-xl rounded-br-xl">
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </div>
                  </div>
                  <div className="chat chat-end py-3">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="profile picture"
                          src="./images/profilePic.jpg"
                        />
                      </div>
                    </div>
                    <div className="chat-bubble text-pink-500 bg-blue-50 py-4 px-5 rounded-t-xl rounded-bl-xl">
                      So blinded by desire that they cannot foresee the pain and
                      trouble that are bound to ensue.
                    </div>
                  </div>
                  <div className="chat chat-start py-3">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img alt="profile picture" src="./images/testi03.jpg" />
                      </div>
                    </div>
                    <div className="chat-bubble  bg-pink-50 text-gray-500 py-4 px-5 rounded-t-xl rounded-br-xl">
                      In a free hour when our power of choice is untra and when
                      nothing prevents our being able.
                    </div>
                  </div>
                  <div className="chat chat-end py-3">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="profile picture"
                          src="./images/profilePic.jpg"
                        />
                      </div>
                    </div>
                    <div className="chat-bubble text-pink-500 bg-blue-50 py-4 px-5 rounded-t-xl rounded-bl-xl">
                      We like best every pleasure is to be welcomed and every
                      pain avoided in certain circums and owing to the claims of
                      duty.
                    </div>
                  </div>
                  <div className="chat chat-start py-3">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img alt="profile picture" src="./images/testi03.jpg" />
                      </div>
                    </div>
                    <div className="chat-bubble bg-pink-50 text-gray-500 py-4 px-5 rounded-t-xl rounded-br-xl">
                      The obligations of business it will frequently occur that
                      pleasures have to be repudiated and annoyances accepted.
                    </div>
                  </div>
                  <div className="chat chat-start py-3">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img alt="profile picture" src="./images/testi03.jpg" />
                      </div>
                    </div>
                    <div className="chat-bubble bg-pink-50 text-gray-500 py-4 px-5 rounded-t-xl rounded-br-xl">
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 py-6">
                <textarea
                  className="textarea w-[280px] sm:w-[400px] textarea-lg rounded-xl text-gray-950 h-28 py-4 px-4"
                  placeholder="Your Message"
                ></textarea>
                <button className="flex items-center py-3 px-4 bg-pink-500 rounded-xl cursor-pointer hover:bg-gray-900 mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="w-4 h-4 fill-current text-base-100"
                    fill="currentColor"
                  >
                    <path d="M290.5 287.7L491.4 86.9 359 456.3 290.5 287.7zM457.4 53L256.6 253.8 88 185.3 457.4 53zM38.1 216.8l205.8 83.6 83.6 205.8c5.3 13.1 18.1 21.7 32.3 21.7 14.7 0 27.8-9.2 32.8-23.1L570.6 8c3.5-9.8 1-20.6-6.3-28s-18.2-9.8-28-6.3L39.4 151.7c-13.9 5-23.1 18.1-23.1 32.8 0 14.2 8.6 27 21.7 32.3z" />
                  </svg>
                  <a
                    href="#"
                    title="sendMessage"
                    className="text-base-100 pl-2"
                  >
                    Send Message
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserMessage;
