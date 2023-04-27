import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import NavLink from "../NavLink";

const Hero = () => {
    return (
        <div className="relative pb-16 overflow-hidden bg-white isolate pt-14 sm:pb-20">
            <img
                src="/img/sliders/5-white.png"
                alt=""
                className="absolute inset-0 object-cover w-full h-full -z-10"
            />
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
                    <div className="px-6 py-24 sm:py-32 lg:px-8">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                <span className="w-full text-blue-600">
                                    Csőszi Endoszkópia
                                </span>{" "}
                                rendelő
                            </h2>
                            <p className="mt-6 text-lg font-bold leading-8 text-gray-600">
                                6000 Kecskemét, Faragó Béla fasor 4
                            </p>
                            <div className="flex items-center justify-center mt-10 gap-x-6">
                                <NavLink
                                    href="/online-bejelentkezes"
                                    className="uppercase relative inline-flex items-center gap-x-1.5 rounded-sm bg-blue-600 px-3 pt-2 pb-1 text-sm md:text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    style={{ maxWidth: "242px" }}
                                >
                                    <CalendarDaysIcon
                                        className="-ml-0.5 h-5 w-5"
                                        aria-hidden="true"
                                    />
                                    Online időpontfoglalás
                                </NavLink>
                                <a
                                    href="/#araink"
                                    className="font-semibold leading-6 text-blue-600 uppercase text-md"
                                >
                                    Áraink <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
