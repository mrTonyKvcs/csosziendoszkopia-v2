import Header from "@/Components/UI/Admin/Header";
import { useState } from "react";
import DoctorListContainer from "../Doctors/ListContainer";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ConsultationActionContainer from "./ActionContainer";

const ConsultationsPageContainer = ({ defaultData, templates, doctors }) => {
    const [data, setData] = useState(defaultData);
    const [open, setOpen] = useState(false);
    return (
        <AuthenticatedLayout
            // user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Rendelések
                </h2>
            }
        >
            <Head title="Rendelések" />
            <Header title="Rendelések" setOpen={setOpen} />
            <div className="px-4 sm:px-6 lg:px-8">
                <DoctorListContainer allDoctors={data} />
            </div>
            <ConsultationActionContainer
                open={open}
                setOpen={setOpen}
                templates={templates}
                allData={data}
                setAllData={setData}
                allDoctors={doctors}
            />
        </AuthenticatedLayout>
    );
};

export default ConsultationsPageContainer;
