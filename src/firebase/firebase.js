import { firebaseConfig } from '../../firebase.config.js';
import firebase from 'firebase';

console.log('connecting to firebase...');

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

db.ref('notes')
  .once('value')
  .then((snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val(),
      });
    });
    console.log(expenses);
  });

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
