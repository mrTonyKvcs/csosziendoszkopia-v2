import useConsultationBreak from "@/hooks/useConsultationBreak";

const ConsultationBreakContainer = ({
    breakTime,
    setBreakTime,
    enabledBreak,
    setEnabledBreak,
    enabledTemplate,
    setData,
    data,
}) => {
    const { buildBreakToggle, buildBreakInputs } = useConsultationBreak({
        breakTime,
        setBreakTime,
        enabledBreak,
        setEnabledBreak,
        enabledTemplate,
        setData,
        data,
    });

    return (
        <>
            {buildBreakToggle}
            {enabledBreak && buildBreakInputs}
        </>
    );
};

export default ConsultationBreakContainer;
