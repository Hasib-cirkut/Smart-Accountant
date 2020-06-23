import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
	apiKey: process.env.REACT_API_KEY,
	authDomain: process.env.REACT_AUTH_DOMAIN,
	databaseURL: 'https://smart-accountant-1fa8e.firebaseio.com',
	projectId: 'smart-accountant-1fa8e',
	storageBucket: 'smart-accountant-1fa8e.appspot.com',
	messagingSenderId: '860707028371',
	appId: process.env.REACT_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
