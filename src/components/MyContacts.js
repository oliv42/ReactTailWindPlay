import React, { useState, useEffect } from "react";
import Search from "./Search";
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";
import TableUsers from "./TableUsers";

export default function MyContacts() {
    const [search, setSearch] = useState("");
    const [user, setUser] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                setUser(json);
                setIsloading(false);
            })
            .catch((error) => console.error(error.message));
    }, []);

    useUpdateDocTitle(search);

    const msgDisplay = (msg, color) => {
        return <p style={{ textAlign: "center", color: color }}>{msg}</p>;
    };
    console.log(user);
    return (
        <React.Fragment>
            {isLoading ? (
                msgDisplay("Veuillez patienté", "red")
            ) : (
                <Search searchStr={search} searchHandler={handleChange} />
            )}
            <hr/>
            {<TableUsers dataArray={user}/>}
        </React.Fragment>
    );
}
