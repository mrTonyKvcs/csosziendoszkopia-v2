import Hero from "@/Components/UI/Page/Hero";
import { useState, useCallback, useEffect } from "react";
import StepStatus from "@/Components/UI/Step/Status";
import DoctorSelector from "@/Components/UI/Form/DoctorSelector";
import axios from "axios";
import ExaminationSelector from "@/Components/UI/Form/ExaminationSelector";
import ConsultationSelector from "@/Components/UI/Form/ConsultationSelector";
import AppointmentSelector from "@/Components/UI/Form/AppointmentsSelector";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import useSteps from "@/hooks/useSteps";
import useAppointment from "@/hooks/useAppointment";
import PersonalDetails from "@/Components/UI/Form/PesonalDetails";
import LastStep from "@/Components/UI/Step/LastStep";

const AppointmentController = ({
    config,
    doctors,
    doctor,
    medicalExaminations,
}) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [activeStep, setActiveStep] = useState(1);
    const {
        appointments,
        setAppontiments,
        selectedAppointment,
        setSelectedAppointment,
        handleChangeAppointment,
    } = useAppointment();
    const [selectedDoctor, setSelectedDoctor] = useState(doctor);
    const [examinations, setExaminations] = useState(medicalExaminations);
    const [selectedExamination, setSelectedExamination] = useState(null);
    const [consultations, setConsultations] = useState(null);
    const [selectedConsultation, setSelectedConsultation] = useState(null);

    useEffect(() => {
        console.log(data);
    }, [data]);

    const handleChangeDoctor = useCallback(
        async (value) => {
            setExaminations(null);
            setSelectedExamination(null);
            setConsultations(null);
            setSelectedConsultation(null);
            setSelectedAppointment(null);
            setAppontiments(null);
            setSelectedDoctor(value);
            try {
                const { data } = await axios.get(
                    "/api/get-medical-examinations/" + value.id
                );
                setExaminations(data);
            } catch (err) {
                console.log(err);
            }
        },
        [setSelectedDoctor]
    );

    const handleChangeExamination = useCallback(
        async (value) => {
            setAppontiments(null);
            setSelectedAppointment(null);
            setConsultations(null);
            setSelectedConsultation(null);
            setSelectedExamination(value);
            try {
                const { data } = await axios.get(
                    "/api/get-consultations/" +
                        value.user_id +
                        "/" +
                        value.medical_examination.id
                );
                setConsultations(data);
            } catch (err) {
                console.log(err);
            }
        },
        [setConsultations]
    );

    const handleChangeConsultation = useCallback(
        async (value) => {
            setAppontiments(null);
            setSelectedAppointment(null);
            setSelectedConsultation(value);

            try {
                console.log("val", value);
                const { data } = await axios.get(
                    "/api/get-appointments/" +
                        value.user_id +
                        "/" +
                        value.medical_examination_id +
                        "/" +
                        value.day
                );
                setAppontiments(data);
            } catch (err) {
                console.log(err);
            }
        },
        [setSelectedDoctor]
    );

    const saveAppointmentData = useCallback(() => {
        setData({
            doctor: selectedDoctor,
            examination: selectedExamination,
            consultation: selectedConsultation,
            appointment: selectedAppointment,
        });
        setActiveStep(2);
        // toNextStep();
    }, [
        data,
        selectedDoctor,
        selectedExamination,
        selectedConsultation,
        selectedAppointment,
    ]);

    const submit = useCallback(() => {
        axios
            .post("/api/payment-start", data)
            .then((response) => {
                window.location.replace(response.data.url);
            })
            .catch((error) => {
                setError(error.response.data.error);
                setActiveStep(1);
            });
    });

    return (
        <>
            <Hero text="Online Időpontfoglalás" />
            <div className="flex justify-center min-h-96">
                <div className="w-full p-5 md:p-20 md:w-3/4">
                    <section className="mb-10 md:mb-10">
                        <h2 className="text-2xl font-bold">
                            Időpontfoglalás és fizetés
                        </h2>
                        <p className="text-lg">
                            Foglaljon időpontot a vizsgálatainkra!
                        </p>
                        <p className="text-lg">
                            Ön 5000 Ft előleg fizetésével tud időpontot foglalni
                            on-line, mely összeg levonásra kerül a vizsgálat
                            árából
                        </p>
                    </section>

                    <section className="p-4 mb-5 rounded-sm bg-blue-50">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg
                                    className="w-5 h-5 text-blue-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1 ml-3 md:flex md:justify-between">
                                <p className="text-lg text-blue-700">
                                    <strong>Kedves Betegünk!</strong> <br />
                                    Elsődlegesen online bejelentkezéssel tudunk
                                    beteget fogadni. Amennyiben kérdése van,
                                    illetve segítségre van szüksége a
                                    foglalással kapcsolatban, jelezze felénk
                                    email vagy telefonos elérhetőségünkön.{" "}
                                    <br />
                                    <br />
                                    Vastagbéltükrözésre esetleges polyp
                                    eltávolítást csak friss (1 héten belüli)
                                    laboreredménnyel (teljes vérkép, INR, APTT)
                                    tudjuk elvégezni.
                                </p>
                            </div>
                        </div>
                    </section>

                    {error && (
                        <section className="p-4 mb-5 rounded-sm bg-red-50">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg
                                        className="w-5 h-5 text-red-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-1 ml-3 md:flex md:justify-between">
                                    <p className="text-lg text-red-700">
                                        {error}
                                    </p>
                                </div>
                            </div>
                        </section>
                    )}

                    <section>
                        <StepStatus step={activeStep} />
                        {activeStep === 1 && (
                            <div className="">
                                <div className="flex flex-col px-4 py-5 gap-7 sm:px-6">
                                    <div>
                                        <DoctorSelector
                                            doctors={doctors}
                                            selected={selectedDoctor}
                                            setSelected={handleChangeDoctor}
                                        />
                                    </div>

                                    {selectedDoctor !== null &&
                                        examinations !== null && (
                                            <div>
                                                <ExaminationSelector
                                                    examinations={examinations}
                                                    selected={
                                                        selectedExamination
                                                    }
                                                    setSelected={
                                                        handleChangeExamination
                                                    }
                                                />
                                                {selectedExamination && (
                                                    <div className="p-3 mt-5 -mx-4 md:p-5 ring-1 ring-gray-300 sm:mx-0 ">
                                                        <p className="mb-5 text-md">
                                                            {
                                                                config[
                                                                    selectedExamination
                                                                        .medical_examination
                                                                        ?.slug
                                                                ]?.text
                                                            }
                                                        </p>
                                                        {Object.entries(
                                                            config[
                                                                selectedExamination
                                                                    .medical_examination
                                                                    .slug
                                                            ].extra
                                                        ).map(
                                                            ([key, value]) => (
                                                                <p
                                                                    key={key}
                                                                    className="text-md"
                                                                >
                                                                    <strong>
                                                                        {key}:{" "}
                                                                    </strong>
                                                                    {value}
                                                                </p>
                                                            )
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                    {selectedDoctor !== null &&
                                        examinations !== null &&
                                        consultations && (
                                            <div>
                                                <ConsultationSelector
                                                    consultations={
                                                        consultations
                                                    }
                                                    selected={
                                                        selectedConsultation
                                                    }
                                                    setSelected={
                                                        handleChangeConsultation
                                                    }
                                                />
                                            </div>
                                        )}
                                    {selectedDoctor !== null &&
                                        examinations !== null &&
                                        consultations &&
                                        appointments && (
                                            <div>
                                                <AppointmentSelector
                                                    appointments={appointments}
                                                    selected={
                                                        selectedAppointment
                                                    }
                                                    setSelected={
                                                        handleChangeAppointment
                                                    }
                                                />
                                                <button
                                                    onClick={
                                                        saveAppointmentData
                                                    }
                                                    disabled={
                                                        selectedAppointment ===
                                                        null
                                                    }
                                                    type="button"
                                                    className="mt-5 uppercase relative inline-flex items-center gap-x-1.5 rounded-sm bg-blue-600 px-3 py-2 text-sm md:text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                >
                                                    <ArrowRightIcon
                                                        className="-ml-0.5 h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                    Személyes adatok megadása
                                                </button>
                                            </div>
                                        )}
                                </div>
                            </div>
                        )}
                        {activeStep === 2 && (
                            <>
                                <PersonalDetails
                                    addPersonalDetails={setData}
                                    setActiveStep={setActiveStep}
                                />
                            </>
                        )}
                        {activeStep === 3 && (
                            <>
                                <LastStep
                                    data={data}
                                    submit={submit}
                                    setActiveStep={setActiveStep}
                                />
                            </>
                        )}
                    </section>
                    <div className="flex flex-col items-center justify-center my-10">
                        <h3 className="mb-3 text-lg font-bold uppercase">
                            Foglaljon gyorsan és könnyedén időpontot
                        </h3>
                        <img class4="mb-5" src="img/section-img.png" alt="#" />
                        <video
                            className="mt-10"
                            width="100%"
                            height="auto"
                            controls
                        >
                            Your browser does not support the &lt;video&gt; tag.
                            <source src="/videos/short-online-help.mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppointmentController;
