import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDCFDDxK4zz6CLqcs8hOZASTcHxd-XERuU",
  authDomain: "abissinia-tickets.firebaseapp.com",
  databaseURL: "https://abissinia-tickets-default-rtdb.firebaseio.com",
  projectId: "abissinia-tickets",
  storageBucket: "abissinia-tickets.appspot.com",
  messagingSenderId: "116740880222",
  appId: "1:116740880222:web:4780e64557a642c35a41cf",
  measurementId: "G-3PVD3LDW45"
};;

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };