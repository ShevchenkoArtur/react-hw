const addZero = (value) => value.toString().padStart(2, '0')

export function parseTime(time) {
    return (
        `${addZero(time.getDate())}/${addZero(time.getMonth() + 1)}/${time.getFullYear()}`
    )
}
