import React, { useState } from "react";
import "./App.css";
import CountN from "./components/CountN";
import ButtonPoucent from "./components/ButtonPoucent";

const App = () => {
    const [countOne, setcountOne] = useState({
        value: 50,
        btnColor: "emerald-300",
        hoverBtnColor: "emerald-200",
        increment: 25,
    });
    const [countTwo, setcountTwo] = useState({
        value: 15,
        btnColor: "indigo-800",
        hoverBtnColor: "indigo-700",
        increment: 5,
    });

    return (
        <div className="h-[100vh] bg-slate-500">
            <CountN count={countOne.value} bgColor={countOne.btnColor} />
            <CountN count={countTwo.value} bgColor={countTwo.btnColor} />

            <ButtonPoucent bgColor={countOne.btnColor} hoverBgColor={countOne.hoverBtnColor}>Count 1</ButtonPoucent>
            <ButtonPoucent bgColor={countTwo.btnColor} hoverBgColor={countTwo.hoverBtnColor}>Count 1</ButtonPoucent>
            <div className="bg-emerald-300 hover:bg-emerald-200" style={{ display: "none" }}>
                Juste pour inculre les couleur Tailwind
            </div>
            <div className="bg-indigo-800 hover:bg-indigo-700" style={{ display: "none" }}>
                Juste pour inculre les couleur Tailwind
            </div>
        </div>
    );
};

export default App;
