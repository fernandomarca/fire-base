var firebaseConfig = {
  apiKey: "AIzaSyCiyJa37a3SGGL0T5VsLsZjZgaRrL0TzPw",
  authDomain: "colegio-23658.firebaseapp.com",
  databaseURL: "https://colegio-23658.firebaseio.com",
  projectId: "colegio-23658",
  storageBucket: "colegio-23658.appspot.com",
  messagingSenderId: "1089980430841",
  appId: "1:1089980430841:web:cda26a90c961ccf464a528",
  measurementId: "G-1XQTW4ELDT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

let db = firebase.firestore();

// db.collection("turmaA").get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       let aluno = doc.data();
//       console.log(aluno.nome);
//     });
//   });

// let docRef = db.collection("turmaA").doc("FdyjfsBehzZ96BotCtkB");

// docRef.get().then((doc) => {
//   console.log(doc.data());
// });

db.collection("turmaA").where("nome", "==", "Fernando").get().then((snapshot) => {
  snapshot.forEach((doc) => {
    let aluno = doc.data();
    console.log(aluno.nome);
  });
});