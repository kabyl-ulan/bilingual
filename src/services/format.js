export function formatterQuestionType(type) {
    const str = type.split("_");
    const res = str.map((item) => item.toLowerCase()).join(" ");
    return res;
}

export function formatToMinute(min, sec) {
    if (+min > 0) {
        return +min * 60 + +sec;
    }
    return +sec;
}

export function convertHMS(value) {
    const sec = parseInt(value, 10);
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - hours * 3600) / 60);
    let seconds = sec - hours * 3600 - minutes * 60;
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}

export function getDate(time) {
    const Split = time.split("T");
    const date = Split[0].split("-").join(".");
    const Hour = Split[1].slice(0, 5);
    return [Hour, date];
}
