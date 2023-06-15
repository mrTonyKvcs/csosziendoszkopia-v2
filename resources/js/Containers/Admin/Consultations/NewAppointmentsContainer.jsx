import ExaminationSelector from "@/Components/UI/Form/ExaminationSelector";
import axios from "axios";
import moment from "moment";
import { useEffect, useState, useCallback } from "react";

const NewAppointmentsContainer = ({
    doctor,
    data,
    setData,
    enabledBreak,
    breakTime,
}) => {
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

    const addAppointment = useCallback(() => {
        if (
            enabledBreak &&
            data.appointments !== null &&
            data.appointments.length === parseInt(breakTime.lastAppointment)
        ) {
            const [hourWithLeadingZero, minute] = breakTime.time.split(":");
            const hour = parseInt(hourWithLeadingZero, 10);
            const lastAppointment = data.appointments.pop().end_at;
            console.log("lA", lastAppointment);
            // const lastTime = moment(time)
            //     .add(hour, "hours")
            //     .add(minute, "minutes");
            // const newBreak = {
            //     minute: breakTime.time,
            //     start_at: moment(time).format("HH:mm"),
            //     end_at: moment(lastTime).format("HH:mm"),
            //     breaktime: true,
            // };
            // console.log("breaktime:", newBreak);
        }
        if (data.appointments === null) {
            const startAt = moment(data.startAt, "HH:mm");
            const lastTime = moment(startAt).add(examination.minutes, "m");

            const newAppointment = {
                minute: examination.minutes,
                start_at: moment(startAt).format("HH:mm"),
                end_at: moment(lastTime).format("HH:mm"),
                breaktime: false,
            };

            setData("appointments", [newAppointment]);
            // return true;
        }
        console.log("appointments", data.appointments);
    }, [examination, data.appointments, data.startAt, breakTime, enabledBreak]);

    useEffect(() => {
        getExaminations();
        console.log("examinations", examinations);
        console.log("examination", examination);
    }, [examination]);

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

export default NewAppointmentsContainer;
