from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import pickle
import statsmodels.api as sm
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows all origins by default

# Load the crop recommendation model
crop_recommendation_model_path = 'RandomForest.pkl'
crop_recommendation_model = pickle.load(open(crop_recommendation_model_path, 'rb'))

# Handle crop prediction
@app.route('/crop-predict', methods=['POST'])
def crop_prediction():
    # Get data from the JSON request
    data = request.get_json()

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
    final_prediction = prediction[0]

    return jsonify({'crop': final_prediction})

# Handle time series prediction
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    state = data.get('state', 'Bihar')
    
    # Load the dataset
    df = pd.read_excel('Final DataSet.xlsx', index_col='Date', parse_dates=True)
    df[f'{state} Price First Difference'] = df[state] - df[state].shift(1)
    
    # Build and fit the SARIMAX model
    model = sm.tsa.statespace.SARIMAX(df[state], order=(0, 1, 0), seasonal_order=(0,1,1,12))
    results = model.fit()
    
    # Make predictions
    pred = results.get_prediction(start=pd.to_datetime('2023-07-01'), end=pd.to_datetime('2023-12-01'), dynamic=False)
    pred_mean = pred.predicted_mean.tolist()
    
    return jsonify(pred_mean)

if __name__ == '__main__':
    app.run(debug=True)