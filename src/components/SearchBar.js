
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SearchBar.css'


import ErrorBoundary from "../ErrorBoundary";




const SearchBar = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };


    const navigate = useNavigate();

    const handleSubmit = () => {

        navigate("/" + inputValue.toLowerCase());

    }

    return (

        <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <div className="searchBar">
                <input
                    placeholder="Type the name of a pokemon"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />

                <div className="buttonDiv"><button type="submit" onClick={handleSubmit} >Search</button></div>

            </div>
        </ErrorBoundary>
    );
};
export default SearchBar;