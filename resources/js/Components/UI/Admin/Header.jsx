const Header = ({ title, setOpen = null }) => {
    return (
        <div className="py-5 mb-10 bg-gray-100">
            <div className="px-4 sm:px-6 lg:px-8">
                {/* <nav className="sm:hidden" aria-label="Back">
                    <a
                        href="#"
                        className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                        <ChevronLeftIcon
                            className="flex-shrink-0 w-5 h-5 mr-1 -ml-1 text-gray-400"
                            aria-hidden="true"
                        />
                        Back
                    </a>
                </nav> */}
                <nav className="hidden sm:flex" aria-label="Breadcrumb">
                    <ol role="list" className="flex items-center space-x-4">
                        <li>
                            <div className="flex">
                                <a
                                    href="#"
                                    className="text-sm font-medium text-gray-500 hover:text-gray-700"
                                >
                                    Csőszi Endoszkópia Admin
                                </a>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="px-4 mt-2 md:flex md:items-center md:justify-between sm:px-6 lg:px-8">
                <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-medium leading-7 text-gray-600 sm:truncate sm:text-3xl sm:tracking-tight">
                        {title}
                    </h2>
                </div>
                <div className="flex flex-shrink-0 mt-4 md:ml-4 md:mt-0">
                    {setOpen !== null && (
                        <button
                            onClick={() => setOpen(true)}
                            type="button"
                            className="inline-flex items-center px-3 py-2 ml-3 text-sm font-semibold text-white bg-blue-600 rounded-sm shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            Új létrehozása
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
