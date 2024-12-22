import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Result.css"; // Import a separate CSS file for styling

const Result = () => {
    const location = useLocation();
    const { prediction } = location.state || {};

    return (
        <div className="result-container">
            <h1>Prediction Result</h1>
            <div className="result-box">
                <h2>{prediction ? prediction : "No Prediction Available"}</h2>
            </div>
        </div>
    );
};

export default Result;
