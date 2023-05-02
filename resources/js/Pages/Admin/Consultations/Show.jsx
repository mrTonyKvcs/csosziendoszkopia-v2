import AppointmentsPageContainer from "@/Containers/Admin/Appointments/PageContainer";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Show = ({ doctor, day, defaultAppointments, examinations }) => {
    return (
        <AppointmentsPageContainer
            doctor={doctor}
            day={day}
            defaultAppointments={defaultAppointments}
            examinations={examinations}
        />
    );
};

export default Show;
