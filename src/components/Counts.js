import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state +1;
        case 'decrement':
            return state - 1;
        case 'raz':
                return state = 0;
        default:
            throw new Error("Action dispache counter doesn't existe");
    }
};
export default function Counts() {
    const styleTailwind =
        "block uppercase mx-auto my-3 shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-xs py-3 px-10 rounded";

    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div
                className="flex bg-red-100 rounded-lg p-4 text-sm text-red-700"
                role="alert"
            >
                <svg
                    className="w-5 h-5 inline mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                    ></path>
                </svg>
                <div>
                    <span className="font-medium">Compteur</span> {count}
                </div>
            </div>

            <button className={styleTailwind + ' text-green-500'} onClick={() => dispatch('increment')}>+ Incremente +</button>
            <button className={styleTailwind + ' text-red-500'} onClick={() => dispatch('decrement')}>- Decremente -</button>
            <button className={styleTailwind + ' text-white'} onClick={() => dispatch('raz')}>RAZ</button>
        </div>
    );
}
