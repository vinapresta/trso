import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

export default defineNuxtPlugin(nuxtApp => {
    
    const runtimeConfig = useRuntimeConfig()

    const firebaseConfig = {
        /*apiKey: runtimeConfig.FB_API_KEY,
        authDomain: runtimeConfig.FB_AUTH_DOMAIN,
        databaseURL: runtimeConfig.FB_DATABASE_URL,
        projectId: runtimeConfig.FB_PROJECT_ID,
        storageBucket: runtimeConfig.FB_STORAGE_BUCKET,
        messagingSenderId: runtimeConfig.FB_MESSAGING_SENDER_ID,
        appId: runtimeConfig.FB_APP_ID,
        measurementId: runtimeConfig.FB_MEASUREMENT_ID*/
        apiKey: "AIzaSyCrpi511yIUCPKM07Bsk092sezOWMXcwjc",
        authDomain: "movies-books.firebaseapp.com",
        databaseURL: "https://movies-books.firebaseio.com",
        projectId: "movies-books",
        storageBucket: "movies-books.appspot.com",
        messagingSenderId: "469402336814",
        appId: "1:469402336814:web:c80511a26fa194d056e9bf",
        measurementId: "G-LCCVY585SQ"
    };
      
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    return {

        provide: {

            firestore: db

        }

    }

})