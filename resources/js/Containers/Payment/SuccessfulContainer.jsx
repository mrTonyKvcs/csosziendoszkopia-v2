import Hero from "@/Components/UI/Page/Hero";

const SuccessfulContainer = ({ appointment, transactionId }) => {
    console.log(appointment);
    return (
        <>
            <Hero text="Sikeres bankkártyás fizetés" />
            <section className="flex justify-center my-10">
                <div className="w-full md:w-2/5">
                    <div className="text-lg title">
                        <h3 className="font-bold">
                            Sikeres online fizetés és bejelentkezés!
                        </h3>
                        <p className="my-3 text-lg">
                            <strong>SimplePay tranzakció azonosító: </strong>
                            {transactionId}
                        </p>
                        <p
                            className="my-3"
                            // style="font-size: 22px;"
                        >
                            A megadott email címre küldjük az időponttal és a
                            vizsgálattal kapcsolatos információkat.
                            (Előfordulhat hogy a promóciós mappába érkezik az
                            email)
                        </p>
                        {/* <a href="/" style="font-size: 22px color: #1A76D1;">Vissza a főoldalra</a> */}
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

export default SuccessfulContainer;
