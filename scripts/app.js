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

const TURMA = "turmaA";

let db = firebase.firestore();

//Método GET "all"

// db.collection("turmaA").get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       let aluno = doc.data();
//       console.log(aluno.nome);
//     });
//   });

//GET "one"

// let docRef = db.collection("turmaA").doc("FdyjfsBehzZ96BotCtkB");

// docRef.get().then((doc) => {
//   console.log(doc.data());
// });

//Método GET e Where

// db.collection("turmaA").where("nome", "==", "Fernando").get().then((snapshot) => {
//   snapshot.forEach((doc) => {
//     let aluno = doc.data();
//     console.log(aluno.nome);
//   });
// });

//Método .add()

// db.collection(TURMA).add({
//   nome: "Marcos",
//   sobrenome: "vieira",
//   notas:
//   {
//     notas: 9.6,
//     nota2: 7.5
//   }
// }).then((doc) => {
//   console.log(doc);
// }).catch((err) => {
//   console.log(err);
// });

//Método Set para adicionar ou sobre escrever também pode criar um novo doc("id")

// db.collection(TURMA).doc("CosR02Zod8GWTq6FQHIw").set(
//   {
//     nome: "Marcos",
//     sobrenome: "Oliveira dos Santos",
//     notas: {
//       nota1: 8.3,
//       notas2: 6.0
//     }
//   }, { merge: true }
// ).then(() => {
//   console.log("documento atualizado");
// }).catch(err => {
//   console.log(err);
// });

//Atualizar com update

// db.collection(TURMA).doc("CosR02Zod8GWTq6FQHIw").update(
//   {
//     cidades: firebase.firestore.FieldValue.arrayUnion("Cascavel", "Curitiba"),
//     //cidades: firebase.firestore.FieldValue.arrayRemove("Curitiba")
//     faltas: firebase.firestore.FieldValue.increment(1)
//   }
// ).then(() => {
//   console.log("documento atualizado");
// }).catch(err => {
//   console.log(err);
// });

//Método delete

// db.collection(TURMA).doc("wjGrNugTE2v08Q4aTiBs").delete().then(() => {
//   console.log("documento removido");
// }).catch(err => {
//   console.log(err);
// });

//Método GET "all" onSnapschot()

// db.collection("turmaA").onSnapshot((snapshot) => {
//   snapshot.forEach((doc) => {
//     let aluno = doc.data();
//     console.log(aluno);
//   });
// });

//método GET "one" com onSnapshot

// db.collection("turmaA").doc("nz0T4Juop4lJMdUlFlI0").onSnapshot((snapshot) => {
//   console.log(snapshot.data());
// });

// Trás os identificadores

// db.collection("turmaA").get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       // let aluno = doc.data();
//       console.log(doc);
//     });
//   });

//criar um usuário
let auth = firebase.auth();

function criarUsuario(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then(user => {
      console.log(user);
    }).catch(err => {
      console.log(err);
    });
}

function login(email, password) {

  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      auth.signInWithEmailAndPassword(email, password)
        .then(loggedUser => {
          // console.log(loggedUser.user);
          console.log(auth.currentUser);
        }).catch(err => {
          console.log(err);
        });
    });
}

// const loginAuth = login("teste@teste.com", "123abc");

// setTimeout(loginAuth, 2000);

auth.onAuthStateChanged(user => {
  if (user) {
    console.log(user);
  } else {
    console.log("ninguem logado");
  }
});

function logout() {
  auth.signOut().then(() => {
    console.log("usuário fez logout");
  })
    .catch(err => {
      console.log(err);
    });
}

// setTimeout(logout, 2000);

function ler() {
  db.collection(TURMA).get().then(snapshot => {
    snapshot.forEach(item => {
      console.log(item.data())
    });
  }).catch((err) => {
    console.log(err);
  });
}

function escrever() {
  db.collection(TURMA).add(
    {
      nome: "João",
      sobrenome: "pastorini"
    }
  ).then(doc => {
    console.log(doc);
  }).catch(err => {
    console.log(err);
  });
}

escrever();


