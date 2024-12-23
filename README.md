# 🩺 Diabetes Prediction Web Application

A web application that predicts the likelihood of diabetes based on user input. This project utilizes **React** for the front-end, **Flask** for the back-end, and a trained **Machine Learning model** for prediction.

---

## 🌟 Features

- **User-Friendly Form**: Enter details such as age, gender, BMI, smoking history, etc., in a clean and responsive form.
- **Real-Time Predictions**: Receive instant predictions for diabetes after submitting the form.
- **Interactive UI**: Designed with React for a smooth and modern user experience.
- **Machine Learning Backend**: Powered by a Logistic Regression model trained on a clean and preprocessed dataset.
- **REST API**: Flask-based API handles requests and returns predictions.

---

## 🛠️ Tech Stack

### Frontend:
- [React.js](https://reactjs.org/)
- CSS

### Backend:
- [Flask](https://flask.palletsprojects.com/)
- Python
- Flask-CORS

---

## 🚀 Getting Started

### Clone the Repository:
```bash
git clone https://github.com/iAmAreza/Diabetes_Prediction_Flask_Project.git
```

## 🛠️ Tech Stack

### Frontend:
- [React.js](https://reactjs.org/)
- CSS

### Backend:
- [Flask](https://flask.palletsprojects.com/)
- Python
- Flask-CORS

### Machine Learning:
- Scikit-learn
- Imbalanced-learn (SMOTE for handling class imbalance)

---

## 🚀 Getting Started

### Prerequisites
1. **Python**: Ensure Python 3.8+ is installed.
2. **Node.js**: Required for running React.
3. **pip**: For Python package management.

---

## 🛠️ Backend Setup

1. **Create a Python virtual environment:**
   ```bash
   python -m venv flask_env
   source flask_env/bin/activate   # On Windows: flask_env\Scripts\activate
2. **Install dependencies:**
    ```bash 
    pip install -r requirements.txt 
3. **Run the Flask app:**
    ```bash
    python app.py

## 🌐 Frontend Setup

1. **Navigate to the frontend folder:**
     ```bash
     cd frontend/Diabetes_Prediction_Frontend

2. **Install dependencies:**
     ```bash
     npm install
3. **Run the React app:**
    ```bash
    npm run dev

## 🛠️ Testing the Application

1. **Access the React form:**
   - Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

2. **Submit data for prediction:**
   - Fill in the form with the required details (e.g., age, BMI, etc.).
   - Click the **"Predict"** button to get the result.

## 📂 Project Structure

- **Diabetes_Prediction/**
  - **backend/**
    - `app.py`: Flask application
    - `predict_diabetes_model.joblib`: Saved ML model
    - `scaler.joblib`: Scaler for numerical features
    - `column_order.joblib`: Column order for input
    - `requirements.txt`: Python dependencies
  - **frontend/**
    - **Diabetes_Prediction_Frontend/**
      - **public/**: Static assets
      - **src/**
        - `App.jsx`: Main React component
        - `Form.jsx`: Form for input
        - `Result.jsx`: Component to display prediction
        - `App.css`: Styling
      - `package.json`: Node.js dependencies
  - `README.md`: Project documentation




