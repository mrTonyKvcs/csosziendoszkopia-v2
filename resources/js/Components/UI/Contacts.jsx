import { classNames } from "@/utils";
import { AtSymbolIcon, PhoneIcon, HomeIcon } from "@heroicons/react/20/solid";

const contacts = [
    {
        icon: <PhoneIcon className="w-7 h-7 text-blue-500" />,
        text: "+36 70 779 43 67",
        info: "H-K: 13:00-16:00, SZ-CS: 09:00-12:00",
    },
    {
        icon: <AtSymbolIcon className="w-7 h-7 text-blue-500" />,
        text: "csosziendoszkopia@gmail.com",
    },
    {
        icon: <HomeIcon className="w-7 h-7 text-blue-500" />,
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
                        href="https://csosziendoszkopia.hu/online-bejelentkezes"
                    >
                        "Online időpontfoglalás"
                    </a>{" "}
                    menüpont alatt. A rendelőben kötelező a maszk használata.
                </p>
                <p className="mb-5 text-xl text-white text-center">
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
                className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-1 sm:gap-6 lg:grid-cols-3"
            >
                {contacts.map((contact) => (
                    <li
                        key={contact.text}
                        className="col-span-1 flex shadow-sm"
                    >
                        <div className="flex w-16 flex-shrink-0 items-center justify-center text-sm font-medium text-white bg-white">
                            {contact.icon}
                        </div>
                        <div className="flex flex-1 items-center justify-between truncate border-b border-r border-t border-gray-200 bg-white">
                            <div className="flex-1 truncate px-4 py-2 text-md">
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
