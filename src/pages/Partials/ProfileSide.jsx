const ProfileSide = () => {
  return (
    <div className="md:row-span-1 lg:col-span-3 border border-gray-200 rounded-xl py-4 px-5 drop-shadow-gray-300 h-fit mb:2 lg:mb-0">
      <div className="profilePicture flex justify-center">
        <div className=" border-2 border-pink-500 rounded-full p-1 relative">
          <img
            src="./images/profilePic.jpg"
            alt="profile-picture"
            className="rounded-full w-24 h-24"
          />
          <div className="bg-pink-500 w-8 h-8 rounded-full absolute right-0 bottom-0 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-6 fill-current text-base-100"
              fill="currentColor"
            >
              <path d="M213.1 128.8L202.7 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L437.3 160L426.9 128.8C420.4 109.2 402.1 96 381.4 96L258.6 96C237.9 96 219.6 109.2 213.1 128.8zM320 256C373 256 416 299 416 352C416 405 373 448 320 448C267 448 224 405 224 352C224 299 267 256 320 256z" />
            </svg>
          </div>
        </div>
      </div>
      <h4 className="text-gray-900 font-bold text-xl text-center mt-5">
        Antoni Jonson
      </h4>
      <a
        href="#"
        title="emailprotect"
        className="block text-center text-gray-900 hover:text-secondary"
      >
        [email protected]
      </a>
      <hr className="text-gray-200 my-5" />
      <table className="w-full">
        <tr>
          <td className="text-gray-900 flex h-14 items-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-6 h-6 fill-current text-pink-500 ml-1"
              fill="currentColor"
            >
              <path d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM384 416C384 389.1 367.5 366.1 344 356.7L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184L296 356.7C272.5 366.2 256 389.2 256 416C256 451.3 284.7 480 320 480C355.3 480 384 451.3 384 416zM208 240C225.7 240 240 225.7 240 208C240 190.3 225.7 176 208 176C190.3 176 176 190.3 176 208C176 225.7 190.3 240 208 240zM192 320C192 302.3 177.7 288 160 288C142.3 288 128 302.3 128 320C128 337.7 142.3 352 160 352C177.7 352 192 337.7 192 320zM480 352C497.7 352 512 337.7 512 320C512 302.3 497.7 288 480 288C462.3 288 448 302.3 448 320C448 337.7 462.3 352 480 352zM464 208C464 190.3 449.7 176 432 176C414.3 176 400 190.3 400 208C400 225.7 414.3 240 432 240C449.7 240 464 225.7 464 208z" />
            </svg>
            <a href="#" title="dash" className="ml-1 hover:text-pink-500">
              Dashboard
            </a>
          </td>
        </tr>
        <tr>
          <td className="text-gray-900 px-1 flex h-14 items-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-6 h-6 fill-current text-pink-500"
              fill="currentColor"
            >
              <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
            </svg>
            <a href="#" title="profile" className="ml-1 hover:text-pink-500">
              My Profile
            </a>
          </td>
        </tr>
        <tr>
          <td className="text-gray-900 px-1 flex h-14 items-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-6 h-6 fill-current text-pink-500"
              fill="currentColor"
            >
              <path d="M256 144C256 108.7 284.7 80 320 80C355.3 80 384 108.7 384 144L384 192L256 192L256 144zM208 192L144 192C117.5 192 96 213.5 96 240L96 448C96 501 139 544 192 544L448 544C501 544 544 501 544 448L544 240C544 213.5 522.5 192 496 192L432 192L432 144C432 82.1 381.9 32 320 32C258.1 32 208 82.1 208 144L208 192zM232 240C245.3 240 256 250.7 256 264C256 277.3 245.3 288 232 288C218.7 288 208 277.3 208 264C208 250.7 218.7 240 232 240zM384 264C384 250.7 394.7 240 408 240C421.3 240 432 250.7 432 264C432 277.3 421.3 288 408 288C394.7 288 384 277.3 384 264z" />
            </svg>
            <a href="#" title="myOrder" className="ml-1 hover:text-pink-500">
              My Order
            </a>
          </td>
          <td className="text-right w-[20%] pr-2">
            <a
              href="#"
              title="myOrder"
              className="bg-red-200 rounded-full h-6 w-6 text-red-500 text-sm font-semibold p-1 text-center"
            >
              {" "}
              02{" "}
            </a>
          </td>
        </tr>
        <tr>
          <td className="text-gray-900 px-1 flex h-14 items-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-6 h-6 fill-current text-pink-500"
              fill="currentColor"
            >
              <path d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z" />
            </svg>
            <a href="#" title="wishlist" className="ml-1 hover:text-pink-500">
              My Wishlist
            </a>
          </td>
          <td
            className="text-right w-fit
               pr-2"
          >
            <a
              href="#"
              title="wishlist"
              className="bg-red-200 rounded-full h-6 w-6 text-red-500 text-sm font-semibold p-1 text-center"
            >
              {" "}
              02{" "}
            </a>
          </td>
        </tr>
        <tr>
          <td className="text-gray-900 flex h-14 items-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-6 h-6 fill-current text-pink-500 ml-1"
              fill="currentColor"
            >
              <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" />
            </svg>
            <a
              href="#"
              title="Address List"
              className="ml-1 hover:text-pink-500"
            >
              Address List{" "}
            </a>
          </td>
        </tr>
        <tr>
          <td className="text-gray-900 px-1 flex h-14 items-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-6 h-6 fill-current text-pink-500"
              fill="currentColor"
            >
              <path d="M320 128C241 128 175.3 185.3 162.3 260.7C171.6 257.7 181.6 256 192 256L208 256C234.5 256 256 277.5 256 304L256 400C256 426.5 234.5 448 208 448L192 448C139 448 96 405 96 352L96 288C96 164.3 196.3 64 320 64C443.7 64 544 164.3 544 288L544 456.1C544 522.4 490.2 576.1 423.9 576.1L336 576L304 576C277.5 576 256 554.5 256 528C256 501.5 277.5 480 304 480L336 480C362.5 480 384 501.5 384 528L384 528L424 528C463.8 528 496 495.8 496 456L496 435.1C481.9 443.3 465.5 447.9 448 447.9L432 447.9C405.5 447.9 384 426.4 384 399.9L384 303.9C384 277.4 405.5 255.9 432 255.9L448 255.9C458.4 255.9 468.3 257.5 477.7 260.6C464.7 185.3 399.1 127.9 320 127.9z" />
            </svg>
            <a
              href="#"
              title="SupportTickets"
              className="ml-1 hover:text-pink-500"
            >
              Support Tickets{" "}
            </a>
          </td>
          <td className="text-right w-fit pr-2">
            <a
              href="#"
              title="supportTicket"
              className="bg-red-200 rounded-full h-6 w-6 text-red-500 text-sm font-semibold p-1 text-center"
            >
              {" "}
              02{" "}
            </a>
          </td>
        </tr>
        <tr>
          <td className="text-gray-900 flex h-14 items-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-6 h-6 fill-current text-pink-500 ml-1"
              fill="currentColor"
            >
              <path d="M576 112C576 100.9 570.3 90.6 560.8 84.8C551.3 79 539.6 78.4 529.7 83.4L413.5 141.5L234.1 81.6C226 78.9 217.3 79.5 209.7 83.3L81.7 147.3C70.8 152.8 64 163.9 64 176L64 528C64 539.1 69.7 549.4 79.2 555.2C88.7 561 100.4 561.6 110.3 556.6L226.4 498.5L399.7 556.3C395.4 549.9 391.2 543.2 387.1 536.4C376.1 518.1 365.2 497.1 357.1 474.6L255.9 440.9L255.9 156.4L383.9 199.1L383.9 298.4C414.9 262.6 460.9 240 511.9 240C534.5 240 556.1 244.4 575.9 252.5L576 112zM512 288C445.7 288 392 340.8 392 405.9C392 474.8 456.1 556.3 490.6 595.2C502.2 608.2 521.9 608.2 533.5 595.2C568 556.3 632.1 474.8 632.1 405.9C632.1 340.8 578.4 288 512.1 288zM472 408C472 385.9 489.9 368 512 368C534.1 368 552 385.9 552 408C552 430.1 534.1 448 512 448C489.9 448 472 430.1 472 408z" />
            </svg>
            <a
              href="#"
              title="Track My Order"
              className="ml-1 hover:text-pink-500"
            >
              Track My Order{" "}
            </a>
          </td>
        </tr>
        <tr>
          <td className="text-gray-900 flex h-14 items-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-6 h-6 fill-current text-pink-500 ml-1"
              fill="currentColor"
            >
              <path d="M512 176C520.8 176 528 183.2 528 192L528 224L112 224L112 192C112 183.2 119.2 176 128 176L512 176zM528 288L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 288L528 288zM128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192C576 156.7 547.3 128 512 128L128 128zM144 408C144 421.3 154.7 432 168 432L216 432C229.3 432 240 421.3 240 408C240 394.7 229.3 384 216 384L168 384C154.7 384 144 394.7 144 408zM288 408C288 421.3 298.7 432 312 432L376 432C389.3 432 400 421.3 400 408C400 394.7 389.3 384 376 384L312 384C298.7 384 288 394.7 288 408z" />
            </svg>
            <a
              href="#"
              title="Payment Method"
              className="ml-1 hover:text-pink-500"
            >
              Payment Method{" "}
            </a>
          </td>
        </tr>
        <tr>
          <td className="text-gray-900 px-1 flex h-14 items-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-6 h-6 fill-current text-pink-500 ml-1"
              fill="currentColor"
            >
              <path d="M320 64C306.7 64 296 74.7 296 88L296 97.7C214.6 109.3 152 179.4 152 264L152 278.5C152 316.2 142 353.2 123 385.8L101.1 423.2C97.8 429 96 435.5 96 442.2C96 463.1 112.9 480 133.8 480L506.2 480C527.1 480 544 463.1 544 442.2C544 435.5 542.2 428.9 538.9 423.2L517 385.7C498 353.1 488 316.1 488 278.4L488 263.9C488 179.3 425.4 109.2 344 97.6L344 87.9C344 74.6 333.3 63.9 320 63.9zM488.4 432L151.5 432L164.4 409.9C187.7 370 200 324.6 200 278.5L200 264C200 197.7 253.7 144 320 144C386.3 144 440 197.7 440 264L440 278.5C440 324.7 452.3 370 475.5 409.9L488.4 432zM252.1 528C262 556 288.7 576 320 576C351.3 576 378 556 387.9 528L252.1 528z" />
            </svg>
            <a
              href="#"
              title=" Notification"
              className="ml-1 hover:text-pink-500"
            >
              Notification{" "}
            </a>
          </td>
          <td className="text-right w-fit pr-2">
            <a
              href="#"
              title="myOrder"
              className="bg-red-200 rounded-full h-6 w-6 text-red-500 text-sm font-semibold p-1 text-center"
            >
              {" "}
              02{" "}
            </a>
          </td>
        </tr>
        <tr>
          <td className="text-base-100 px-1 flex h-14 items-center w-full bg-pink-500 rounded-tl-xl rounded-bl-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-6 h-6 fill-current text-base-100 ml-1"
              fill="currentColor"
            >
              <path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" />
            </svg>
            <a href="#" title=" Notification" className="ml-1 ">
              Messages{" "}
            </a>
          </td>
          <td className="text-right w-fit bg-pink-500 pr-2 rounded-tr-xl rounded-br-xl">
            <a
              href="#"
              title="Messages"
              className="bg-red-200 rounded-full h-6 w-6 text-red-500 text-sm font-semibold p-1 text-center"
            >
              {" "}
              02{" "}
            </a>
          </td>
        </tr>
        <tr>
          <td className="text-gray-900 flex h-14 items-center w-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-6 h-6 fill-current text-pink-500 ml-1"
              fill="currentColor"
            >
              <path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z" />
            </svg>
            <a href="#" title="Settings" className="ml-1 hover:text-pink-500">
              Settings{" "}
            </a>
          </td>
        </tr>
        <tr>
          <td className="text-gray-900 flex h-14 items-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-6 h-6 fill-current text-pink-500 ml-1"
              fill="currentColor"
            >
              <path d="M224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L160 96C107 96 64 139 64 192L64 448C64 501 107 544 160 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480C142.3 480 128 465.7 128 448L128 192C128 174.3 142.3 160 160 160L224 160zM566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L438.6 169.3C426.1 156.8 405.8 156.8 393.3 169.3C380.8 181.8 380.8 202.1 393.3 214.6L466.7 288L256 288C238.3 288 224 302.3 224 320C224 337.7 238.3 352 256 352L466.7 352L393.3 425.4C380.8 437.9 380.8 458.2 393.3 470.7C405.8 483.2 426.1 483.2 438.6 470.7L566.6 342.7z" />
            </svg>
            <a href="#" title="Logout" className="ml-1 hover:text-pink-500">
              Logout{" "}
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
};
export default ProfileSide;
