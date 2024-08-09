"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth, signInWithPopup, GoogleAuthProvider } from '../../firebase/firebase';
import { FaGoogle } from 'react-icons/fa';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const GoogleLogin = () => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState('');
    const router = useRouter();

    const checkUserRole = async (uid) => {
        try {
            const db = getFirestore();
            const userDoc = doc(db, 'users', uid);
            const docSnapshot = await getDoc(userDoc);

            if (docSnapshot.exists()) {
                const userData = docSnapshot.data();
                if (userData.role) {
                    router.push('/'); 
                }
            }
        } catch (error) {
            console.error('Error checking user role:', error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, new GoogleAuthProvider());
            setUser(result.user);
            checkUserRole(result.user.uid); 
        } catch (error) {
            console.error('Error signing in with Google:', error.message);
        }
    };

    const handleRoleSubmit = async () => {
        if (!role) return;

        try {
            const db = getFirestore();
            const userDoc = doc(db, 'users', user.uid);
            await setDoc(userDoc, { email: user.email, role: role });
            alert('Role saved successfully!');
            router.push('/');
        } catch (error) {
            console.error('Error saving role:', error.message);
        }
    };

    return (
        <div>
            {!user ? (
                <button onClick={handleGoogleSignIn} className='py-2 px-4 rounded-lg bg-zinc-900 flex gap-2 items-center'>
                    <FaGoogle /> Sign in
                </button>
            ) : (
                <div>
                    <h3>Choose your role:</h3>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="">Select a role</option>
                        <option value="farmer">Farmer</option>
                        <option value="bank">Bank</option>
                    </select>
                    <button onClick={handleRoleSubmit} className='py-2 px-4 rounded-lg bg-green-500'>
                        Submit Role
                    </button>
                </div>
            )}
        </div>
    );
};

export default GoogleLogin;