import * as firebase from 'firebase';
import {retrieve} from './storage/Storage';

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

firebaseConnection = () =>{
    var connectedRef = firebase.database().ref(".info/connected");
    connectedRef.on("value", function(snap) {
        if (snap.val() === true) {
            alert("connected");
        } else {
            alert("not connected");
        }
    });
};

export function getFirebaseData(callback){

    firebase.database().ref('data').on('value', (data) => {
        callback(data.toJSON());
    });

    var connectedRef = firebase.database().ref(".info/connected");
    connectedRef.on("value", function(snap) {
        if (snap.val() === false) {
            retrieve("data", callback);
        }
    });

}

export function imageGet(path, comp){
    // Create a reference with an initial file path and name
    var storage = firebase.storage();
    var pathReference = storage.ref(path);


    // Get the download URL
    pathReference.getDownloadURL().then((url) => {
        comp.setState({
            imageSource : {uri : url}
        });
    }).catch(function(error) {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
            case 'storage/object-not-found':
                // File doesn't exist
                alert("file does not exists");
                break;

            case 'storage/unauthorized':
                // User doesn't have permission to access the object
                alert("User's persmission error : "+error.code);
                break;

            case 'storage/canceled':
                // User canceled the upload
                alert("user has canceled the upload");
                break;

            case 'storage/unknown':
                // Unknown error occurred, inspect the server response
                alert("user has canceled unknown error occured");
                break;
        }
    });
}