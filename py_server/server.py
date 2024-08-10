from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import pickle
import statsmodels.api as sm
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows all origins by default

# Load the crop recommendation model
crop_recommendation_model = pickle.load(open('RandomForest.pkl', 'rb'))

# Handle crop prediction
@app.route('/crop-predict', methods=['POST'])
def crop_prediction():
    try:
        # Get data from the JSON request
        data = request.get_json()

        # Check if all required fields are present
        required_fields = ['nitrogen', 'phosphorous', 'pottasium', 'temperature', 'humidity', 'ph', 'rainfall']
        if not all(field in data for field in required_fields):
            return jsonify({'error': 'Missing fields in the request'}), 400

        # Extract the data
        N = data['nitrogen']
        P = data['phosphorous']
        K = data['pottasium']
        temperature = data['temperature']
        humidity = data['humidity']
        ph = data['ph']
        rainfall = data['rainfall']

        # Create an array for prediction
        prediction_data = np.array([[N, P, K, temperature, humidity, ph, rainfall]])

        # Perform the prediction
        prediction = crop_recommendation_model.predict(prediction_data)
        final_prediction = prediction[0]  # This should be a string like 'jute', 'rice', etc.

        return jsonify({'crop': final_prediction})
    
    except Exception as e:
        # Log the error
        print(f"Error during prediction: {e}")
        return jsonify({'error': str(e)}), 500

# Handle time series prediction for rice
@app.route('/rice-price-predict', methods=['POST'])
def predict_rice():
    data = request.json
    state = data.get('state', 'Bihar')
    
    # Load the dataset
    df1 = pd.read_excel('Final DataSet.xlsx', index_col='Date', parse_dates=True)
    
    # Build and fit the SARIMAX model
    model = sm.tsa.statespace.SARIMAX(df1[state], order=(0, 1, 0), seasonal_order=(0,1,1,12))
    results = model.fit()
    
    # Make predictions
    pred = results.get_prediction(start=pd.to_datetime('2024-08-01'), end=pd.to_datetime('2024-12-01'), dynamic=False)
    pred_mean = pred.predicted_mean

    # Create a dictionary with date:price pairs
    pred_dict = {date.strftime("%d/%m/%Y"): price for date, price in pred_mean.items()}
    
    return jsonify(pred_dict)

# Handle time series prediction for wheat
@app.route('/wheat-price-predict', methods=['POST'])
def predict_wheat():
    data = request.json
    state = data.get('state', 'Bihar')
    
    # Load the dataset
    df2 = pd.read_excel('wheatall.xlsx', index_col='Date', parse_dates=True)
    
    # Build and fit the SARIMAX model
    model = sm.tsa.statespace.SARIMAX(df2[state], order=(0, 1, 0), seasonal_order=(0,1,1,12))
    results = model.fit()
    
    # Make predictions
    pred = results.get_prediction(start=pd.to_datetime('2024-07-01'), end=pd.to_datetime('2024-12-01'), dynamic=False)
    pred_mean = pred.predicted_mean

    # Create a dictionary with date:price pairs
    pred_dict = {date.strftime("%d:%m:%y"): price for date, price in pred_mean.items()}
    print(pred_dict)
    return jsonify(pred_dict)

if __name__ == '__main__':
    app.run(debug=True)
