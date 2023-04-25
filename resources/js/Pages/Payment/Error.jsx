import { useState, useEffect } from "react";
import Loading from "@/Components/UI/Loading";
import Guest from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import ErrorContainer from "../../Containers/Payment/ErrorContainer";

const Error = ({ transaction }) => {
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
                    <Head title="Bankkártyás fizetés hiba" />
                    <ErrorContainer transaction={transaction} />
                </Guest>
            )}
        </>
    );
};

export default Error;
