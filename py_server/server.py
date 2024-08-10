from flask import Flask, request, jsonify, render_template
from markupsafe import Markup
import numpy as np
import pandas as pd
import pickle
import statsmodels.api as sm
from flask_cors import CORS
from fertilizer_py import fertilizer_dic

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
        required_fields = ['nitrogen', 'phosphorous', 'potassium', 'temperature', 'humidity', 'ph', 'rainfall']
        if not all(field in data for field in required_fields):
            return jsonify({'error': 'Missing fields in the request'}), 400

        # Extract the data
        N = data['nitrogen']
        P = data['phosphorous']
        K = data['potassium']
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

# Handle time series prediction for any crop
@app.route('/crop-price-predict', methods=['POST'])
def predict_crop_price():
    data = request.json
    state = data.get('state', 'Bihar')
    crop = data.get('crop', 'rice')
    
    # Construct the filename based on the crop name
    filename = f'{crop}.xlsx'
    try:
        df = pd.read_excel(filename, index_col='Date', parse_dates=True)
    except FileNotFoundError:
        return jsonify({'error': f'File {filename} not found'}), 404
    
    # Build and fit the SARIMAX model
    model = sm.tsa.statespace.SARIMAX(df[state], order=(0, 1, 0), seasonal_order=(0,1,1,12))
    results = model.fit()
    
    # Make predictions
    pred = results.get_prediction(start=pd.to_datetime('2024-08-01'), end=pd.to_datetime('2024-12-01'), dynamic=False)
    pred_mean = pred.predicted_mean

    # Create a dictionary with date:price pairs
    pred_dict = {date.strftime("%d/%m/%Y"): price for date, price in pred_mean.items()}
    
    return jsonify(pred_dict)

@app.route('/fertilizer-predict', methods=['POST'])
def fert_recommend():
    # Retrieve JSON data from request
    data = request.get_json()
    crop_name = str(data['cropname'])
    N = int(data['nitrogen'])
    P = int(data['phosphorous'])
    K = int(data['pottasium'])
    # ph = float(data['ph'])

    df = pd.read_csv('fertilizer_csv.csv')

    nr = df[df['Crop'] == crop_name]['N'].iloc[0]
    pr = df[df['Crop'] == crop_name]['P'].iloc[0]
    kr = df[df['Crop'] == crop_name]['K'].iloc[0]

    n = nr - N
    p = pr - P
    k = kr - K
    temp = {abs(n): "N", abs(p): "P", abs(k): "K"}
    max_value = temp[max(temp.keys())]
    if max_value == "N":
        if n < 0:
            key = 'NHigh'
        else:
            key = "Nlow"
    elif max_value == "P":
        if p < 0:
            key = 'PHigh'
        else:
            key = "Plow"
    else:
        if k < 0:
            key = 'KHigh'
        else:
            key = "Klow"

    response = Markup(str(fertilizer_dic[key]))

    return render_template('fertilizer-result.html', recommendation=response)

@app.route('/max-price-notification', methods=['POST'])
def predict_max_rice():
    data = request.json
    state = data.get('state', 'Bihar')
    crop = data.get('crop', 'rice')
    
    # Construct the filename based on the crop name
    filename = f'{crop}.xlsx'
    try:
        df = pd.read_excel(filename, index_col='Date', parse_dates=True)
    except FileNotFoundError:
        return jsonify({'error': f'File {filename} not found'}), 404
    
    # Build and fit the SARIMAX model
    model = sm.tsa.statespace.SARIMAX(df[state], order=(0, 1, 0), seasonal_order=(0, 1, 1, 12))
    results = model.fit()
    
    # Make predictions
    pred = results.get_prediction(start=pd.to_datetime('2024-08-01'), end=pd.to_datetime('2024-12-01'), dynamic=False)
    pred_mean = pred.predicted_mean

    # Convert predictions to a DataFrame
    pred_df = pd.DataFrame(pred_mean, columns=['Price'])
    pred_df.index.name = 'Date'
    
    # Get the maximum price
    max_price_row = pred_df.loc[pred_df['Price'].idxmax()]
    
    # Create a dictionary with the date and price of the maximum price
    pred_dict = {
        'Date': max_price_row.name.strftime("%d/%m/%Y"),
        'Price': max_price_row['Price']
    }
    
    return jsonify(pred_dict)

if __name__ == '__main__':
    app.run(debug=True)
