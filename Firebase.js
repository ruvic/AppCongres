import * as firebase from 'firebase';
import {retrieve, store} from './storage/Storage';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyC06zisELoy3mEKXo3EBW1T4cWQtTiaM2w",
    authDomain: "videos123.firebaseapp.com",
    databaseURL: "https://videos123.firebaseio.com",
    projectId: "videos123",
    storageBucket: "",
    messagingSenderId: "64588660031",
    persistence: true,
    storageBucket: "videos123.appspot.com",
};
firebase.initializeApp(config);

export function getFirebaseData(callback){
    try {
        firebase.database().ref('data').on('value', (data) => {
            store("data", data.toJSON());
            callback(data.toJSON());
        });
    }catch (e){
        retrieve("data", callback);
    }
}