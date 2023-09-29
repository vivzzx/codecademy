const formatHours = (value:number) => {
    return value < 10 ? `0${value}` : value
}

export const dateFormat = (timeStamp:any) => {
    const date = new Date(timeStamp * 1000)

    const day = formatHours(date.getDate())
    const month = formatHours(date.getMonth() + 1)
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
}

export const timeFormat = (timeStamp:any) => {
    const date = new Date(timeStamp * 1000)

    const hours = formatHours(date.getHours())
    const minutes = formatHours(date.getMinutes())

    return `${hours}:${minutes}`
} 

export const timeComplete = (timeStamp:any) => {
    const date = new Date(timeStamp * 1000)

    const day = formatHours(date.getDate())
    const month = formatHours(date.getMonth() + 1)
    const year = date.getFullYear()
    const hours = formatHours(date.getHours())
    const minutes = formatHours(date.getMinutes())

    return `${year}-${month}-${day}T${hours}:${minutes}`
} 