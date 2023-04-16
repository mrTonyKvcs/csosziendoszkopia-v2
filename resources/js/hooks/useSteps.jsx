import { useState, useCallback } from "react";

const useSteps = () => {
    const [activeStep, setActiveStep] = useState(1);

    const toPrevStep = useCallback(() => {
        setActiveStep(activeStep - 1);
    }, [activeStep]);

    const toNextStep = useCallback(() => {
        setActiveStep(activeStep + 1);
    }, [activeStep]);

    return { activeStep, toNextStep, toPrevStep };
};

export default useSteps;
