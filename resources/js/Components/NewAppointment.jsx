import ExaminationSelector from "@/Components/UI/Form/ExaminationSelector";
import axios from "axios";
import moment from "moment";
import { useEffect, useState, useCallback } from "react";

const NewAppointment = ({
    examination,
    setExamination,
    examinations,
    addAppointment,
}) => {
    return (
        <div>
            <ExaminationSelector
                selected={examination}
                setSelected={setExamination}
                examinations={examinations}
            />
            {examination && (
                <button
                    onClick={addAppointment}
                    type="button"
                    className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-white uppercase bg-green-600 rounded-sm shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                    hozzáadás
                </button>
            )}
        </div>
    );
};

export default NewAppointment;
