import { classNames } from "@/utils";
import { useState, useCallback } from "react";
import TabContent from "./TabContent";

const TabNavigation = ({ tabs }) => {
    const [currentTab, setCurrentTab] = useState(
        tabs.find((tab) => tab.current)
    );
    const handleTabChange = useCallback((name) => {
        Object.values(tabs).map((tab) => (tab.current = false));
        const newTab = tabs.find((tab) => tab.name === name);
        newTab.current = true;
        setCurrentTab(newTab);
    }, []);

    return (
        <div>
            {/* <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full border-gray-300 rounded-sm focus:border-blue-500 focus:ring-blue-500"
                    defaultValue={currentTab.name}
                    onChange={(e) => handleTabChange(currentTab.name)}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div> */}
            {/* <div className="hidden sm:block"> */}
            <div className="">
                <div className="border-b border-gray-200">
                    <nav className="flex -mb-px" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <a
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                    tab.current
                                        ? "border-blue-500 text-blue-600 cursor-auto"
                                        : "cursor-pointer border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                    "w-1/4 border-b-2 py-4 px-1 text-center text-md font-medium"
                                )}
                                aria-current={tab.current ? "page" : undefined}
                                onClick={(e) => handleTabChange(tab.name)}
                            >
                                {tab.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
            <TabContent content={currentTab.consultations} />
        </div>
    );
};

export default TabNavigation;
