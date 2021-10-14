import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

  apiKey: "AIzaSyBwqUdO37WFTYcnUzdRWzzXfys7P5ECAu8",

  authDomain: "proiect-uemf.firebaseapp.com",

  projectId: "proiect-uemf",

  storageBucket: "proiect-uemf.appspot.com",

  messagingSenderId: "974589410496",

  appId: "1:974589410496:web:cda6bf01127b292ac50125",

  measurementId: "G-VJC64Z2DZZ"

};


const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


export default app;