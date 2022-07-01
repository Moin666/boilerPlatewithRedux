import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCDmgVMvrGlOWVF-4302NXfNB0mIoJVXhk",
  authDomain: "fir-sheryprartice.firebaseapp.com",
  databaseURL: "https://fir-sheryprartice-default-rtdb.firebaseio.com",
  projectId: "fir-sheryprartice",
  storageBucket: "fir-sheryprartice.appspot.com",
  messagingSenderId: "680485911069",
  appId: "1:680485911069:web:39e11c6728e718097ca4f4",
  measurementId: "G-RKQ76L7KF9"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export default app;