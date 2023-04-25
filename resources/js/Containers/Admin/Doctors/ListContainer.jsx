import { useState, useMemo } from "react";
import ConsultationListContainer from "../Consultations/ListContainer";
import TabNavigation from "@/Components/UI/Admin/Tabs/TabNavigation";

const DoctorListContainer = ({ allDoctors }) => {
    const doctors = useMemo(() => {
        return allDoctors.map((doctor, index) => {
            return {
                ...doctor,
                current: index === 0,
            };
        });
    }, [allDoctors]);

    return (
        <>
            <TabNavigation tabs={doctors} />
        </>
    );
};

export default DoctorListContainer;
