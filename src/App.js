import React, { useState, useEffect, useMemo } from "react";
import Profile from "./components/Profile";
import Alert from "./components/Alert";
import "./App.css";
import axios from "axios";

function App() {
    const buttonStyleLight =
        "uppercase mx-auto shadow bg-indigo-200 hover:bg-indigo-100 focus:shadow-outline focus:outline-none text-black text-xs py-3 px-10 rounded my-4 ml-40";
    const buttonStyleDark =
        "uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded my-4 ml-40";

    const lightTheme = "h-[100vh] bg-slate-300"
    const darkTheme = "h-[100vh] bg-slate-800"
    const [count, setCount] = useState(1);
    const [profil, setProfil] = useState({});
    const [dark, setDark] = useState(false);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${count}`)
            .then((rep) => {
                setProfil(rep.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [count]);

    const isOverTenMemoValue = useMemo(() => {
        console.log('fonction +10')
        return count > 10;
    },[count])
    

    const goDark = () => {
        setDark(() => !dark);
    };

    return (
        <div className={dark? darkTheme:lightTheme}>
            <h1 className={`text-center font-bold text-5xl ${dark? 'text-white':''}`}>UseNemo()</h1>
            {isOverTenMemoValue && <Alert />}
            <button
                className={dark? buttonStyleDark:buttonStyleLight}
                onClick={() => setCount(count + 1)}
            >
                Increment <strong>{count}</strong>
            </button>
            <button className={dark? buttonStyleDark:buttonStyleLight} onClick={goDark}>
                Change {dark? 'clair':'Dark'} Mode
            </button>
            <Profile profile={profil} count={count} />
        </div>
    );
}

export default App;
