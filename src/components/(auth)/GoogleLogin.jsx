"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, signInWithPopup, GoogleAuthProvider } from '../../firebase/firebase';
import { FaGoogle } from 'react-icons/fa';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const GoogleLogin = ({ role }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    const checkUserRole = async (uid) => {
        try {
            const db = getFirestore();
            const userDoc = doc(db, 'users', uid);
            const docSnapshot = await getDoc(userDoc);

            if (docSnapshot.exists()) {
                const userData = docSnapshot.data();
                if (userData.role) {
                    if (userData.role !== role) {
                        alert(`You are already assigned the role of ${userData.role}. You cannot log in as ${role}.`);
                    }
                    router.push('/');
                    return true;
                }
            }
            return false;
        } catch (error) {
            console.error('Error checking user role:', error.message);
            return true;
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, new GoogleAuthProvider());
            setUser(result.user);

            const alreadyAssigned = await checkUserRole(result.user.uid);
            if (alreadyAssigned) return;

            const db = getFirestore();
            const userDoc = doc(db, 'users', result.user.uid);
            await setDoc(userDoc, { email: result.user.email, role: role });

            router.push('/');
        } catch (error) {
            console.error('Error signing in with Google:', error.message);
        }
    };

    return (
        <div>
            {!user ? (
                <button onClick={handleGoogleSignIn} className='py-2 px-4 rounded-lg bg-[#124b3d] text-[#fff] flex gap-2 items-center'>
                    <FaGoogle /> Sign in
                </button>
            ) : (
                <p>Signed in as {user.email}. Redirecting...</p>
            )}
        </div>
    );
};

export default GoogleLogin;