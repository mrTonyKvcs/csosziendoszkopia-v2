import { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import WelcomeContainer from "@/Containers/Welcome";
import Guest from "@/Layouts/GuestLayout";
import Loading from "@/Components/UI/Loading";

export default function Welcome({ services }) {
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
                    <Head title="Welcome" />
                    <WelcomeContainer services={services} />
                </Guest>
            )}
        </>
    );
}
