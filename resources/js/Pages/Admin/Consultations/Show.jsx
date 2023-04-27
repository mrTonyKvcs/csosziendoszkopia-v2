import AppointmentsPageContainer from "@/Containers/Admin/Appointments/PageContainer";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Show = ({ doctor, day, defaultAppointments }) => {
    return (
        <AppointmentsPageContainer
            doctor={doctor}
            day={day}
            defaultAppointments={defaultAppointments}
        />
    );
};

export default Show;
