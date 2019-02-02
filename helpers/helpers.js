export function getDate(text){
    return String(text).split(" ")[0];
}

export function objectToArray(object){
    var result = [];
    Object.keys(object).map((key, index) => {
        result.push(object[key]);
    });
    return result;
}