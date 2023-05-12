import ConsultationsPageContainer from "@/Containers/Admin/Consultations/PageContainer";

const Archive = ({ defaultData, templates, doctors }) => {
    return (
        <ConsultationsPageContainer
            defaultData={defaultData}
            templates={templates}
            doctors={doctors}
            archive={true}
        />
    );
};

export default Archive;
