import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCiYkWPBdG2cnqKEiE9UFSOidcSXF1ngr4',
  authDomain: 'ynote-56574.firebaseapp.com',
  databaseURL: 'https://ynote-56574.firebaseio.com',
  projectId: 'ynote-56574',
  storageBucket: '',
  messagingSenderId: '326715252878',
  appId: '1:326715252878:web:84cbaac716155ca39069df'
}

if (!firebase.apps.lenght) {
  firebase.initializeApp(config)
}

export const auth = firebase.auth()
