from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import joblib
import pandas as pd

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Load the saved model, scaler, and column order
model = joblib.load('predict_diabetes_model.joblib')  # Trained model
scaler = joblib.load('scaler.joblib')  # StandardScaler
column_order = joblib.load('column_order.joblib')  # Column order after preprocessing

# Define numerical and categorical columns
numerical_columns = ['age', 'bmi', 'blood_glucose_level']  # Match the scaler training
categorical_columns = ['gender', 'smoking_history']

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json  # Get JSON data from React 

    try:
        # Convert input data to DataFrame
        user_df = pd.DataFrame([data]) 
        
        # One-hot encode categorical data
        encoded_user_input = pd.get_dummies(user_df, columns=categorical_columns, drop_first=True)
        
        # Add missing columns
        for col in column_order:
            if col not in encoded_user_input.columns:
                encoded_user_input[col] = 0
        
        # Ensure column order matches
        encoded_user_input = encoded_user_input[column_order]
        
        # Scale numerical data
        encoded_user_input[numerical_columns] = scaler.transform(encoded_user_input[numerical_columns])
        
        print("Scaled numerical data (Flask):", encoded_user_input[numerical_columns])

        
        # Make prediction
        prediction = model.predict(encoded_user_input)[0]
        result = "Diabetic" if prediction == 1 else "Not Diabetic"
        
        return jsonify({'prediction': result})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
