import React from "react";
const Search = ({ searchStr, searchhandler }) => {
    return (
        <React.Fragment>
            <input
                id="search"
                type="text"
                placeholder="Chercher.."
                value={searchStr}
                onChange={searchhandler}
            />
            <hr />
        </React.Fragment>
    );
};

export default Search;
