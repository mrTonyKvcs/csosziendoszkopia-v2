export const PricesList = ({ items }) => {
    return (
        <div className="flex flex-wrap p-10">
            {items.map((item) => (
                <div
                    key={item.name}
                    className="mt-5 md:mt-4 w-full md:w-1/2 lg:w-1/3 xl:1/4 flex flex-col divide-y divide-gray-200 bg-white text-center shadow"
                >
                    <div className="flex flex-col p-8 h-270 items-center justify-center">
                        <img
                            className="mx-auto flex-shrink-0 rounded-full"
                            src={`/icons/` + item.icon}
                            width={55}
                            alt=""
                        />
                        <h3 className="mt-6 text-xl font-medium text-gray-900">
                            {item.name}
                        </h3>
                        <div className="mt-1 flex flex-grow flex-col justify-between">
                            <div className="text-lg text-gray-500 flex flex-col">
                                {item.informations.map((information, index) => (
                                    <span key={index}>
                                        <strong>{information.price}</strong> Ft{" "}
                                        {information.text !== null &&
                                            "/" + information.text}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
