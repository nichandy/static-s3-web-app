import firebase from 'firebase';

console.log('connecting to firebase...');
// console.log(proccess.env);
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
//console.log(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };

// db.ref('notes')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// db.ref()
//   .set({ test: 'This is a test' })
//   .then(() => {
//     console.log('Save success!');
//   })
//   .catch((err) => console.log(err));

// db.ref('attributes')
//   .set({ height: 73, weight: 150 })
//   .then(() => console.log('data saved'))
//   .catch((e) => console.log(e));
