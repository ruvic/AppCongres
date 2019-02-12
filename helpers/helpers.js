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

function weekDayName(day){
    switch (day) {
        case 0 : return "SUN"; break;
        case 1 : return "MON"; break;
        case 2 : return "TUE"; break;
        case 3 : return "WED"; break;
        case 4 : return "THU"; break;
        case 5 : return "FRI"; break;
        case 6 : return "SAT"; break;
    }
}

function dayNumber(day){
    let result = day;
    if(day < 10){
        result = '0'+day;
    }
    return result;
}

export function formatDate(date) {
    var dateArray = String(date).split('-');
    var d = new Date(dateArray[2], dateArray[1], dateArray[0]);
    return {
        weekDay : weekDayName(d.getDay()),
        day : dayNumber(d.getDay())
    };
}