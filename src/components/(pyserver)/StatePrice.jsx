"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';
import { auth, db } from '@/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function StatePrice(){
    const [predictions, setPredictions] = useState([]);
    const [state, setState] = useState('Bihar'); 

    useEffect(() => {
        const fetchStateAndPredictions = async () => {
            try {
                const user = auth.currentUser;
                if (user) {
                    const userDocRef = doc(db, "users", user.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        const userState = userDoc.data().state || 'Bihar';  
                        setState(userState);
                        
                        const response = await axios.post('http://localhost:5000/predict', { state: userState });
                        setPredictions(response.data);
                    }
                }
            } catch (error) {
                console.error("Error fetching predictions: ", error);
            }
        };

        fetchStateAndPredictions();
    }, []);

    return (
        <div>
            <h1>{state} Crop Price Forecast</h1>
            <ul>
                {predictions.map((price, index) => (
                    <li key={index}>Date {index + 1}: {price}</li>
                ))}
            </ul>
        </div>
    );
}