import Header from "@/Components/UI/Admin/Header";
import { useState } from "react";
import DoctorListContainer from "../Doctors/ListContainer";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ConsultationActionContainer from "./ActionContainer";

const ConsultationsPageContainer = ({
    defaultData,
    templates,
    doctors,
    archive = false,
}) => {
    const [data, setData] = useState(defaultData);
    const [open, setOpen] = useState(false);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    {archive && "Archív "}Rendelések
                </h2>
            }
        >
            <Head title={archive ? "Archív Rendelések" : "Rendelések"} />
            <Header
                title={archive ? "Archív Rendelések" : "Rendelések"}
                setOpen={setOpen}
                archive={archive}
            />
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
