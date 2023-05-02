import { useCallback } from "react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Checkbox from "@/Components/Checkbox";

const PersonalDetails = ({ addPersonalDetails, setActiveStep }) => {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        setError,
        clearErrors,
    } = useForm({
        name: "Teszt Elek",
        email: "attila.kovacs92@gmail.com",
        phone: "+36704330677",
        socialSecurityNumber: "115652436",
        zip: "6000",
        city: "",
        street: "Petofi S. utca 7 1/1",
        gdpr: 1,
    });

    const validate = useCallback(() => {
        clearErrors();
        axios
            .post("/api/personal-details-validation", data)
            .then((response) => {
                addPersonalDetails((prevData) => {
                    return { ...prevData, personalDetails: response.data };
                });
                setActiveStep(3);
            })
            .catch((error) => {
                setError(error.response.data.errors);
            });
    }, [data]);

    return (
        // <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <form>
            <div className="">
                <div className="grid grid-cols-6 gap-6 px-4 py-5 border-gray-200 sm:p-0">
                    <div className="flex flex-col col-span-6 sm:col-span-2">
                        <InputLabel htmlFor="name" value="Név" />

                        <TextInput
                            id="name"
                            type="text"
                            name="name"
                            value={data.name}
                            className="block w-full mt-1"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <small>Példa: Teszt Elek</small>

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="flex flex-col col-span-6 sm:col-span-2">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="text"
                            name="email"
                            value={data.email}
                            className="block w-full mt-1"
                            autoComplete="email"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <small>Példa: pelda@gmail.com</small>

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="flex flex-col col-span-6 sm:col-span-2">
                        <InputLabel htmlFor="phone" value="Telefonszám" />

                        <TextInput
                            id="phone"
                            type="text"
                            name="phone"
                            value={data.phone}
                            className="block w-full mt-1"
                            autoComplete="phone"
                            isFocused={true}
                            onChange={(e) => setData("phone", e.target.value)}
                        />
                        <small>Példa: +36708880011</small>

                        <InputError message={errors.phone} className="mt-2" />
                    </div>

                    <div className="flex flex-col col-span-6 sm:col-span-2">
                        <InputLabel
                            htmlFor="socialSecurityNumber"
                            value="Taj-szám"
                        />

                        <TextInput
                            id="socialSecurityNumber"
                            type="text"
                            name="socialSecurityNumber"
                            value={data.socialSecurityNumber}
                            className="block w-full mt-1"
                            autoComplete="socialSecurityNumber"
                            isFocused={true}
                            onChange={(e) =>
                                setData("socialSecurityNumber", e.target.value)
                            }
                        />
                        <small>Példa: 115652436</small>

                        <InputError
                            message={errors.socialSecurityNumber}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex flex-col col-span-6 sm:col-span-2">
                        <InputLabel htmlFor="zip" value="Irányítószám" />

                        <TextInput
                            id="zip"
                            type="text"
                            name="zip"
                            value={data.zip}
                            className="block w-full mt-1"
                            autoComplete="zip"
                            isFocused={true}
                            onChange={(e) => setData("zip", e.target.value)}
                        />
                        <small>Példa: 6000</small>

                        <InputError message={errors.zip} className="mt-2" />
                    </div>

                    <div className="flex flex-col col-span-6 sm:col-span-2">
                        <InputLabel htmlFor="city" value="Város" />

                        <TextInput
                            id="city"
                            type="text"
                            name="city"
                            value={data.city}
                            className="block w-full mt-1"
                            autoComplete="zip"
                            isFocused={true}
                            onChange={(e) => setData("city", e.target.value)}
                        />
                        <small>Példa: Kecskemét</small>

                        <InputError message={errors.city} className="mt-2" />
                    </div>

                    <div className="flex flex-col col-span-6 sm:col-span-2">
                        <InputLabel htmlFor="street" value="Utca és házszám" />

                        <TextInput
                            id="street"
                            type="text"
                            name="street"
                            value={data.street}
                            className="block w-full mt-1"
                            autoComplete="zip"
                            isFocused={true}
                            onChange={(e) => setData("street", e.target.value)}
                        />
                        <small>Példa: Faragó Béla fasor 4.</small>

                        <InputError message={errors.street} className="mt-2" />
                    </div>
                </div>
                <div className="flex items-start pt-4 mt-1 mb-1 sm:pt-5">
                    <div className="flex items-center h-6 mt-1">
                        <Checkbox
                            name="gdpr"
                            checked={data.gdpr}
                            onChange={(e) => setData("gdpr", e.target.checked)}
                        />
                        <InputError message={errors.gdpr} className="mt-2" />
                    </div>
                    <div>
                        <div className="ml-3 text-md">
                            <label
                                htmlFor="comments"
                                className="font-medium text-gray-700"
                            >
                                Elfogadom a feltételeket
                            </label>
                            <p className="text-gray-500">
                                A "Jegyvásárlás" gomb megnyomásával Ön elfogadja
                                az{" "}
                                <a
                                    href="/pdfs/aszf.pdf"
                                    className="text-gold"
                                    target="_blank"
                                >
                                    Általános Szerződési Feltételeket, az
                                    Adatkezelési Szabályzatot
                                </a>
                                , a 45/2014. (II. 26) Korm. rendelet 15. §-a
                                szerinti tájékoztatást,{" "}
                                <a
                                    href="/pdfs/adattovabbitasi-nyilatkozat.pdf"
                                    className="text-gold"
                                    target="_blank"
                                >
                                    Adattovábbítási nyilatkozatot
                                </a>{" "}
                                valamint kijelenti, hogy elmúlt 18 éves.{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-1 mb-4 sm:px-6">
                    {/* @error('gdpr') <span className="error">{{ $message }}</span> @enderror */}
                </div>
            </div>

            <div className="flex flex-col-reverse mt-5 md:flex-row">
                <button
                    onClick={() => setActiveStep(1)}
                    type="button"
                    className="mt-5 md:mt-0 uppercase relative inline-flex items-center gap-x-1.5 mr-3 rounded-sm bg-white-600 px-3 py-2 text-sm md:text-md font-semibold text-blue-600 shadow-sm hover:bg-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    <ArrowLeftIcon
                        className="-ml-0.5 h-5 w-5"
                        aria-hidden="true"
                    />
                    Vissza
                </button>
                <button
                    onClick={validate}
                    type="button"
                    className="uppercase relative inline-flex items-center gap-x-1.5 rounded-sm bg-blue-600 px-3 py-2 text-sm md:text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Adatok ellenőrzése és fizetés
                    <ArrowRightIcon
                        className="-ml-0.5 h-5 w-5"
                        aria-hidden="true"
                    />
                </button>
            </div>
        </form>
    );
};

export default PersonalDetails;
