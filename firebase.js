import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDPfxeE6wBMNtJce-ZdY8bevdVuAgoXKaE',
  authDomain: 'instagram-a9adb.firebaseapp.com',
  projectId: 'instagram-a9adb',
  storageBucket: 'instagram-a9adb.appspot.com',
  messagingSenderId: '619809791888',
  appId: '619809791888:web:8f7c7ea794def7055fdd15'
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }