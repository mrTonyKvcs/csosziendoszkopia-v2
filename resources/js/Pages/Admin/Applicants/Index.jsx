import ApplicantTable from "@/Components/UI/Admin/Applicant/ApplicantTable";
import Header from "@/Components/UI/Admin/Header";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Index = ({ auth, applicants }) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Páciensek
                </h2>
            }
        >
            <Head title="Páciensek" />
            <Header title="Páciensek" deleteAction={null} />

            <div className="">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <ApplicantTable data={applicants} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
