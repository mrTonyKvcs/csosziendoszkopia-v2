const people = [
    {
        name: "Dr. Csőszi Tibor",
        title: "Főorvos",
        imageUrl: "/img/doctors/dr-csoszi-tibor.jpg",
    },
    {
        name: "Dr. Dubravcsik Zsolt",
        title: "Főorvos",
        imageUrl: "/img/doctors/dr-dubravcsik-zsolt.jpg",
    },
    {
        name: "Dr. Velkei Tamás",
        title: "Főorvos",
        imageUrl: "/img/doctors/dr-velkei-tamas.jpg",
    },
    {
        name: "Dr. Novák Péter",
        title: "Főorvos",
        imageUrl: "/img/doctors/avatar.png",
    },
];

const DoctorCards = () => {
    return (
        <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
        >
            {people.map((person) => (
                <li
                    key={person.name}
                    className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-sm bg-white text-center shadow"
                >
                    <div className="flex flex-1 flex-col p-8">
                        <img
                            className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                            src={person.imageUrl}
                            alt=""
                        />
                        <h3 className="mt-6 text-xl font-medium text-gray-900">
                            {person.name}
                        </h3>
                        <dl className="mt-1 flex flex-grow flex-col justify-between">
                            <dd className="text-lg text-gray-500">
                                {person.title}
                            </dd>
                        </dl>
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="flex w-0 flex-1">
                                {/* <button
                                    type="button"
                                    className="uppercase relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                                >
                                    Bemutatkozás
                                </button> */}
                                <a
                                    href="#"
                                    className="uppercase relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 hover:text-blue-500"
                                >
                                    Bejelentkezés
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default DoctorCards;
