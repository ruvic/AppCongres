import {AsyncStorage} from 'react-native'

export const store = (key, value) => {
    AsyncStorage.setItem(key, JSON.stringify(value))
};

export const retrieve = (key, callback) => {
    AsyncStorage.getItem(key).then(data => callback(JSON.parse(data)));
};