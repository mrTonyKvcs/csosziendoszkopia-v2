import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Toggle from "@/Components/UI/Form/Toggle";
import { useMemo, useState, useEffect, useCallback } from "react";

const useConsultationBreak = ({
    breakTime,
    setBreakTime,
    enabledBreak,
    setEnabledBreak,
}) => {
    const handleBreakValue = useCallback((event) => {
        const { name, value } = event.target;
        setBreakTime((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }, []);

    const buildBreakToggle = useMemo(
        () => (
            <div>
                <Toggle
                    enabled={enabledBreak}
                    setEnabled={setEnabledBreak}
                    text="Rendelési szünet beállítása"
                />
            </div>
        ),
        [enabledBreak]
    );

    const buildBreakInputs = useMemo(
        () => (
            <div>
                <InputLabel
                    htmlFor="breakTime"
                    value="Melyik vizsgálat után legyen szünet és hány perces?"
                />
                <div className="flex flex-col gap-3 md:flex-row">
                    <div className="w-full md:w-1/3">
                        <TextInput
                            name="lastAppointment"
                            onChange={handleBreakValue}
                            type="number"
                            className="relative w-full py-3 pl-3 pr-3 mt-2 text-lg text-left text-gray-900 bg-white border-none shadow-sm cursor-default ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 sm:leading-6"
                            value={breakTime.lastAppointment}
                        />
                        <div className="mt-2 text-sm text-gray-400">
                            Szünet előtti vizsgálat sorszáma.
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <TextInput
                            name="time"
                            onChange={handleBreakValue}
                            type="time"
                            className="relative w-full py-3 pl-3 pr-3 mt-2 text-lg text-left text-gray-900 bg-white border-none shadow-sm cursor-default ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 sm:leading-6"
                            value={breakTime.time}
                        />
                        <div className="mt-2 text-sm text-gray-400">
                            A szünet hossza (Óra:Perc)
                        </div>
                    </div>
                </div>
            </div>
        ),
        [breakTime.time, breakTime.lastAppointment]
    );

    useEffect(() => console.log("useConsul", breakTime), [breakTime]);

    return {
        buildBreakToggle,
        buildBreakInputs,
    };
};

export default useConsultationBreak;
