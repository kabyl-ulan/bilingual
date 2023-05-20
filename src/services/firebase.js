import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBjggase-ISrezFvZzETOM0N2NJUwrqbKM",
    authDomain: "bilingual-21ba2.firebaseapp.com",
    projectId: "bilingual-21ba2",
    storageBucket: "bilingual-21ba2.appspot.com",
    messagingSenderId: "218677570286",
    appId: "1:218677570286:web:c3657bba765ec355cb61ff",
    measurementId: "G-619XBGKWP7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
