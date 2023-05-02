import { useState, useEffect } from "react";
import Loading from "@/Components/UI/Loading";
import Guest from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import SuccessfulContainer from "@/Containers/Payment/SuccessfulContainer";

const Succesful = ({ appointment, transactionId }) => {
    return (
        <>
            <Guest>
                <Head title="Sikeres bankkártyás fizetés" />
                <SuccessfulContainer
                    appointment={appointment}
                    transactionId={transactionId}
                />
            </Guest>
        </>
    );
};

export default Succesful;
