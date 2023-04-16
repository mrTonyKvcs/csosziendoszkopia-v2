import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/utils";
import Warning from "../Alerts/Warning";

const getAppointmentName = (appointment) => {
    return (
        appointment.start_at.slice(0, -3) +
        "-" +
        appointment.end_at.slice(0, -3)
    );
};

const AppointmentSelector = ({ selected, setSelected, appointments }) => {
    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <>
                    {Object.keys(appointments).length === 0 ? (
                        <Warning text="Jelenleg nincs foglalható időpont." />
                    ) : (
                        <>
                            <Listbox.Label className="block font-medium leading-6 text-gray-900 text-md">
                                Időpont kiválasztása
                            </Listbox.Label>
                            <div className="relative mt-2">
                                <Listbox.Button className="relative w-full py-3 pl-3 pr-10 text-lg text-left text-gray-900 bg-white shadow-sm cursor-default ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 sm:leading-6">
                                    <span className="block truncate">
                                        {selected !== null
                                            ? getAppointmentName(selected)
                                            : " Válasszon Időpontot"}
                                    </span>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <ChevronUpDownIcon
                                            className="w-5 h-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Listbox.Button>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {Object.values(appointments)?.map(
                                            (appointment, index) => (
                                                <Listbox.Option
                                                    key={index}
                                                    className={({ active }) =>
                                                        classNames(
                                                            active
                                                                ? "bg-blue-600 text-white"
                                                                : "text-gray-900",
                                                            "relative cursor-default select-none py-2 pl-3 pr-9"
                                                        )
                                                    }
                                                    value={appointment}
                                                >
                                                    {({ selected, active }) => (
                                                        <>
                                                            <span
                                                                className={classNames(
                                                                    selected
                                                                        ? "font-semibold"
                                                                        : "font-normal",
                                                                    "block truncate"
                                                                )}
                                                            >
                                                                {getAppointmentName(
                                                                    appointment
                                                                )}
                                                            </span>

                                                            {selected ? (
                                                                <span
                                                                    className={classNames(
                                                                        active
                                                                            ? "text-white"
                                                                            : "text-blue-600",
                                                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                                                    )}
                                                                >
                                                                    <CheckIcon
                                                                        className="w-5 h-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            )
                                        )}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </>
                    )}
                </>
            )}
        </Listbox>
    );
};

export default AppointmentSelector;
