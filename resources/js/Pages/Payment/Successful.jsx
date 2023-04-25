import { useState, useEffect } from "react";
import Loading from "@/Components/UI/Loading";
import Guest from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import SuccessfulContainer from "@/Containers/Payment/SuccessfulContainer";

const Succesful = ({ appointment, transactionId }) => {
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
                    <Head title="Sikeres bankkártyás fizetés" />
                    <SuccessfulContainer
                        appointment={appointment}
                        transactionId={transactionId}
                    />
                </Guest>
            )}
        </>
    );
};

export default Succesful;
