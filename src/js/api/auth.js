import db from "../db/firestore";
import firebase from "firebase/app";
import "firebase/auth";

const createUserProfile = (userProfile) =>
  db.collection("profiles").doc(userProfile.uid).set(userProfile);

export const register = async ({ email, password, username, avatar }) => {
  try {
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    await createUserProfile({
      uid: user.uid,
      username,
      password,
      avatar,
      email,
      joinedChats: [],
    });

    return user;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const login = ({ email, password }) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const logout = () => firebase.auth().signOut();

export const onAuthStateChange = (onAuth) => {
  firebase.auth().onAuthStateChanged(onAuth);
};
