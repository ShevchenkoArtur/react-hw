const addZero = (value) => value.toString().padStart(2, '0')

export function parseTime(time) {
    time = new Date(time)

    return (
        `${addZero(time.getDate())}/${addZero(time.getMonth() + 1)}/${time.getFullYear()}`
    )
}
