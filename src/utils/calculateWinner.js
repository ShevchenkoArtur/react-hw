export const calculateTime = (time) => {
    let [hrs, mins, secs] = time.split(':')
    return Number(hrs) * 3600 + Number(mins) * 60 + Number(secs)
}

export const calculateWinner = (arr) => {
    return arr.map(el => {
        return {
            ...el,
            timeInSec: calculateTime(el.time)
        }
    }).sort((a, b) => a.timeInSec > b.timeInSec ? 1 : -1)[0]
}