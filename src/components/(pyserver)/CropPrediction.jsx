import axios from 'axios';
import { useEffect, useState } from 'react';

export default function CropPrediction() {
    const [predictions, setPredictions] = useState([]);

    const fetchPredictions = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/crop-predict', {
                nitrogen: '20',
                phosphorous: '40',
                pottasium: '60',
                temperature: '30',
                humidity: '80',
                ph: '6',
                rainfall: '200'
            });
            setPredictions(response.data);
        } catch (error) {
            console.error("Error fetching predictions: ", error);
        }
    };

    useEffect(() => {
        fetchPredictions();
    }, []);

    return (
        <div>
            <h1>Crop Prediction</h1>
            <p>{predictions}</p>
        </div>
    );
}