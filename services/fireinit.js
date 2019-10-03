import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyCEJqp1Qbw_ydB-OjYIWimSs1DcVyxijNE',
  authDomain: 'yntest-2eb28.firebaseapp.com',
  databaseURL: 'https://yntest-2eb28.firebaseio.com',
  projectId: 'yntest-2eb28',
  storageBucket: '',
  messagingSenderId: '809556109779',
  appId: '1:809556109779:web:07b7241e266c7bba37a726'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
  firebase.firestore().settings({ timestampsInSnapshots: true })
}

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.firestore()
export default firebase
