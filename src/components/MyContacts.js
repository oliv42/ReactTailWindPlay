import React, { useState, useEffect } from "react";
import Search from "./Search";
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";
import TableUsers from "./TableUsers";

export default function MyContacts() {
    const [search, setSearch] = useState("");
    const [user, setUser] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [resultSearch, setResultSearch] = useState([]);
    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    const filterUsers = () => {
        const findUsers = user.filter((user) => {
            return Object
            .values(user)
            .join(' ')
            .includes(search.toLocaleLowerCase());
        });
        setResultSearch(findUsers)
    };
    useEffect(() => {
        console.log("On fletch");
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                setUser(json);
                setIsloading(false);
            })
            .catch((error) => console.error(error.message));
    }, []);

    useEffect(() => {
        if (search !== "") {
            filterUsers();
        } else {
            setResultSearch([]);
        }
    }, [search]);

    useUpdateDocTitle(search);

    const msgDisplay = (msg, color) => {
        return <p style={{ textAlign: "center", color: color }}>{msg}</p>;
    };

    return (
        <React.Fragment>
            {isLoading ? (
                msgDisplay("Veuillez patienté", "red")
            ) : (
                <Search searchStr={search} searchHandler={handleChange} />
            )}
            <hr />
            {search !== "" ? (
                resultSearch.length === 0 ? (
                    msgDisplay("Aucun utilisateur correpondant", "blue")
                ) : (
                    <TableUsers dataArray={resultSearch} />
                )
            ) : (
                <TableUsers dataArray={user} />
            )}
        </React.Fragment>
    );
}
