export const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

export const getConsultationName = (consultation) => {
    return (
        consultation.day +
        " | " +
        consultation.open.slice(0, -3) +
        "-" +
        consultation.close.slice(0, -3)
    );
};

export const getAppointmentName = (appointment) => {
    return (
        appointment.start_at.slice(0, -3) +
        "-" +
        appointment.end_at.slice(0, -3)
    );
};
