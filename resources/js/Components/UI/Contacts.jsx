import { classNames } from "@/utils";
import { AtSymbolIcon, PhoneIcon, HomeIcon } from "@heroicons/react/20/solid";

const contacts = [
    {
        icon: <PhoneIcon className="text-blue-500 w-7 h-7" />,
        text: "+36 70 779 43 67",
        info: "H-K: 13:00-16:00, SZ-CS: 09:00-12:00",
    },
    {
        icon: <AtSymbolIcon className="text-blue-500 w-7 h-7" />,
        text: "csosziendoszkopia@gmail.com",
    },
    {
        icon: <HomeIcon className="text-blue-500 w-7 h-7" />,
        text: "6000 Kecskemét, Faragó Béla fasor 4",
    },
];

const Contacts = () => {
    return (
        <div>
            <div className="flex flex-col items-center">
                <p className="mb-5 text-xl text-white">
                    Időpontot online tud foglalni, az{" "}
                    <a
                        className="mt-5 text-2xl font-bold"
                        href="/online-bejelentkezes"
                    >
                        "Online időpontfoglalás"
                    </a>{" "}
                    menüpont alatt. A rendelőben kötelező a maszk használata.
                </p>
                <p className="mb-5 text-xl text-center text-white">
                    <strong>
                        Telefonos ügyfélszolgálatunk az alábbi időpontokban
                        elérhető.
                    </strong>{" "}
                    <br />
                    Hétfő - Kedd: 13:00-16:00, Szerda - Csütörtök 09:00-12:00
                </p>
            </div>
            <ul
                role="list"
                className="grid grid-cols-1 gap-5 mt-3 sm:grid-cols-1 sm:gap-6 lg:grid-cols-3"
            >
                {contacts.map((contact) => (
                    <li
                        key={contact.text}
                        className="flex col-span-1 shadow-sm"
                    >
                        <div className="flex items-center justify-center flex-shrink-0 w-16 text-sm font-medium text-white bg-white">
                            {contact.icon}
                        </div>
                        <div className="flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-gray-200">
                            <div className="flex-1 px-4 py-2 truncate text-md">
                                <a
                                    href="#"
                                    className="font-medium text-gray-900 hover:text-gray-600"
                                >
                                    {contact.text}
                                </a>
                                <p className="text-gray-500"></p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contacts;
