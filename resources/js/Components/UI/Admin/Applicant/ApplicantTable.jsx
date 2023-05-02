import React, { useState } from "react";

const ApplicantTable = ({ data }) => {
    const [filterText, setFilterText] = useState("");

    // Handler for filter text change
    const handleFilterTextChange = (event) => {
        setFilterText(event.target.value);
    };

    // Filtered data based on filter text
    const filteredData = data.filter(
        (patient) =>
            patient.name.includes(filterText) ||
            patient.email.includes(filterText) ||
            patient.phone.includes(filterText)
    );

    // Table header and rows
    const tableHeader = (
        <thead className="bg-gray-50">
            <tr>
                <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                    Név
                </th>
                <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                    Email
                </th>
                <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                    Telefonszám
                </th>
            </tr>
        </thead>
    );

    const tableRows = filteredData.map((patient) => (
        <tr key={patient.id} className="bg-white">
            <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                {patient.name}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                {patient.email}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                {patient.phone}
            </td>
        </tr>
    ));

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <input
                    type="text"
                    value={filterText}
                    onChange={handleFilterTextChange}
                    placeholder="Keresés"
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-400 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <div className="relative inline-flex">
                    <svg
                        className="absolute top-0 right-0 w-2 h-2 m-4 pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 412 232"
                    >
                        <path
                            fill="#fff"
                            d="M411.314 1.304L285.87 126.748 411.314 252.192 379.44 284.066 254.996 159.622 130.552 284.066 98.678 252.192 224.122 126.748 98.678 1.304 130.552-30.57l124.444 124.444 124.444-124.444z"
                        />
                    </svg>
                </div>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
                {tableHeader}
                <tbody>{tableRows}</tbody>
            </table>
        </div>
    );
};

export default ApplicantTable;
