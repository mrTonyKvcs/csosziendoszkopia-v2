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
                    <Head>
                        <title>Időpontfoglalás és fizetés</title>
                        <link
                            rel="icon"
                            type="image/svg+xml"
                            href="/icons/gastroscopy.svg"
                        />
                        <meta
                            name="description"
                            content="Válasszon időpontot egészségpszichológiai tanácsadásra, gasztroszkópiára, colonoscopy-ra vagy orvosi konzultációra. Biztosítunk rugalmas időpontokat, hogy gondoskodhasson egészségéről. Kényelmes és személyre szabott szolgáltatásaink segítenek Önnek az optimális egészség elérésében."
                        />
                        <meta
                            name="keywords"
                            content="gasztroszkópia, colonoscopia, gasztroenterológia, orvos, szakorvos, egészségügy"
                        />
                    </Head>
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
