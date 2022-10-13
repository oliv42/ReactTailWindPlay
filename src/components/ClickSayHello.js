import React, {useState } from "react";
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";

export default function ClickSayHello() {
    const buttonStyle =
        "block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded";
    const [text, setText] = useState("");
    useUpdateDocTitle(text);
    return (
        <button className={buttonStyle} onClick={() => setText("Hello World")}>
            Cliquez
        </button>
    );
}
