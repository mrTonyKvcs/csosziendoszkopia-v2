import { useState, useCallback } from "react";

const useSteps = ({ activeStep }) => {
    const toPrevStep = useCallback(() => {
        console.log("prev before", activeStep);
        setActiveStep(activeStep - 1);
        activeStep > 1 ? setActiveStep(activeStep - 1) : null;
        console.log("prev after", activeStep);
    }, [activeStep]);

    const toNextStep = useCallback(() => {
        console.log("next before", activeStep);
        activeStep < 3 ? setActiveStep(activeStep + 1) : null;
        console.log("next after", activeStep);
    }, [activeStep]);

    return { toNextStep, toPrevStep };
};

export default useSteps;
