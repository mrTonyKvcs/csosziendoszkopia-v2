import PropTypes from "prop-types";

const ServiceList = ({ services }) => {
    return (
        <div className="flex flex-wrap p-5">
            {services.map((service) => (
                <div
                    key={service.name}
                    className="flex flex-col justify-center items-center gap-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-3 md:p-10"
                >
                    <img
                        className="icofont"
                        src={service.icon}
                        width="55"
                        alt={service.name}
                    />
                    <h3 className="text-xl">{service.name}</h3>
                    <p className="text-gray-600 text-center">{service.text}</p>
                </div>
            ))}
        </div>
    );
};

ServiceList.propTypes = {
    services: PropTypes.instanceOf(Array).isRequired,
};

export default ServiceList;
