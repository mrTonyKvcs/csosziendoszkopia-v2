import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SlideOver from "@/Components/UI/Admin/SlideOver";
import ExaminationSelector from "@/Components/UI/Form/ExaminationSelector";
import NotificationsSimple from "@/Components/UI/Notifications/Simple";
import axios from "axios";
import { useState, useCallback } from "react";

const AppointmentDetailsContainer = ({
    open,
    setOpen,
    setAppointments,
    appointment,
    allExaminations,
    deleteAppointment,
}) => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);
    const [errors, setErors] = useState(true);
    // add personal detail to appointment
    const [examinations, setExaminations] = useState(allExaminations);
    const [selectedExamination, setSelectedExamination] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const handleChangeExamination = useCallback(
        async (value) => {
            setSelectedExamination(value);
            try {
                const response = await axios.post(
                    "/api/appointments/set-reservation",
                    {
                        appointmentId: appointment.id,
                        medicalExaminationId: value.medical_examination.id,
                    }
                );
            } catch (error) {
                console.log(error);
            }
        },
        [appointment, setSelectedExamination]
    );
    const save = useCallback(async () => {
        try {
            const { data } = await axios.post(
                "/api/appointments/admin-reservation",
                {
                    appointmentId: appointment.id,
                    medicalExaminationId:
                        selectedExamination.medical_examination.id,
                    applicantEmail: email,
                    applicantName: name,
                    applicantPhone: phone,
                }
            );
            setAppointments(data);
            setOpen(false);
            setShowNotifications(true);
            setTimeout(function () {
                setShowNotifications(false);
            }, 5000);
        } catch (error) {
            console.log(error);
        }
    }, [appointment, setAppointments, setOpen, name, email, phone]);

    console.log("appointmnet", appointment);

    return (
        <>
            {showNotifications && (
                <NotificationsSimple
                    title="Sikeres mentés"
                    text=""
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
                    deleteAppointment={
                        appointment.applicant === null
                            ? deleteAppointment
                            : null
                    }
                    appointmentId={appointment.id}
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
                            {appointment.medicalExamination?.name ? (
                                <>
                                    <div className="sm:flex sm:px-6 sm:py-5">
                                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                            Vizsgálat
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                                            {
                                                appointment.medicalExamination
                                                    ?.name
                                            }
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
                                            {
                                                appointment.payment
                                                    ?.transaction_id
                                            }
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
                                </>
                            ) : (
                                <>
                                    <div className="sm:flex sm:px-6 sm:py-5">
                                        <dd className="w-full mt-1 text-sm text-gray-900 sm:ml-6 sm:mt-0">
                                            <ExaminationSelector
                                                examinations={examinations}
                                                selected={selectedExamination}
                                                setSelected={
                                                    handleChangeExamination
                                                }
                                            />
                                            {selectedExamination && (
                                                <>
                                                    <div className="flex flex-col col-span-6 mt-3 sm:col-span-2">
                                                        <InputLabel
                                                            htmlFor="name"
                                                            value="Név"
                                                        />

                                                        <TextInput
                                                            id="name"
                                                            type="text"
                                                            name="name"
                                                            value={name}
                                                            className="block w-full mt-1 rounded-sm"
                                                            autoComplete="name"
                                                            // isFocused={(e) =>
                                                            //     e.target.selected()
                                                            // }
                                                            onChange={(e) =>
                                                                setName(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                        <small>
                                                            Példa: Teszt Elek
                                                        </small>

                                                        <InputError
                                                            message={
                                                                errors.name
                                                            }
                                                            className="mt-2"
                                                        />
                                                    </div>

                                                    {name && (
                                                        <>
                                                            <div className="flex flex-col col-span-6 mt-3 sm:col-span-2">
                                                                <InputLabel
                                                                    htmlFor="email"
                                                                    value="Email"
                                                                />

                                                                <TextInput
                                                                    id="email"
                                                                    type="text"
                                                                    name="email"
                                                                    value={
                                                                        email
                                                                    }
                                                                    className="block w-full mt-1 rounded-sm"
                                                                    autoComplete="email"
                                                                    // isFocused={
                                                                    //     true
                                                                    // }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setEmail(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                />
                                                                <small>
                                                                    Példa:
                                                                    pelda@gmail.com
                                                                </small>

                                                                <InputError
                                                                    message={
                                                                        errors.email
                                                                    }
                                                                    className="mt-2"
                                                                />
                                                            </div>
                                                            {email && (
                                                                <>
                                                                    <div className="flex flex-col col-span-6 mt-3 sm:col-span-2">
                                                                        <InputLabel
                                                                            htmlFor="phone"
                                                                            value="Telefonszám"
                                                                        />

                                                                        <TextInput
                                                                            id="phone"
                                                                            type="text"
                                                                            name="phone"
                                                                            value={
                                                                                phone
                                                                            }
                                                                            className="block w-full mt-1 rounded-sm"
                                                                            autoComplete="phone"
                                                                            // isFocused={
                                                                            //     true
                                                                            // }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                setPhone(
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                        />
                                                                        <small>
                                                                            Példa:
                                                                            +36708880011
                                                                        </small>

                                                                        <InputError
                                                                            message={
                                                                                errors.phone
                                                                            }
                                                                            className="mt-2"
                                                                        />
                                                                    </div>
                                                                    {phone && (
                                                                        <button
                                                                            onClick={
                                                                                save
                                                                            }
                                                                            type="button"
                                                                            className="inline-flex justify-center w-full px-3 py-2 mt-5 text-sm font-semibold text-white bg-blue-600 rounded-sm shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                                                        >
                                                                            Mentés
                                                                        </button>
                                                                    )}
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                </>
                                            )}
                                        </dd>
                                    </div>
                                </>
                            )}
                        </dl>
                    </div>
                </SlideOver>
            )}
        </>
    );
};

export default AppointmentDetailsContainer;
