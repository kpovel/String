function showVerticalMessage(str) {
    if (!str) {
        console.log('Error!')
    } else if (str[0] === 'm') {
        result = (str[0].toUpperCase() + str.slice(1, 10))
    } else {
        result = str.slice(0, 10)
    }
    for (result of result) {
        console.log(result)
    }
}

showVerticalMessage('marathon')