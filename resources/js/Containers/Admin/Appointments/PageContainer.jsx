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

const AppointmentsPageContainer = ({ doctor, day, defaultAppointments }) => {
    const [appointments, setAppointments] = useState(defaultAppointments);
    const [open, setOpen] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [appointment, setAppointment] = useState(null);
    const [showDeleteNotifications, setShowDeleteNotifications] =
        useState(false);
    console.log(appointments);

    const exportAppointments = useCallback(() => {
        return true;
    }, []);

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
        console.log("deleted", appointment.id);
    }, [appointment]);

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
            <div className="">
                <div className="px-4 sm:px-6 lg:px-8 w-80">
                    <NavLink
                        href="/admin/rendelesek"
                        className="uppercase text-md"
                    >
                        vissza a Rendelésekhez
                    </NavLink>
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
                    appointment={appointment}
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
