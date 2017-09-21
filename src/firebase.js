import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyATPKSGxunGyam9B9bEG3xesoyI4yQRwGw",
    authDomain: "goalcoach-b6351.firebaseapp.com",
    databaseURL: "https://goalcoach-b6351.firebaseio.com",
    projectId: "goalcoach-b6351",
    storageBucket: "goalcoach-b6351.appspot.com",
    messagingSenderId: "676484549926"
  };

export const firebaseApp= firebase.initializeApp(config);
