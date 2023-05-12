import Header from "@/Components/UI/Admin/Header";
import { useState, useCallback } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import AppointmentsTable from "@/Components/UI/Tables/AppointmentsTable";
import NavLink from "@/Components/NavLink";
import AppointmentDetailsContainer from "./AppointmentDetailsContainer";
import axios from "axios";
import NotificationsSimple from "@/Components/UI/Notifications/Simple";
import DeleteConfirmModal from "@/Components/UI/Modals/DeleteConfirmModal";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";

const AppointmentsPageContainer = ({
    doctor,
    day,
    defaultAppointments,
    examinations,
}) => {
    const [appointments, setAppointments] = useState(defaultAppointments);
    const [open, setOpen] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [appointment, setAppointment] = useState(null);
    const [showDeleteNotifications, setShowDeleteNotifications] =
        useState(false);
    const [showExportNotifications, setShowExportNotifications] =
        useState(false);

    const deleteAppointment = useCallback(() => {
        axios
            .delete(`/api/appointments/delete/` + appointment.id)
            .then((response) => {
                setAppointments((prevAppointments) => {
                    return prevAppointments.map((prevAppointment) => {
                        if (prevAppointment.id === appointment.id) {
                            return {
                                ...prevAppointment,
                                medicalExamination: null,
                                applicant: null,
                                payment: null,
                            };
                        } else {
                            return prevAppointment;
                        }
                    });
                });
                setShowDeleteModal(false);
                setShowDeleteNotifications(true);
                setTimeout(function () {
                    setShowDeleteNotifications(false);
                }, 5000);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, [appointment]);

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
            link.setAttribute("download", day + ".xlsx");
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);

            setShowExportNotifications(true);
            setTimeout(function () {
                setShowExportNotifications(false);
            }, 5000);
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Időpontok
                </h2>
            }
        >
            <Head title="Időpontok" />
            <Header
                title={`Időpontok (${doctor.name + " | " + day})`}
                deleteAction={deleteAppointment}
            />
            {showExportNotifications && (
                <NotificationsSimple
                    title="Sikeres exportálás"
                    text="Az időpontokat sikeresen exportáltad."
                    show={showExportNotifications}
                    setShow={setShowExportNotifications}
                />
            )}
            <div className="">
                <div className="flex flex-row justify-between px-4 sm:px-6 lg:px-8">
                    <div className="w-80">
                        <NavLink
                            href="/admin/rendelesek"
                            className="uppercase text-md"
                        >
                            vissza a Rendelésekhez
                        </NavLink>
                    </div>
                    <button
                        type="button"
                        onClick={() => exportConsultation(appointments)}
                        className="relative inline-flex items-center justify-end flex-1 w-0 pt-2 -mr-px text-sm font-semibold text-gray-900 border border-transparent rounded-bl-lg gap-x-3"
                    >
                        <ArrowDownOnSquareIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                        />
                        Exportálás
                    </button>
                </div>
                <AppointmentsTable
                    appointments={appointments}
                    setAppointment={setAppointment}
                    setOpen={setOpen}
                    setShowDeleteModal={setShowDeleteModal}
                />
                <AppointmentDetailsContainer
                    open={open}
                    setOpen={setOpen}
                    setAppointments={setAppointments}
                    appointment={appointment}
                    allExaminations={examinations}
                />
                {showDeleteModal && (
                    <DeleteConfirmModal
                        open={showDeleteModal}
                        setOpen={setShowDeleteModal}
                        title="Biztosan törli az időpontot?"
                        deleteAction={deleteAppointment}
                        item={appointment.time}
                    />
                )}
                {showDeleteNotifications && (
                    <NotificationsSimple
                        title="Sikeres időpont törlés"
                        show={showDeleteNotifications}
                        setShow={setShowDeleteNotifications}
                    />
                )}
            </div>
        </AuthenticatedLayout>
    );
};

export default AppointmentsPageContainer;
