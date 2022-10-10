import React from "react";

const CountN = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            <p className="text-xl">{props.count}%</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                    className={`bg-${props.bgColor} h-2.5 rounded-full`}
                    style={{ width: `${props.count}%`}}
                ></div>
            </div>
        </React.Fragment>
    );
};

export default CountN;
