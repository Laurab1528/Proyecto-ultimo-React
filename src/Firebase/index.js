// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDocs, getFirestore} from  'firebase/firestore/lite'
import { async } from '@firebase/util';
import { collection, setDoc, query, where, doc, getDoc } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEv-uyLaULVYg4eU_4YWuPQPJeQes49UE",
  authDomain: "reactcoderhouse-6a6a5.firebaseapp.com",
  projectId: "reactcoderhouse-6a6a5",
  storageBucket: "reactcoderhouse-6a6a5.appspot.com",
  messagingSenderId: "421585005878",
  appId: "1:421585005878:web:1ef74c8fc63f893b7fd797",
  measurementId: "G-B50B93GLHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDB = getFirestore(app);

export async function getAllcars(){
  const  miColec =collection(firestoreDB,"cars");
  const carSnap=await getDocs(miColec);

  return carSnap.docs.map(Cars => Cars.data());





}

export async function getAllcarsFromCatgory(categoria){
  const  miColec =collection(firestoreDB,"cars");
  const myquery = query(miColec, where("CompanyName","==", categoria));
  const carSnap=await getDocs(myquery);

  return carSnap.docs.map(Cars => Cars.data());
  
}


export async function getAllcar(id){
  
  const  miColec =collection(firestoreDB,"cars1");
  const docref=query(miColec,where("id","==",id));
  const resultDOC =await getDocs(docref);
  return resultDOC.docs[0].data();

  

  





}

export async function getAllcarbyid(id){
  
  const  miColec =collection(firestoreDB,"cars");
  const docref=doc(miColec,where(id,"==",id));
  const resultDoc =await getDoc(docref);
  return {...resultDoc.data(),id:resultDoc.id}

  

  





}