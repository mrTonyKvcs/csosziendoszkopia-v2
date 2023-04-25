import ConsultationsPageContainer from "@/Containers/Admin/Consultations/PageContainer";

const Index = ({ defaultData, templates, doctors }) => {
    return (
        <ConsultationsPageContainer
            defaultData={defaultData}
            templates={templates}
            doctors={doctors}
        />
    );
};

export default Index;
