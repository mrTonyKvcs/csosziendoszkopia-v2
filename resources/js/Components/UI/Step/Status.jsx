const StepStatus = ({ step }) => {
    return (
        <div className="mb-5 overflow-hidden bg-white shadow">
            <div className="px-4 py-3 sm:px-6">
                <nav aria-label="Progress">
                    <ol
                        role="list"
                        className="space-y-4 md:flex md:space-y-0 md:space-x-8"
                    >
                        <li className="md:flex-1">
                            <div
                                className={`flex flex-col py-2 pl-4 border-l-4 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4 group ${
                                    step === 1
                                        ? "border-blue-600 hover:border-blue-800"
                                        : ""
                                }`}
                            >
                                <span
                                    className={`font-semibold tracking-wide uppercase text-md ${
                                        step === 1
                                            ? "text-blue-600 group-hover:text-blue-800"
                                            : ""
                                    }`}
                                >
                                    1. lépés
                                </span>
                                <span className="font-medium text-md">
                                    Orvos és a vizsgálat kiválasztása
                                </span>
                            </div>
                        </li>

                        <li className="md:flex-1">
                            <div
                                className={`flex flex-col py-2 pl-4 border-l-4 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4 group ${
                                    step === 2
                                        ? "border-blue-600 hover:border-blue-800"
                                        : ""
                                }`}
                            >
                                <span
                                    className={`font-semibold tracking-wide uppercase text-md ${
                                        step === 2
                                            ? "text-blue-600 group-hover:text-blue-800"
                                            : ""
                                    }`}
                                >
                                    2. lépés
                                </span>
                                <span className="font-medium text-md">
                                    Személyes adatok megadása
                                </span>
                            </div>
                        </li>

                        <li className="md:flex-1">
                            <div
                                className={`flex flex-col py-2 pl-4 border-l-4 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4 group ${
                                    step === 3
                                        ? "border-blue-600 hover:border-blue-800"
                                        : ""
                                }`}
                            >
                                <span
                                    className={`font-semibold tracking-wide uppercase text-md ${
                                        step === 3
                                            ? "text-blue-600 group-hover:text-blue-800"
                                            : ""
                                    }`}
                                >
                                    3. lépés
                                </span>
                                <span className="font-medium text-md">
                                    Adatok ellenőrzése és fizetés
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default StepStatus;
