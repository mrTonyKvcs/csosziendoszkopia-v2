import PropTypes from "prop-types";
import CounterItem from "./Item";

const CounterSection = ({ list }) => {
    return (
        <div
            style={{
                backgroundImage: `url(/img/counter.webp)`,
                backgroundSize: `cover`,
            }}
            className="py-24 sm:py-32"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {list.map((item) => (
                        <CounterItem key={item.name} item={item} />
                    ))}
                </dl>
            </div>
        </div>
    );
};

CounterSection.propTypes = {
    list: PropTypes.instanceOf(Array).isRequired,
};

export default CounterSection;
