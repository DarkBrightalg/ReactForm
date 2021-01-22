import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import { firebaseConfig } from "./Config"

firebase.initializeApp(firebaseConfig)

export const createUserProfileDocument = async (userAuth, data) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data,
      })
    } catch (error) {
      console.log("il y a un probleme au niveau de la creation :", error)
    }
  }
  return userRef
}

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const signinwithgoogle = () => auth.signInWithPopup(provider)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export default firebase
