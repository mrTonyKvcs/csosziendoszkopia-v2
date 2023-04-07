import { useMemo, useState } from "react";
import Hero from "@/Components/UI/Hero";
import SectionTitle from "@/Components/UI/SectionTitle";
import ServiceList from "@/Components/UI/Services/List";
import CounterSection from "@/Components/UI/Counter/Section";
import { ScrollToTop } from "@/Components/UI/ScroollToTop";
import { COUNTER_LIST, MEDICAL_EXAMINATIONS } from "@/constants";
import DoctorCards from "@/Components/UI/Sections/Doctors/Card";
import Contacts from "@/Components/UI/Contacts";
import { PricesList } from "@/Components/UI/Sections/Prices";

const WelcomeContainer = ({ services }) => {
    const medicalExaminations = useMemo(
        () => MEDICAL_EXAMINATIONS,
        [MEDICAL_EXAMINATIONS]
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
                        src="/img/portfolios/1.jpg"
                        alt="Slide 1"
                    />
                    <img
                        className="w-full md:w-1/4 p-1"
                        src="/img/portfolios/2.jpg"
                        alt="Slide 2"
                    />
                    <img
                        className="w-full md:w-1/4 p-1"
                        src="/img/portfolios/3.jpg"
                        alt="Slide 3"
                    />
                    <img
                        className="w-full md:w-1/4 p-1"
                        src="/img/portfolios/4.jpg"
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
                <div className="bg-blue-500 p-10 w-full flex flex-col justify-center items-center">
                    <div className="w-10/12 flex flex-col items-center">
                        <Contacts />
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2725.5212298584547!2d19.683446315606478!3d46.91213347914477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4743da0563063a3b%3A0x80d91a017ffa997a!2zS2Vjc2tlbcOpdCwgRmFyYWfDsyBCw6lsYSBmYXNvciA0LCA2MDAw!5e0!3m2!1sen!2shu!4v1589653555069!5m2!1sen!2shu"
                            width="100%"
                            height="300"
                            frameBorder={0}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex={0}
                            className="mt-7"
                        ></iframe>
                        <img
                            className="mt-7 mb-1 w-full md:w-1/2 h-auto "
                            src="/img/simplepay_bankcard_logo.png"
                            alt=""
                        ></img>
                    </div>
                </div>
                <div className="w-full text-center p-3">
                    <div>
                        <a
                            href="/pdfs/aszf.pdf"
                            className="text-blue-500"
                            target="_blank"
                        >
                            ÁSZF
                        </a>
                    </div>
                    © Copyright 2023 | csosziendoszkopia.hu
                </div>
            </section>
        </>
    );
};

export default WelcomeContainer;
