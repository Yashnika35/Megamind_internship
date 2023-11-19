// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwo3fje2xoexyChyVRdYBScEn5fGVKmsI",
  authDomain: "sahyadri-ba9de.firebaseapp.com",
  projectId: "sahyadri-ba9de",
  storageBucket: "sahyadri-ba9de.appspot.com",
  messagingSenderId: "101218665745",
  appId: "1:101218665745:web:eee59ad32f8e239792b8b0",
  measurementId: "G-31VTWVREKJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA",
// });

// const cityRef = doc(db, "cities", "BJ");
// setDoc(cityRef, { capital: true }, { merge: true });
