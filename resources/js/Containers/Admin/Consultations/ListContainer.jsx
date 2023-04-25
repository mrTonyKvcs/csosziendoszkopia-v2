import {
    CalendarIcon,
    MapPinIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";

const ConsultationListContainer = ({ consultations }) => {
    return (
        <div className="mt-3 mb-6 overflow-hidden bg-white shadow sm:rounded-sm">
            <ul role="list" className="divide-y divide-gray-200">
                {Object.values(consultations).map((consultation, index) => (
                    <li key={`${consultation.day}-${index + Math.random()}`}>
                        <a href="#" className="block hover:bg-gray-50">
                            <div className="px-4 py-4 sm:px-6">
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

                                    <div className="sm:flex">
                                        <p className="flex items-center mt-2 text-gray-500 text-md sm:mt-0 sm:ml-6">
                                            <MapPinIcon
                                                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                                aria-hidden="true"
                                            />
                                            {consultation.office}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ConsultationListContainer;
