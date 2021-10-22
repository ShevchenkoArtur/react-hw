const addZero = (num, size) => num.toString().padStart(size, '0')

export function formatTime(ms) {
    const secs = Math.floor((ms / 1000) % 60)
    const mins = Math.floor((ms / 1000 / 60) % 60)
    const hrs = Math.floor((ms / 1000 / 3600) % 24)
    return `${addZero(hrs, 2)}:${addZero(mins, 2)}:${addZero(secs, 2)}`
}
