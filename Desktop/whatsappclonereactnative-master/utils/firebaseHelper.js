import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
  const firebaseConfig = {
    //get this from when you create an app in firebase.
    apiKey: "AIzaSyCteaEtJ6p9ZSG_wCei2rjtBKLnIYVjOtw",
  authDomain: "dash-6010c.firebaseapp.com",
  projectId: "dash-6010c",
  storageBucket: "dash-6010c.appspot.com",
  messagingSenderId: "445910615360",
  appId: "1:445910615360:web:53f7b8cfc9c6cc5158a6a5"
  };
  return initializeApp(firebaseConfig);
};
