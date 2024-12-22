import joblib
import pandas as pd

# Load the saved model, scaler, and column order
model = joblib.load('predict_diabetes_model.joblib')  # Trained model
scaler = joblib.load('scaler.joblib')  # StandardScaler
column_order = joblib.load('column_order.joblib')  # Column order after preprocessing

# Define numerical and categorical columns
numerical_columns = ['age', 'bmi', 'blood_glucose_level']  # Match the scaler training
categorical_columns = ['gender', 'smoking_history']

# Manual user input (replace these values to test)
user_input = {
    'gender': 'Male',
    'age': 45,
    'hypertension': 1,
    'heart_disease': 0,
    'smoking_history': 'never',
    'bmi': 24.5,
    'blood_glucose_level': 110
}

# Convert input to a DataFrame
user_df = pd.DataFrame([user_input])

# Step 1: Apply one-hot encoding for categorical features
encoded_user_input = pd.get_dummies(user_df, columns=categorical_columns, drop_first=True)

# Step 2: Add missing columns to match the saved column order
for col in column_order:
    if col not in encoded_user_input.columns:
        encoded_user_input[col] = 0

# Step 3: Ensure the column order matches
encoded_user_input = encoded_user_input[column_order]

# Step 4: Scale only the numerical columns that were used during training
encoded_user_input[numerical_columns] = scaler.transform(encoded_user_input[numerical_columns])

# Step 5: Make predictions (keep as DataFrame to retain feature names)
prediction = model.predict(encoded_user_input)[0]
print(f"Prediction: {'Diabetic' if prediction == 1 else 'Not Diabetic'}")
