import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCIvtFYmo7IS0dyF543VwyY5rXYhw_5FGQ",
  authDomain: "convo-gpt-bae49.firebaseapp.com",
  projectId: "convo-gpt-bae49",
  storageBucket: "convo-gpt-bae49.firebasestorage.app",
  messagingSenderId: "35556478130",
  appId: "1:35556478130:web:552c7c26b900d0d8150dab",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}