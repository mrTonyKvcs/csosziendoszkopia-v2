import { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import WelcomeContainer from "@/Containers/Welcome";
import Guest from "@/Layouts/GuestLayout";
import Loading from "@/Components/UI/Loading";

export default function Welcome({ services }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (document.readyState === "complete") {
            setIsLoading(false);
        }
    }, [document.readyState]);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <Guest>
                    <Head>
                        <title>Üdvözöljük</title>
                        <link
                            rel="icon"
                            type="image/svg+xml"
                            href="/icons/gastroscopy.svg"
                        />
                        <meta
                            name="description"
                            content="Gasztroszkópia és Colonoscopia - Professzionális endoszkópos vizsgálatok a gasztroenterológia területén. Gasztroszkópiával vizsgáljuk a nyelőcsőt, gyomrot és nyombért, ideértve a fekélyek, refluxbetegség és lisztérzékenység okainak kutatását. Colonoscopia során feltérképezzük a vastagbél gyulladásait, daganatos elváltozásait és rákelőző állapotokat. Végzünk biopsziákat és kisebb elváltozások eltávolítását. Továbbá, konzultációink során 15-30 perc alatt személyre szabott orvosi tanácsadást biztosítunk."
                        />
                        <meta
                            name="keywords"
                            content="gasztroszkópia, colonoscopia, gasztroenterológia, orvos, szakorvos, egészségügy"
                        />
                    </Head>
                    <WelcomeContainer services={services} />
                </Guest>
            )}
        </>
    );
}
