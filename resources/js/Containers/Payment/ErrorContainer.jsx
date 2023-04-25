import Hero from "@/Components/UI/Page/Hero";

const ErrorContainer = ({ transaction }) => {
    return (
        <>
            <Hero text="Bankkártyás fizetési hiba" />
            <section className="mt-10 appointment single-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="appointment-inner">
                                <div className="title">
                                    {transaction.status === "CANCEL" && (
                                        <h3 className="pb-3 mb-5 text-3xl text-center uppercase text-gold">
                                            Ön megszakította a fizetést
                                        </h3>
                                    )}
                                    {transaction.status === "TIEOUT" && (
                                        <h3 className="pb-3 mb-5 text-3xl text-center uppercase text-gold">
                                            Ön túllépte a tranzakció
                                            elindításának lehetséges maximális
                                            idejét.
                                        </h3>
                                    )}
                                    {transaction.status === "FAIL" && (
                                        <>
                                            <h3 className="pb-3 mb-5 text-3xl text-center uppercase border-b border-opacity-25 text-gold border-gold">
                                                Sikertelen tranzakció
                                            </h3>
                                            <h3 className="pb-3 mb-5 text-3xl text-center uppercase border-b border-opacity-25 ">
                                                SimplePay tranzakció azonosító:
                                                {transaction.transaction_id}
                                            </h3>
                                            <h3 className="pb-3 mb-5 text-3xl text-center uppercase border-b border-opacity-25 ">
                                                Kérjük, ellenőrizze a tranzakció
                                                során megadott adatok
                                                helyességét. Amennyiben minden
                                                adatot helyesen adott meg, a
                                                visszautasítás okának
                                                kivizsgálása érdekében kérjük,
                                                szíveskedjen kapcsolatba lépni
                                                kártyakibocsátó bankjával.
                                            </h3>
                                        </>
                                    )}
                                    {/* <a
                                        href="/"
                                        style={`font-size: 22px color: #1A76D1`}
                                    >
                                        Vissza a főoldalra
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="rendelo" className="portfolio section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <div className="owl-carousel portfolio-slider">
                                {/* @for ($i = 1; $i < 7; $i++)
                                <div className="single-pf wow fadeIn" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    {{--<img src="/img/sliders/{{$i}}.png" alt="#">--}}
                                    <img src="/img/portfolios/{{$i}}.jpg" alt="#" style="width: auto; height: 320px;">
                                </div>
                            @endfor */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorContainer;
