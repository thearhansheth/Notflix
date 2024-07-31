import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBWb2nGANlRH0-hbPshpHtBqQ1xqD5dC8k",
  authDomain: "notflix-netclone.firebaseapp.com",
  projectId: "notflix-netclone",
  storageBucket: "notflix-netclone.appspot.com",
  messagingSenderId: "278641674069",
  appId: "1:278641674069:web:a8b7446d2f4635339811dc"
};

const app = initializeApp(firebaseConfig);
const fbAuth = getAuth(app);
const db = getFirestore(app);

const userSignup = async (name, email, password)=>{
    try{
        const res = await createUserWithEmailAndPassword(fbAuth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    }catch(error){
        console.log(error);
        alert(error);
    }
}

const userLogin = async (email, password)=>{
    try {
       await signInWithEmailAndPassword(fbAuth, email, password);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const logout = ()=>{
    signOut(fbAuth);
}

export {fbAuth, db, userLogin, userSignup, logout}