/**
 *
 * Firebase file is created to init firebase to use it on whole app
 *
 */

import Firebase from 'firebase'

import firebaseConfig from '../config/firebase_config'

Firebase.initializeApp(firebaseConfig)

export default Firebase
