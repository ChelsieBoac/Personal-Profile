import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyC_61tt0AhvwVdiKQ7T4bjNE086qz3PnXE",
  authDomain: "personal-profile-7d510.firebaseapp.com",
  projectId: "personal-profile-7d510",
  storageBucket: "personal-profile-7d510.firebasestorage.app",
  messagingSenderId: "791287134140",
  appId: "1:791287134140:web:8a0def95c5da9335cc9db9",
  measurementId: "G-W1T9PV0ZQ9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    console.log(name, email, message);

    try {

        await addDoc(collection(db, "messages"), {
            name,
            email,
            message,
            date: new Date()
        });

        document.getElementById("success").innerHTML =
            "Message sent successfully!";

        form.reset();

    } catch (error) {

        console.error(error);

        document.getElementById("success").innerHTML =
            "Error: " + error.message;
    }

});