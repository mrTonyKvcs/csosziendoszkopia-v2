import useConsultationBreak from "@/hooks/useConsultationBreak";

const ConsultationBreakContainer = ({
    breakTime,
    setBreakTime,
    enabledBreak,
    setEnabledBreak,
}) => {
    const { buildBreakToggle, buildBreakInputs } = useConsultationBreak({
        breakTime,
        setBreakTime,
        enabledBreak,
        setEnabledBreak,
    });

    return (
        <>
            {buildBreakToggle}
            {enabledBreak && buildBreakInputs}
        </>
    );
};

export default ConsultationBreakContainer;
