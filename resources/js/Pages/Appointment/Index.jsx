import { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";
import Loading from "@/Components/UI/Loading";
import AppointmentController from "@/Containers/Appointment";

const Index = ({ config, doctors, doctor, medicalExaminations }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (document.readyState === "complete") {
            setIsLoading(false);
        }
    }, [document.readyState]);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <Guest>
                    <Head title="Időpontfoglalás és fizetés" />
                    <AppointmentController
                        config={config}
                        doctors={doctors}
                        doctor={doctor}
                        medicalExaminations={medicalExaminations}
                    />
                </Guest>
            )}
        </>
    );
};

export default Index;
