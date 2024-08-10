import { auth, signInWithPopup, GoogleAuthProvider } from '../../firebase/firebase';
import { FaGoogle } from 'react-icons/fa';

const GoogleLogin = () => (
    <button onClick={async () => {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
        } catch (error) {
            console.error(error)
        }
    }} className='py-2 px-4 rounded-lg bg-[#124b3d] text-[#fff] flex gap-2 items-center'>
        <FaGoogle /> Sign in
    </button>
);

export default GoogleLogin;