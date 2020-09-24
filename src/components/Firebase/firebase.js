import app from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcDY6TrDnpcVe5-c1JwOYGWRgjKS0jwF4",
  authDomain: "resaki-de.firebaseapp.com",
  databaseURL: "https://resaki-de.firebaseio.com",
  projectId: "resaki-de",
  storageBucket: "resaki-de.appspot.com",
  messagingSenderId: "76322889609",
  appId: "1:76322889609:web:6cf9f126f91dd8a10f4b58",
  measurementId: "G-90SRQMGRTF"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;
