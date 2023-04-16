import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

const Warning = ({ text }) => {
    return (
        <div className="p-4 border-l-4 border-yellow-400 bg-yellow-50">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <ExclamationTriangleIcon
                        className="w-5 h-5 text-yellow-400"
                        aria-hidden="true"
                    />
                </div>
                <div className="ml-3">
                    <p className="text-yellow-700 text-md">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Warning;
