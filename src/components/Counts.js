import React, { useReducer } from "react";

const initialState = {
    countOne: 0,
    countTwo: 0
};
const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'increment':
            return {...state, countOne: state.countOne + action.value};
        case 'decrement':
            return {...state, countOne: state.countOne - action.value};
        case 'increment2':
            return {...state, countTwo: state.countTwo + action.value};
        case 'decrement2':
            return {...state, countTwo: state.countTwo - action.value};
        
        case 'raz':
                return initialState;
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
            <div className="gap-8 columns-3 m-7">
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
                            <span className="font-medium">Compteur</span> {count.countOne}
                        </div>
                    </div>
                    <button className={styleTailwind + ' text-green-500'} onClick={() => dispatch({type:'increment', value: 3})}>+ Incremente +</button>
                    <button className={styleTailwind + ' text-red-500'} onClick={() => dispatch({type:'decrement', value: 1})}>- Decremente -</button>
                </div>
                <button className={styleTailwind + ' text-white w-full h-40'} onClick={() => dispatch({type:'raz', value:0})}>RAZ</button>
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
                            <span className="font-medium">Compteur</span> {count.countTwo}
                        </div>
                    </div>
                    <button className={styleTailwind + ' text-green-500'} onClick={() => dispatch({type:'increment2', value: 1})}>+ Incremente +</button>
                    <button className={styleTailwind + ' text-red-500'} onClick={() => dispatch({type:'decrement2', value: 10})}>- Decremente -</button>
    </div>
            </div>
        </div>
    );
}
