import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const LastStep = ({ data, submit, setActiveStep }) => {
    return (
        <div className="">
            <div className="px-4 py-5 border-t border-gray-200 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-4 bg-gray-100 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">
                            Vizsgálat
                        </dt>
                        <dd className="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.examination.medical_examination?.name}
                        </dd>
                    </div>
                    <div className="py-4 font-bold bg-gray-100 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">
                            Kezelőorvos neve
                        </dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.doctor?.name}
                        </dd>
                    </div>
                    <div className="py-4 font-bold bg-gray-100 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">
                            Időpont
                        </dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.consultation.day +
                                " | " +
                                data.appointment.start_at.slice(0, -3) +
                                "-" +
                                data.appointment.end_at.slice(0, -3)}
                        </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">
                            Név
                        </dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.personalDetails?.name}
                        </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">
                            Email cím
                        </dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.personalDetails?.email}
                        </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">
                            Telefonszám
                        </dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.personalDetails?.phone}
                        </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">
                            Taj-szám
                        </dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.personalDetails?.socialSecurityNumber}
                        </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">
                            Irányítószám
                        </dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.personalDetails?.zip}
                        </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">
                            Város
                        </dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.personalDetails?.city}
                        </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">
                            Utca
                        </dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.personalDetails?.street}
                        </dd>
                    </div>
                </dl>
            </div>
            <div className="flex flex-col-reverse mt-5 md:flex-row">
                <button
                    onClick={() => setActiveStep(2)}
                    type="button"
                    className="mt-5 md:mt-0 uppercase relative inline-flex items-center gap-x-1.5 mr-3 rounded-sm bg-white-600 px-3 py-2 text-sm md:text-md font-semibold text-blue-600 shadow-sm hover:bg-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    <ArrowLeftIcon
                        className="-ml-0.5 h-5 w-5"
                        aria-hidden="true"
                    />
                    Vissza
                </button>
                <button
                    onClick={submit}
                    type="button"
                    className="uppercase relative inline-flex items-center gap-x-1.5 rounded-sm bg-blue-600 px-3 py-2 text-sm md:text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Fizetés
                    <ArrowRightIcon
                        className="-ml-0.5 h-5 w-5"
                        aria-hidden="true"
                    />
                </button>
            </div>
        </div>
    );
};

export default LastStep;
