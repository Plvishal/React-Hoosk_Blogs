import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDrs3lj8_KYn2hIpO2yocbbdMhC2EvA-0s',
  authDomain: 'react-hook-blog-6d3ac.firebaseapp.com',
  projectId: 'react-hook-blog-6d3ac',
  storageBucket: 'react-hook-blog-6d3ac.appspot.com',
  messagingSenderId: '384337911751',
  appId: '1:384337911751:web:49e31832003c1e5fa683e2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db
