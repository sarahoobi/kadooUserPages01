const Pagination = () => {
    return (
        <div className="flex justify-center mt-16">
            <nav aria-label="Page navigation">
                <ul className="flex items-center -space-x-px h-8 text-sm">
                    <li>
                        <a href="#"
                           className="flex items-center justify-center w-10 h-10 ms-0 leading-tight text-bs_white bg-bs_textColor border border-e-0 rounded-full transition-all ease-in-out delay-150 duration-500 hover:bg-bs_primary mx-1">
                            <span className="sr-only">Previous</span>
                            <i className="fa-solid fa-arrow-left"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center justify-center w-10 h-10 leading-tight text-bs_white bg-bs_primary rounded-full mx-1">1</a>
                    </li>
                    <li>
                        <a href="#" title="pages"
                           className="flex items-center justify-center w-10 h-10  leading-tight text-bs_white bg-bs_textColor rounded-full hover:bg-bs_primary transition-all ease-in-out delay-150 duration-500 mx-1">2</a>
                    </li>
                    <li>
                        <a href="#" title="pages" aria-current="page"
                           className="flex items-center justify-center w-10 h-10  leading-tight text-bs_white bg-bs_textColor rounded-full hover:bg-bs_primary transition-all ease-in-out delay-150 duration-500 mx-1">...</a>
                    </li>
                    <li>
                        <a href="#" title="pages"
                           className="flex items-center justify-center w-10 h-10 leading-tight text-bs_white bg-bs_textColor rounded-full hover:bg-bs_primary transition-all ease-in-out delay-150 duration-500 mx-1">10</a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center justify-center w-10 h-10 leading-tight text-bs_white bg-bs_textColor border rounded-full hover:bg-bs_primary transition-all ease-in-out delay-150 duration-500 mx-1">
                            <span className="sr-only">Next</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
