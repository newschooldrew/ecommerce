import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCFTwY-2oqim2IdfZBl_QY0y8X8pEz2E_s",
    authDomain: "drews-shop.firebaseapp.com",
    databaseURL: "https://drews-shop.firebaseio.com",
    projectId: "drews-shop",
    storageBucket: "drews-shop.appspot.com",
    messagingSenderId: "1074770037030",
    appId: "1:1074770037030:web:d7afebfc4e8888c2bdd9e7",
    measurementId: "G-HRBE0TN510"
  }

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
      if(!userAuth) return;
      
      const userRef = firestore.doc(`users/${userAuth.uid}`)

      const snapShot = await userRef.get();

      if(!snapShot.exists){
          const {displayName, email} = userAuth;
          const createdAt = new Date();

          try{
            await userRef.set({
              email,
              displayName,
              createdAt,
              ...additionalData
            })
          }
          catch(err){
            console.log('error creating user ', err.message)
          }
        }
        return userRef;
      }

  export const auth = firebase.auth();
  export const firestore  = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  // always want to trigger google pop up whenever we use
  // this google auth provider for sign in
  provider.setCustomParameters({prompt:'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider)