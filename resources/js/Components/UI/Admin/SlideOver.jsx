import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const SlideOver = ({
    children,
    open,
    setOpen,
    title,
    action,
    disabled,
    hideSaveButton = false,
}) => {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-50 bg-gray-500 bg-opacity-50"
                onClose={setOpen}
            >
                <div className="fixed inset-0" />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden bg-gray-500 bg-opacity-50">
                        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none sm:pl-16">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="w-screen max-w-md pointer-events-auto">
                                    <form className="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl">
                                        <div className="flex-1 h-0 overflow-y-auto">
                                            <div className="px-4 py-6 bg-blue-700 sm:px-6">
                                                <div className="flex items-center justify-between">
                                                    <Dialog.Title className="font-semibold leading-6 text-white text-md">
                                                        {title}
                                                    </Dialog.Title>
                                                    <div className="flex items-center ml-3 h-7">
                                                        <button
                                                            type="button"
                                                            className="text-blue-200 bg-blue-700 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                            onClick={() =>
                                                                setOpen(false)
                                                            }
                                                        >
                                                            <span className="sr-only">
                                                                Close panel
                                                            </span>
                                                            <XMarkIcon
                                                                className="w-6 h-6"
                                                                aria-hidden="true"
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* <div className="mt-1">
                                                    <p className="text-sm text-blue-300">
                                                        Get started by filling
                                                        in the information below
                                                        to create your new
                                                        project.
                                                    </p>
                                                </div> */}
                                            </div>
                                            <div className="flex flex-col justify-between flex-1">
                                                <div className="px-4 divide-y divide-gray-200 sm:px-6">
                                                    {children}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-end flex-shrink-0 px-4 py-4">
                                            <button
                                                type="button"
                                                className="px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-sm shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                onClick={() => setOpen(false)}
                                            >
                                                Mégsem
                                            </button>
                                            {hideSaveButton ||
                                                (action !== null && (
                                                    <button
                                                        disabled={disabled}
                                                        onClick={action}
                                                        type="button"
                                                        className="inline-flex justify-center px-3 py-2 ml-4 text-sm font-semibold text-white bg-blue-600 rounded-sm shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                                    >
                                                        Mentés
                                                    </button>
                                                ))}
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default SlideOver;
