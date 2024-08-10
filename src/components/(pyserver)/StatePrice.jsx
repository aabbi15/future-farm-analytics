"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';
import { auth, db } from '@/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default function StatePrice() {
    const [predictions, setPredictions] = useState([]);
    const [state, setState] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const userDocRef = doc(db, "users", user.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        const userState = userDoc.data().state || 'Bihar';
                        setState(userState);

                        const response = await axios.post('http://127.0.0.1:5000/predict', { state: userState });
                        setPredictions(response.data);
                    } else {
                        console.error("User document does not exist.");
                    }
                } catch (error) {
                    console.error("Error fetching predictions: ", error);
                }
            } else {
                console.error("No authenticated user found.");
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

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