import React, { useState, useCallback } from "react";
import "./App.css";
import CountN from "./components/CountN";
import ButtonPoucent from "./components/ButtonPoucent";

const App = () => {
    const [countOne, setcountOne] = useState({
        value: 0,
        btnColor: "emerald-300",
        hoverBtnColor: "emerald-200",
        increment: 25,
    });
    const [countTwo, setcountTwo] = useState({
        value: 0,
        btnColor: "indigo-800",
        hoverBtnColor: "indigo-700",
        increment: 5,
    });

    const incrementCountOne = useCallback(
        (val) => {
            console.log("incremente 1");
            countOne.value < 100 &&
                setcountOne({ ...countOne, value: countOne.value + val });
        },
        [countOne]
    );

    const incrementCountTwo = useCallback(
        (val) => {
            countTwo.value < 100 &&
                setcountTwo({ ...countTwo, value: countTwo.value + val });
        },
        [countTwo]
    );

    return (
        <div className="h-[100vh] bg-slate-500">
            <CountN count={countOne.value} bgColor={countOne.btnColor}>
                Cpt1
            </CountN>
            <CountN count={countTwo.value} bgColor={countTwo.btnColor}>
                Cpt2
            </CountN>

            <ButtonPoucent
                handClick={incrementCountOne}
                bgColor={countOne.btnColor}
                hoverBgColor={countOne.hoverBtnColor}
                increment={countOne.increment}
            >
                Count 1 BP
            </ButtonPoucent>
            <ButtonPoucent
                handClick={incrementCountTwo}
                bgColor={countTwo.btnColor}
                hoverBgColor={countTwo.hoverBtnColor}
                increment={countTwo.increment}
            >
                Count 2 BP
            </ButtonPoucent>
            <div
                className="bg-emerald-300 hover:bg-emerald-200"
                style={{ display: "none" }}
            >
                Juste pour inculre les couleur Tailwind
            </div>
            <div
                className="bg-indigo-800 hover:bg-indigo-700"
                style={{ display: "none" }}
            >
                Juste pour inculre les couleur Tailwind
            </div>
        </div>
    );
};

export default App;
