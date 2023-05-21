import ExaminationSelector from "@/Components/UI/Form/ExaminationSelector";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const NewAppointmentsContainer = ({ doctor }) => {
    const [examinations, setExaminations] = useState(null);
    const [examination, setExamination] = useState(null);

    const getExaminations = useCallback(async () => {
        try {
            const { data } = await axios.get(
                "/api/get-medical-examinations/" + doctor.id
            );
            setExaminations(data);
        } catch (err) {
            console.log(err);
        }
    }, [doctor]);

    useEffect(() => {
        getExaminations();
        console.log("examinations", examinations);
        console.log("examination", examination);
    }, [doctor]);

    return (
        <div>
            <ExaminationSelector
                selected={examination}
                setSelected={setExamination}
                examinations={examinations}
            />
            {examination && (
                <button
                    // onClick={action}
                    type="button"
                    className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-white uppercase bg-green-600 rounded-sm shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                    hozzáadás
                </button>
            )}
        </div>
    );
};

export default NewAppointmentsContainer;
