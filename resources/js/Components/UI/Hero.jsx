import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const Hero = () => {
    return (
        <div className="relative isolate overflow-hidden bg-white pb-16 pt-14 sm:pb-20">
            <img
                src="/img/sliders/5-white.png"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className=" px-6 py-24 sm:py-32 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                <span className="text-blue-600 w-full">
                                    Csőszi Endoszkópia
                                </span>{" "}
                                rendelő
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600 font-bold">
                                6000 Kecskemét, Faragó Béla fasor 4
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="uppercase relative inline-flex items-center gap-x-1.5 rounded-sm bg-blue-600 px-3 py-2 text-sm md:text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    <CalendarDaysIcon
                                        className="-ml-0.5 h-5 w-5"
                                        aria-hidden="true"
                                    />
                                    Online időpontfoglalás
                                </a>
                                <a
                                    href="#"
                                    className="uppercase text-md font-semibold leading-6 text-blue-600"
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
