import { useState, useCallback } from "react";

const useAppointment = () => {
    const [appointments, setAppontiments] = useState(null);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    const handleChangeAppointment = useCallback(
        async (value) => {
            setSelectedAppointment(value);
        },
        [setSelectedAppointment]
    );

    return {
        appointments,
        setAppontiments,
        selectedAppointment,
        setSelectedAppointment,
        handleChangeAppointment,
    };
};

export default useAppointment;
