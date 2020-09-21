import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey            : 'AIzaSyBu9N5pRtaskt0IYgY4m-NfEcBsS5sQ-MM',
	authDomain        : 'crown-db-4663e.firebaseapp.com',
	databaseURL       : 'https://crown-db-4663e.firebaseio.com',
	projectId         : 'crown-db-4663e',
	storageBucket     : 'crown-db-4663e.appspot.com',
	messagingSenderId : '285563998253',
	appId             : '1:285563998253:web:c0b81d12d62fb12082a8a4',
	measurementId     : 'G-Z1D073EZM0',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
