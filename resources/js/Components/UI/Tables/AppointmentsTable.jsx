import { classNames } from "@/utils";
import { EyeIcon, TrashIcon } from "@heroicons/react/20/solid";

const AppointmentsTable = ({
    appointments,
    setAppointment,
    setOpen,
    setShowDeleteModal,
}) => {
    console.log("app", appointments);
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-10 -mx-4 ring-1 ring-gray-300 sm:mx-0 sm:rounded-sm">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6 text-center"
                            >
                                Azonosító
                            </th>
                            <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6 text-center"
                            >
                                Időpont
                            </th>
                            <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6 text-center"
                            >
                                Vizsgálat
                            </th>
                            <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6 text-center"
                            >
                                Páciens
                            </th>
                            <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6 text-center"
                            >
                                Fizetett
                            </th>
                            <th
                                scope="col"
                                className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                            >
                                <span className="sr-only">Select</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment, appointmentIdx) => (
                            <tr key={appointment.id}>
                                <td
                                    className={classNames(
                                        appointmentIdx === 0
                                            ? ""
                                            : "border-t border-gray-200",
                                        "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell text-center"
                                    )}
                                >
                                    {appointment.id}
                                </td>
                                <td
                                    className={classNames(
                                        appointmentIdx === 0
                                            ? ""
                                            : "border-t border-gray-200",
                                        "hidden px-3 py-3.5 text-sm text-gray-900 lg:table-cell text-center font-bold"
                                    )}
                                >
                                    {appointment.time}
                                </td>
                                <td
                                    className={classNames(
                                        appointmentIdx === 0
                                            ? ""
                                            : "border-t border-gray-200",
                                        "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell text-center"
                                    )}
                                >
                                    {appointment.medicalExamination?.name}
                                </td>
                                <td
                                    className={classNames(
                                        appointmentIdx === 0
                                            ? ""
                                            : "border-t border-gray-200",
                                        "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell text-center"
                                    )}
                                >
                                    {appointment.applicant?.name}
                                </td>
                                <td
                                    className={classNames(
                                        appointmentIdx === 0
                                            ? ""
                                            : "border-t border-gray-200",
                                        "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell text-center"
                                    )}
                                >
                                    {appointment.payment?.status ===
                                        "SUCCESS" && (
                                        <span className=" text-center inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                            Fizetett
                                        </span>
                                    )}
                                </td>
                                <td
                                    className={classNames(
                                        appointmentIdx === 0
                                            ? ""
                                            : "border-t border-transparent",
                                        "relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                                    )}
                                >
                                    <button
                                        onClick={() => {
                                            setAppointment(appointment);
                                            setOpen(true);
                                        }}
                                        type="button"
                                        className="inline-flex items-center rounded-sm bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                                    >
                                        <EyeIcon
                                            className="w-5 h-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">
                                            , {appointment.id}
                                        </span>
                                    </button>
                                    {appointment.applicant !== null &&
                                        appointment.medicalExamination !==
                                            null && (
                                            <button
                                                onClick={() => {
                                                    setAppointment(appointment);
                                                    setShowDeleteModal(true);
                                                }}
                                                type="button"
                                                className="ml-3 inline-flex items-center rounded-sm bg-red-500 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-300 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                                            >
                                                <TrashIcon
                                                    className="w-5 h-5 text-white"
                                                    aria-hidden="true"
                                                />
                                                <span className="sr-only">
                                                    , {appointment.id}
                                                </span>
                                            </button>
                                        )}

                                    {appointmentIdx !== 0 ? (
                                        <div className="absolute left-0 h-px bg-gray-200 -top-px right-6" />
                                    ) : null}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppointmentsTable;
