import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyBQbIc6uJ_Z5FgJ4CcgF4VpoXVvfMFE0Fg",

    authDomain: "personal-profile-bf15c.firebaseapp.com",

    projectId: "personal-profile-bf15c",

    storageBucket: "personal-profile-bf15c.firebasestorage.app",

    messagingSenderId: "502856955936",

    appId: "1:502856955936:web:209b10d7fd6f9229ba2445"
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