const people = [
    {
        id: 11,
        name: "Dr. Csőszi Tibor",
        title: "Főorvos",
        imageUrl: "/img/doctors/dr-csoszi-tibor.jpg",
    },
    {
        id: 27,
        name: "Dr. Dubravcsik Zsolt",
        title: "Főorvos",
        imageUrl: "/img/doctors/dr-dubravcsik-zsolt.jpg",
    },
    {
        id: 25,
        name: "Dr. Velkei Tamás",
        title: "Főorvos",
        imageUrl: "/img/doctors/dr-velkei-tamas.jpg",
    },
    {
        id: 28,
        name: "Dr. Novák Péter",
        title: "Szakorvos",
        imageUrl: "/img/doctors/dr-novak-peter.png",
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
                    className="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-sm shadow"
                >
                    <div className="flex flex-col flex-1 p-8">
                        <img
                            className="flex-shrink-0 w-32 h-32 mx-auto rounded-full"
                            src={person.imageUrl}
                            alt=""
                        />
                        <h3 className="mt-6 text-xl font-medium text-gray-900">
                            {person.name}
                        </h3>
                        <dl className="flex flex-col justify-between flex-grow mt-1">
                            <dd className="text-lg text-gray-500">
                                {person.title}
                            </dd>
                        </dl>
                    </div>
                    <div>
                        <div className="flex -mt-px divide-x divide-gray-200">
                            <div className="flex flex-1 w-0">
                                {/* <button
                                    type="button"
                                    className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-semibold text-gray-900 uppercase border border-transparent rounded-bl-lg gap-x-3"
                                >
                                    Bemutatkozás
                                </button> */}
                                <a
                                    href={`/online-bejelentkezes/` + person.id}
                                    className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-semibold text-gray-900 uppercase border border-transparent rounded-bl-lg gap-x-3 hover:text-blue-500"
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
