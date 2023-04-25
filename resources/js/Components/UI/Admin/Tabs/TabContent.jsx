import ConsultationListContainer from "@/Containers/Admin/Consultations/ListContainer";

const TabContent = ({ content }) => {
    return (
        <div>
            <ConsultationListContainer consultations={content} />
        </div>
    );
};

export default TabContent;
