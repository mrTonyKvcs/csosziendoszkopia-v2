import NavLink from "@/Components/NavLink";
import NotificationsSimple from "@/Components/UI/Notifications/Simple";
import {
    ArrowDownOnSquareIcon,
    ClockIcon,
    ListBulletIcon,
} from "@heroicons/react/20/solid";
import {
    CalendarIcon,
    MapPinIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import { useCallback, useState } from "react";

const ConsultationListContainer = ({ consultations }) => {
    const [showNotifications, setShowNotifications] = useState(false);

    const exportConsultation = useCallback(async (appointments) => {
        try {
            const response = await axios.post(
                "/api/consultations/export",
                appointments,
                {
                    responseType: "blob",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const fileBlob = response.data;
            const url = window.URL.createObjectURL(new Blob([fileBlob]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute(
                "download",
                appointments[0].consultation.day + ".xlsx"
            );
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);

            setShowNotifications(true);
            setTimeout(function () {
                setShowNotifications(false);
            }, 5000);
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <div className="mt-3 mb-6 overflow-hidden bg-white">
            {showNotifications && (
                <NotificationsSimple
                    title="Sikeres exportálás"
                    text="Az időpontokat sikeresen exportáltad."
                    show={showNotifications}
                    setShow={setShowNotifications}
                />
            )}
            <ul
                role="list"
                className="grid grid-cols-2 gap-4 divide-y divide-gray-200"
            >
                {Object.values(consultations).map((consultation, index) => (
                    <li
                        key={`${consultation.day}-${index + Math.random()}`}
                        className="w-full col-span-1 p-2 m-1 bg-white divide-y divide-gray-200 rounded-sm shadow"
                    >
                        <div className="flex items-center justify-between w-full p-6 space-x-6">
                            <div className="flex-1 truncate">
                                <div className="flex items-center space-x-3">
                                    <h3 className="text-lg font-medium text-gray-900 truncate">
                                        {consultation.day}
                                    </h3>
                                    <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                        {/* {person.role} */}
                                    </span>
                                </div>
                                <p className="flex mt-1 text-gray-500 truncate text-md">
                                    <CalendarIcon
                                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                        aria-hidden="true"
                                    />
                                    {consultation.open +
                                        " - " +
                                        consultation.close}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="flex -mt-px divide-x divide-gray-200">
                                <div className="flex flex-1 w-0">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            exportConsultation(
                                                consultation.appointments
                                            )
                                        }
                                        className="relative inline-flex items-center justify-center flex-1 w-0 pt-2 -mr-px text-sm font-semibold text-gray-900 border border-transparent rounded-bl-lg gap-x-3"
                                    >
                                        <ArrowDownOnSquareIcon
                                            className="w-5 h-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                        Exportálás
                                    </button>
                                </div>
                                <div className="flex flex-1 w-0 -ml-px">
                                    <NavLink
                                        href={`/admin/rendelesek/${consultation.doctorId}/${consultation.day}`}
                                        className="relative inline-flex items-center justify-center flex-1 w-0 pt-2 text-sm font-semibold text-gray-900 border border-transparent rounded-br-lg gap-x-3"
                                    >
                                        <ClockIcon
                                            className="w-5 h-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                        Időpontok
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        {/* <a href="#" className="block hover:bg-gray-50">
                            <div className="px-4 py-4 sm:px-6 flex-column md:flex-row">
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between">
                                        <p className="text-lg text-blue-600 truncate font-base">
                                            {consultation.day}
                                        </p>
                                        <div className="flex flex-shrink-0 ml-2">
                                            <p className="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
                                                {consultation.isFull
                                                    ? "Nincs szabad idopont"
                                                    : ""}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-start">
                                        <div className="flex items-center mt-2 text-gray-500 text-md sm:mt-0">
                                            <CalendarIcon
                                                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                                aria-hidden="true"
                                            />
                                            <p>
                                                {consultation.open +
                                                    " - " +
                                                    consultation.close}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col">hello</div>
                            </div>
                        </a> */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ConsultationListContainer;
