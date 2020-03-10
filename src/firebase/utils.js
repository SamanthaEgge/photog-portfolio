import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyA3lLPug7VOfTsNkIWj_II_a89L9blLjBM",
  authDomain: "photogport-db.firebaseapp.com",
  databaseURL: "https://photogport-db.firebaseio.com",
  projectId: "photogport-db",
  storageBucket: "photogport-db.appspot.com",
  messagingSenderId: "202931067860",
  appId: "1:202931067860:web:a532c2f064b8a98e5a5441",
  measurementId: "G-7Z3QFJMPDP"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  
  console.log(snapShot)

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;