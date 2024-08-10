from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import statsmodels.api as sm

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    state = data.get('state', 'Bihar')  # Default to 'Bihar' if no state is provided

    # Load and preprocess data
    df = pd.read_excel('Final DataSet.xlsx', index_col='Date', parse_dates=True)
    df[f'{state} Price First Difference'] = df[state] - df[state].shift(1)
    
    # Fit the SARIMAX model
    model = sm.tsa.statespace.SARIMAX(df[state], order=(0, 1, 0), seasonal_order=(0,1,1,12))
    results = model.fit()
    
    # Prediction
    pred = results.get_prediction(start=pd.to_datetime('2023-07-01'), end=pd.to_datetime('2023-12-01'), dynamic=False)
    pred_mean = pred.predicted_mean.tolist()
    
    return jsonify(pred_mean)

if __name__ == '__main__':
    app.run(debug=True)
