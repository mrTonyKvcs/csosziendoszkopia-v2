import { useMemo } from "react";
import Hero from "@/Components/UI/Hero";
import SectionTitle from "@/Components/UI/SectionTitle";
import ServiceList from "@/Components/UI/Services/List";
import CounterSection from "@/Components/UI/Counter/Section";
import { ScrollToTop } from "@/Components/UI/ScroollToTop";
import { COUNTER_LIST, MEDICAL_EXAMINATIONS } from "@/constants";
import DoctorCards from "@/Components/UI/Sections/Doctors/Card";
import { PricesList } from "@/Components/UI/Sections/Prices";

const WelcomeContainer = ({ services }) => {
    const medicalExaminations = useMemo(
        () => MEDICAL_EXAMINATIONS,
        [MEDICAL_EXAMINATIONS],
    );
    const allServices = useMemo(() => services, [services]);
    const counterList = useMemo(() => COUNTER_LIST, [COUNTER_LIST]);

    return (
        <>
            <ScrollToTop />
            <Hero />
            <section id="vizsgalataink">
                <SectionTitle title="Vizsgálataink" />
                <ServiceList services={medicalExaminations} />
            </section>
            <section>
                <CounterSection list={counterList} />
            </section>
            <section id="rendelo">
                <SectionTitle title="A Rendelő Bemutatása" />
                <div className="flex justify-center">
                    <p className="text-gray-600 text-center w-full md:w-1/2 p-3 md:p-0">
                        A Csőszi Endoszkópos KFT két telephellyel működik
                        Kecskeméten gyomor-bél rendszeri endoszkópiás profillal.
                        Mindkét helyszínen magas technikai színvonalon, magasan
                        kvalifikált munkatársakkal várjuk betegeinket. Az egyik
                        rendelő a Bagoly Egészségház keretei között működik, a
                        másik, nagyobb kapacitású egy exkluzív környezetben,
                        Kecskemét központjához közel került kialakításra a
                        Faragó Béla fasor 4 szám alatt.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row mt-8">
                    <img
                        className="w-full md:w-1/4 p-1"
                        src="/img/portfolios/1.webp"
                        alt="Slide 1"
                    />
                    <img
                        className="w-full md:w-1/4 p-1"
                        src="/img/portfolios/2.webp"
                        alt="Slide 2"
                    />
                    <img
                        className="w-full md:w-1/4 p-1"
                        src="/img/portfolios/3.webp"
                        alt="Slide 3"
                    />
                    <img
                        className="w-full md:w-1/4 p-1"
                        src="/img/portfolios/4.webp"
                        alt="Slide 4"
                    />
                </div>
            </section>
            <section id="orvosok">
                <SectionTitle title="Orvosok" />
                <div className="bg-blue-500 py-20 px-10 w-full">
                    <DoctorCards />
                </div>
            </section>
            <section id="araink">
                <SectionTitle title="Áraink" />
                <PricesList items={allServices} />
            </section>
            <section id="kapcsolat">
                <SectionTitle title="Kapcsolat" />
            </section>
        </>
    );
};

export default WelcomeContainer;
