import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgDa240gpHW4g66vGLa6cFg2n0wux6sm0",
  authDomain: "crown-clothing-db-c159f.firebaseapp.com",
  projectId: "crown-clothing-db-c159f",
  storageBucket: "crown-clothing-db-c159f.appspot.com",
  messagingSenderId: "470577891215",
  appId: "1:470577891215:web:e930ec39538034efaaadfa",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);


  const userSnapShot = await getDoc(userDocRef);
 


  if(!userSnapShot.exists()){
    const {displayName, email } = userAuth;
    const createAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt

      });
    }
      catch(error){
        console.log('error creating the user', error.message);
      }
  }

  return userDocRef;



};
