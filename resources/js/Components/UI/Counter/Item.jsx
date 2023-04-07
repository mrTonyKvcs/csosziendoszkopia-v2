import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CounterItem = ({ item }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (value < item.maxValue) {
                setValue((prevValue) => prevValue + 1);
            }
        }, 10);

        return () => clearInterval(interval);
    }, [value]);

    return (
        <div
            key={item.name + item.maxValue}
            className="mx-auto flex max-w-xs flex-col gap-y-4 items-center"
        >
            <div>{item.icon}</div>
            <div className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {value}
            </div>
            <div className="text-md uppercase leading-7 text-white">
                {item.name}
            </div>
        </div>
    );
};

CounterItem.propTypes = {
    item: PropTypes.shape({
        icon: PropTypes.instanceOf(Object).isRequired,
        name: PropTypes.string.isRequired,
        maxValue: PropTypes.number.isRequired,
    }).isRequired,
};

export default CounterItem;
