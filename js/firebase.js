//import firebase from "firebase";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
// import { initializeApp } from "../node_modules/firebase/app";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";
//import { doc, getDoc  } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyDXtl2-bQHPEqR_-_prDLl5l57ufNNHsv4",
  authDomain: "blog-d6240.firebaseapp.com",
  projectId: "blog-d6240",
  storageBucket: "blog-d6240.appspot.com",
  messagingSenderId: "1012612232276",
  appId: "1:1012612232276:web:cf42fac6f3e6fdb34e69c1"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();


const blogTitleField = document.querySelector('.title');
const articleFeild = document.querySelector('.article');
const publishBtn = document.querySelector('.publish-btn');


let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

publishBtn.addEventListener('click', () => {
  if (articleFeild.value.length && blogTitleField.value.length) {
    // generating id
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let blogTitle = blogTitleField.value.split(" ").join("-");
    let id = '';
    for (let i = 0; i < 4; i++) {
      id += letters[Math.floor(Math.random() * letters.length)];
    }


    let docName = `${blogTitle}-${id}`;
    let date = new Date(); // for published at info
    console.log(db);
    // doc(docName).set({})
    addDoc(collection(db, "abc"), {
      docName: docName,
      title: blogTitleField.value,
      article: articleFeild.value,
      // bannerImage: bannerPath,
      publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
    })
      .then(() => {
        location.href = `/${docName}`;
      })
      .catch((err) => {
        console.error(err);
      })
  }
})
//docRef.get();