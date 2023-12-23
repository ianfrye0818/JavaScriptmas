import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
  getFirestore,
  addDoc,
  query,
  where,
  deleteDoc,
  doc,
  collection,
  onSnapshot,
} from 'firebase/firestore';

//firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyAjsI_AKPmgCsLfMAYR-BB3L-4RQBWrEow',
  authDomain: 'christmaslist-94d3a.firebaseapp.com',
  projectId: 'christmaslist-94d3a',
  storageBucket: 'christmaslist-94d3a.appspot.com',
  messagingSenderId: '429352351596',
  appId: '1:429352351596:web:c31c9e808d39dded80e549',
};

//init all firebase variables
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//google sign in
const provider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error(error);
  }
};

//create global variable to save the db collection name
const collectionName = 'christmaslist';

//creates a listener to udpate the data in the app everytime there is a change in the database
function subscribeToChristmasList(user, callback) {
  try {
    const unsubscribe = onSnapshot(
      query(collection(db, collectionName), where('userId', '==', user.uid)),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }));
        callback(data);
      }
    );

    return unsubscribe;
  } catch (error) {
    console.log(error);
  }
}

//add an item to the database
async function addToFirestore(user, nameInput) {
  try {
    await addDoc(collection(db, collectionName), {
      userId: user.uid,
      name: nameInput,
    });
  } catch (error) {
    console.log(error);
  }
}

//remove an item from the database
async function deleteFromFirestore(user, docId) {
  try {
    await deleteDoc(doc(db, collectionName, docId));
  } catch (error) {
    console.log(error);
  }
}

export {
  auth,
  db,
  signInWithGoogle,
  subscribeToChristmasList,
  addToFirestore,
  deleteFromFirestore,
};
