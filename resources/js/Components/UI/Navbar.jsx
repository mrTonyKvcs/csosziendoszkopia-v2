import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    XMarkIcon,
    CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";
import NavLink from "../NavLink";

const navigation = [
    { name: "Főoldal", href: "/" },
    { name: "Vizsgálataink", href: "/#vizsgalataink" },
    { name: "A Rendelő Bemutatása", href: "/#rendelo" },
    { name: "Orvosok", href: "/#orvosok" },
    { name: "Áraink", href: "/#araink" },
    { name: "Kapcsolat", href: "/#kapcsolat" },
];

const Navbar = () => {
    return (
        <Disclosure as="nav" className="bg-white shadow">
            {({ open }) => (
                <nav>
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="flex items-center mr-2 -ml-2 md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XMarkIcon
                                                className="block w-6 h-6"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <Bars3Icon
                                                className="block w-6 h-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>

                                <div className="hidden md:ml-6 md:flex md:space-x-8">
                                    {/* Current: "border-blue-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                    {/* <a
                                        href="#"
                                        className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-blue-500"
                                    >
                                        Főoldal
                                    </a> */}

                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 uppercase border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <NavLink
                                        href="/online-bejelentkezes"
                                        className="uppercase relative inline-flex items-center gap-x-1.5 rounded-sm bg-blue-600 px-3 pt-2 pb-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                    >
                                        <CalendarDaysIcon
                                            className="-ml-0.5 h-5 w-5"
                                            aria-hidden="true"
                                        />
                                        Online időpontfoglalás
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            {/* Current: "bg-blue-50 border-blue-500 text-blue-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href="#"
                                    className="block py-2 pl-3 pr-4 text-base font-medium text-blue-700 border-l-4 border-blue-500 bg-blue-50 sm:pl-5 sm:pr-6"
                                >
                                    Főoldal
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </nav>
            )}
        </Disclosure>
    );
};

export default Navbar;
