

const randomElement = (arr) => {
    const randomItem = Math.floor(Math.random() * arr.length)
    return arr[randomItem]
}

export default randomElement