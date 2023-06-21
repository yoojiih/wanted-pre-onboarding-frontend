// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvE3AI29lHfsRR91p6ADiF1DAefPMgPQU",
    authDomain: "wanted-pre-onboarding-8fa9f.firebaseapp.com",
    projectId: "wanted-pre-onboarding-8fa9f",
    storageBucket: "wanted-pre-onboarding-8fa9f.appspot.com",
    messagingSenderId: "71163253699",
    appId: "1:71163253699:web:59f57f4af6cd7cbaf0a376",
    measurementId: "G-3KYZ3P6BN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);