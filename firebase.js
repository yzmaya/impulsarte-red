
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
//import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  setDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
  // Put you credentials here
  apiKey: "AIzaSyBCXM3Ke6gVWfG5LU350xapMX-A-gaVPXs",
  authDomain: "impulsarteimplementacion2.firebaseapp.com",
  projectId: "impulsarteimplementacion2",
  storageBucket: "impulsarteimplementacion2.appspot.com",
  messagingSenderId: "171843711438",
  appId: "1:171843711438:web:6796b0236398fc4f5c3b9f"
};
var userID = localStorage.getItem("UserID");
var username = localStorage.getItem("UserName");
var mail = localStorage.getItem("UserMail");
console.log("users/"+userID)
var holas = "/users/"+userID+"/tareas";
var nyzmaya = "/users/P2ry8hu4kafUbPb6UAnibTP89Ck2/tareas";
var sgarcia = "/users/iAZytm5WjMVZgS3z2mZqMBLyw4R2/tareas";
var gbringas = "/users/AWm8lSNtUpTTzjd0MeXc4i6hbt63/tareas";
var jurbano = "/users/WOcG0OA4MxQNjh2tNdX5s32tXfJ3/tareas";
var axellopez = "/users/kj3FwMnhzgbnoj78S3I7Q1VRc8G3/tareas";
var gloriamaria = "/users/VirBuqJMehRUBV0TqtYtP9TLmcE3/tareas";
var mgonzalez = "/users/GoPRch4FoCQmwaAlnjqFZlLydu02/tareas";
var rmucino = "/users/I4wCk05gcQRqee0qdaaoNT8Uk782/tareas";
var arivera = "/users/MltrRLy9O0aPjD5afa49AteJ6fl1/tareas";
var janzures = "/users/7mAqFc0ZFAbUNnxU0iGNtOGs7oI3/tareas"
var npererira = "/users/mFSXtWpWTYa4UqGYqp7yS0JqAcq2/tareas"
var hvivanco = "/users/GYNUsSsb46hOcKxmK1NmE4hZ6P92/tareas"




console.log(username)
document.getElementById('nombre').innerHTML = mail;



// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const db = getFirestore();





/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
//export const saveTask = (title, description) =>
  //addDoc(collection(db,  'users'), { title, description });

  export const saveTask = (title, description) =>
  addDoc(collection(db,  holas),  { title, description });

  export const onGetTasks = (callback) =>
  onSnapshot(collection(db, holas), callback); 

export const onGetTasks2 = (callback) =>
  onSnapshot(collection(db, nyzmaya), callback);

  export const onGetTasks3 = (callback) =>
  onSnapshot(collection(db, sgarcia), callback);

  export const onGetTasks4 = (callback) =>
  onSnapshot(collection(db, gbringas), callback);

  export const onGetTasks5 = (callback) =>
  onSnapshot(collection(db, jurbano), callback);

  export const onGetTasks6 = (callback) =>
  onSnapshot(collection(db, axellopez), callback);

  export const onGetTasks7 = (callback) =>
  onSnapshot(collection(db, gloriamaria), callback);

  export const onGetTasks8 = (callback) =>
  onSnapshot(collection(db, mgonzalez), callback);

  export const onGetTasks9 = (callback) =>
  onSnapshot(collection(db, rmucino), callback);

  export const onGetTasks10 = (callback) =>
  onSnapshot(collection(db, arivera), callback);

  export const onGetTasks11 = (callback) =>
  onSnapshot(collection(db, janzures), callback);

  export const onGetTasks12 = (callback) =>
  onSnapshot(collection(db, npererira), callback);

  export const onGetTasks13 = (callback) =>
  onSnapshot(collection(db, hvivanco), callback);
 

  

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, holas, id));

export const getTask = (id) => getDoc(doc(db, holas, id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, holas, id), newFields);

export const getTasks = () => getDocs(collection(db, userID));
