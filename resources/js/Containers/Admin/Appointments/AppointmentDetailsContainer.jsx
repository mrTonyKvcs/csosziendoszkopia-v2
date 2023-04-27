import SlideOver from "@/Components/UI/Admin/SlideOver";
import NotificationsSimple from "@/Components/UI/Notifications/Simple";
import { useState } from "react";

const AppointmentDetailsContainer = ({ open, setOpen, appointment }) => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);

    return (
        <>
            {showNotifications && (
                <NotificationsSimple
                    title="Sikeres mentés"
                    text="Az időpontokat sikeresen létrehoztad a rendeléssel együtt."
                    show={showNotifications}
                    setShow={setShowNotifications}
                />
            )}
            {open && (
                <SlideOver
                    open={open}
                    setOpen={setOpen}
                    title="Időpont kezelése"
                    action={null}
                    disabled={disabledButton}
                    hideSaveButton={appointment.applicant === null ?? false}
                >
                    <div className="px-4 py-5 sm:px-0 sm:py-0">
                        <dl className="mt-5 space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200">
                            <div className="sm:flex sm:px-6 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                    Azonosító
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                                    {appointment.id}
                                </dd>
                            </div>
                            <div className="sm:flex sm:px-6 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                    Időpont
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                                    {appointment.time}
                                </dd>
                            </div>
                            <div className="sm:flex sm:px-6 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                    Vizsgálat
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                                    {appointment.medicalExamination?.name}
                                </dd>
                            </div>
                            <div className="sm:flex sm:px-6 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                    Páciens neve
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                                    {appointment.applicant?.name}
                                </dd>
                            </div>
                            <div className="sm:flex sm:px-6 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                    Páciens email címe
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {appointment.applicant?.email}
                                </dd>
                            </div>
                            <div className="sm:flex sm:px-6 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                    Páciens telefonszáma
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                                    {appointment.applicant?.phone}
                                </dd>
                            </div>
                            <div className="sm:flex sm:px-6 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                    Fizetési státusz
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                                    {appointment.payment?.status ===
                                        "SUCCESS" && (
                                        <span className=" text-center inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                            Fizetett
                                        </span>
                                    )}
                                </dd>
                            </div>
                            <div className="sm:flex sm:px-6 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                    SimplePay azonosító
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                                    {appointment.payment?.transaction_id}
                                </dd>
                            </div>
                            <div className="sm:flex sm:px-6 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                    Tranzakciós azonosító
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                                    {appointment.payment?.order_ref}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </SlideOver>
            )}
        </>
    );
};

export default AppointmentDetailsContainer;
