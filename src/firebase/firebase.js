import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

//this config is being used for both development and production environment. Though, it is a best practice creating a second project and have two configs: one for production (prodConfig) and another for development (devConfig), so you choose the config based on the environment.

const config = {
  apiKey: "AIzaSyBhEe9Z8xlB5izEwktm8cRiwNKuwfwRtos",
  authDomain: "kayesokua.firebaseapp.com",
  databaseURL: "https://kayesokua.firebaseio.com",
  projectId: "kayesokua",
  storageBucket: "kayesokua.appspot.com",
  messagingSenderId: "839481058164",
  appId: "1:839481058164:web:5e11d65e29b82d00e68221",
  measurementId: "G-HNRS74WCKT"
};

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(config);
}

//separting database API and authentication
const db = firebase.database();
const auth = firebase.auth();

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, facebookProvider };
