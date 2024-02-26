import { initializeApp } from 'firebase/app';
import {
    getAuth,
    onAuthStateChanged, 
    connectAuthEmulator, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from 'firebase/auth';
/*import { getFirestore, doc, setDoc } from "firebase/firestore";*/


const firebaseApp = initializeApp({
    apiKey: "AIzaSyB0jgNjEtTwEMhOv6AIoYAkEbYSmfeNhy4",
    authDomain: "projeto-01-42f74.firebaseapp.com",
    projectId: "projeto-01-42f74",
    storageBucket: "projeto-01-42f74.appspot.com",
    messagingSenderId: "256012644284",
    appId: "1:256012644284:web:38ef5cf3439f2cf5be45b9"
});

const auth = getAuth(firebaseApp);


/*onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log('logged in!');
    } else {
        console.log('No user');
    }
});

const db = getFirestore(firebaseApp);
const firestore = getFirestore();

const userList = doc(firestore, 'newUser/2024-02-22');
function writeNewUser() {
    const docData = {
        email: 'limatars.ensino@gmail.com',
        uid: 'FCCNYI8t02GLpKMqF28UxJQjhL4s',
    };
    setDoc(newUser, docData, { merge: true});
};
writeNewUser()*/

connectAuthEmulator(auth, "http://localhost:9099");

const loginEmailPassword = async () => {
    const loginEmail = txtEmail.value;
    const loginPassword = txtPassword.value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    }
    catch(error) {
        console.log(error);
    }
};

btnLogin.addEventListener("click", loginEmailPassword); 

const createAccount = async () =>  {
    const loginEmail = txtEmail.value;
    const loginPassword = txtPassword.value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    }
    catch(error) {
        console.log(error);
    }
}

btnSignup.addEventListener("click", createAccount);

const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
        if (user != null) {
            console.log('logged in');
        }
        else {
            console.log("no user");
        }
    })
};

monitorAuthState();

const logout = async () => {
    await signOut(auth);
};

btnLogout.addEventListener("click", logout);