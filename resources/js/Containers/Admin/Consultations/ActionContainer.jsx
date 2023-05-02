"use strict";

import React, {
    useCallback,
    useMemo,
    useState,
    useEffect,
    Fragment,
} from "react";
import SlideOver from "@/Components/UI/Admin/SlideOver";
import DoctorSelector from "@/Components/UI/Form/DoctorSelector";
import Toggle from "@/Components/UI/Form/Toggle";
import TemplateSelector from "@/Components/UI/Form/TemplateSelector";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import { useForm } from "@inertiajs/react";
import moment from "moment";
import ConsultationBreakContainer from "./BreakContainer";
import axios from "axios";
import NotificationsSimple from "@/Components/UI/Notifications/Simple";

const ConsultationActionContainer = ({
    open,
    setOpen,
    templates,
    allData,
    setAllData,
    allDoctors,
}) => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [breakTime, setBreakTime] = useState({
        lastAppointment: "",
        time: "",
    });
    const [enabledBreak, setEnabledBreak] = useState(false);
    const { data, setData, reset } = useForm({
        day: "",
        startAt: "",
        appointments: null,
    });
    const [doctor, setDoctor] = useState(null);
    const [enabledTemplate, setEnabledTemplate] = useState(false);
    const [template, setTemplate] = useState(null);
    const [disabledButton, setDisabledButton] = useState(true);
    const doctors = useMemo(() => Object.values(allDoctors), [allDoctors]);

    const createConsultation = useCallback(() => {
        const lastEndAt =
            data.appointments[data.appointments.length - 1].end_at;
        axios
            .post("/api/consultations/create", {
                ...data,
                user_id: doctor.id,
                open: data.startAt,
                close: lastEndAt,
            })
            .then((response) => {
                setAllData(response.data);
                setShowNotifications(true);
                setOpen(false);
                setTimeout(function () {
                    setShowNotifications(false);
                }, 5000);
                setDoctor(null);
                setTemplate(null);
                reset();
                location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    }, [data, allData]);

    const handleStartAtInput = useCallback(
        (value) => {
            setData({
                ...data,
                startAt: value,
            });
            setTemplate(null);
        },
        [data, setData]
    );

    useEffect(() => {
        if (template?.structure?.length > 0) {
            let times = [];
            let lastTime;
            let time = moment(data.startAt, "HH:mm");
            const parsedStructure = JSON.parse(template.structure);
            Object.values(parsedStructure).map((minute, index) => {
                if (
                    enabledBreak &&
                    index === parseInt(breakTime.lastAppointment)
                ) {
                    const [hourWithLeadingZero, minute] =
                        breakTime.time.split(":");
                    const hour = parseInt(hourWithLeadingZero, 10);
                    lastTime = moment(time)
                        .add(hour, "hours")
                        .add(minute, "minutes");
                    const newBreak = {
                        minute: breakTime.time,
                        start_at: moment(time).format("HH:mm"),
                        end_at: moment(lastTime).format("HH:mm"),
                        breaktime: true,
                    };
                    times.push(newBreak);
                    time = lastTime;
                }
                lastTime = moment(time).add(minute, "m");
                const newAppointment = {
                    minute: minute,
                    start_at: moment(time).format("HH:mm"),
                    end_at: moment(lastTime).format("HH:mm"),
                    breaktime: false,
                };
                times.push(newAppointment);
                time = lastTime;
            });
            setData("appointments", times);
            setDisabledButton(false);
        }
    }, [
        template?.structure,
        breakTime.time,
        breakTime.lastAppointment,
        enabledBreak,
    ]);

    return (
        <>
            {showNotifications && (
                <NotificationsSimple
                    title="Sikeres mentés"
                    text="Az időpontokat sikeresen létrehoztad a rendeléssel együtt."
                    show={showNotifications}
                    setShow={setShowNotifications}
                />
            )}
            {open && (
                <SlideOver
                    open={open}
                    setOpen={setOpen}
                    title="Új rendelés létrehozása"
                    action={createConsultation}
                    disabled={disabledButton}
                >
                    <div className="pt-6 pb-5 space-y-7">
                        <div>
                            <DoctorSelector
                                selected={doctor}
                                setSelected={setDoctor}
                                doctors={doctors}
                            />
                        </div>
                        {doctor && (
                            <div>
                                <InputLabel
                                    htmlFor="consultationDay"
                                    value="Rendelés napja"
                                />
                                <TextInput
                                    onChange={(e) =>
                                        setData("day", e.target.value)
                                    }
                                    type="date"
                                    className="relative w-full py-3 pl-3 pr-3 mt-2 text-lg text-left text-gray-900 bg-white border-none shadow-sm cursor-default ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 sm:leading-6"
                                    value={data.day}
                                />
                            </div>
                        )}
                        {doctor && data.day && (
                            <div>
                                <InputLabel
                                    htmlFor="consultationStartAt"
                                    value="Rendelés kezdésének időpontja"
                                />
                                <TextInput
                                    onChange={(e) =>
                                        handleStartAtInput(e.target.value)
                                    }
                                    type="time"
                                    className="relative w-full py-3 pl-3 pr-3 mt-2 text-lg text-left text-gray-900 bg-white border-none shadow-sm cursor-default ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 sm:leading-6"
                                    value={data.startAt}
                                />
                            </div>
                        )}
                        {doctor && data.day && data.startAt && (
                            <ConsultationBreakContainer
                                breakTime={breakTime}
                                setBreakTime={setBreakTime}
                                enabledBreak={enabledBreak}
                                setEnabledBreak={setEnabledBreak}
                            />
                        )}
                        {doctor && data.day && data.startAt && (
                            <div>
                                <Toggle
                                    enabled={enabledTemplate}
                                    setEnabled={setEnabledTemplate}
                                    text="Rendelési sablon használata"
                                />
                            </div>
                        )}
                        {doctor &&
                            data.day &&
                            data.startAt &&
                            enabledTemplate && (
                                <div>
                                    <TemplateSelector
                                        templates={templates}
                                        selected={template}
                                        setSelected={setTemplate}
                                    />
                                </div>
                            )}
                    </div>
                    {doctor &&
                        data.day &&
                        data.startAt &&
                        enabledTemplate &&
                        template && (
                            <div className="pt-4 pb-6">
                                {data.appointments?.map(
                                    (appointment, index) => (
                                        <div
                                            key={index}
                                            className="px-4 py-5 bg-white border-b border-gray-200 sm:px-6"
                                        >
                                            {appointment.breaktime ? (
                                                <h3 className="text-base font-semibold leading-6 text-gray-300">
                                                    {appointment.start_at} -{" "}
                                                    {appointment.end_at} |{" "}
                                                    {appointment.minute} órás
                                                    szünet
                                                </h3>
                                            ) : (
                                                <h3 className="text-base font-semibold leading-6 text-gray-900">
                                                    {appointment.start_at} -{" "}
                                                    {appointment.end_at} |{" "}
                                                    {appointment.minute} perces
                                                    vizsgálat
                                                </h3>
                                            )}
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                </SlideOver>
            )}
        </>
    );
};

export default ConsultationActionContainer;
