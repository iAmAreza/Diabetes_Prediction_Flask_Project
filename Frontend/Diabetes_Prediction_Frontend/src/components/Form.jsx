import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Form.css"; // Create this CSS file for styling

const Form = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        gender: "",
        age: "",
        hypertension: "",
        heart_disease: "",
        smoking_history: "",
        bmi: "",
        blood_glucose_level: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Convert numeric inputs to numbers
        const numericFields = ["age", "hypertension", "heart_disease", "bmi", "blood_glucose_level"];
        setFormData({
            ...formData,
            [name]: numericFields.includes(name) ? Number(value) : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:5000/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            navigate("/result", { state: { prediction: result.prediction } });
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while fetching the prediction.");
        }
    };

    return (
        <div className="form-container">
            <h1>Diabetes Prediction</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Gender:</label>
                    <select name="gender" onChange={handleChange} required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Age:</label>
                    <input type="number" name="age" onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Hypertension:</label>
                    <select name="hypertension" onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Heart Disease:</label>
                    <select name="heart_disease" onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Smoking History:</label>
                    <select name="smoking_history" onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="never">Never</option>
                        <option value="former">Former</option>
                        <option value="current">Current</option>
                        <option value="not current">Not Current</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>BMI (e.g., 27.32):</label>
                    <input
                        type="number"
                        step="0.01"
                        name="bmi"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Blood Glucose Level:</label>
                    <input type="number" name="blood_glucose_level" onChange={handleChange} required />
                </div>

                <button type="submit" className="submit-button">Predict</button>
            </form>
        </div>
    );
};

export default Form;
