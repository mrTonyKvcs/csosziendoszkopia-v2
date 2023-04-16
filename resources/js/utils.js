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
