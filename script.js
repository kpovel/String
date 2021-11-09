function showVerticalMessage(str) {
    let result
    if (!str || str.length > 10) {
        console.log('Error!')
    } else {
        result = (str[0].toUpperCase() + str.slice(1))
        for (result of result) {
            console.log(result)
        }
    }
}

showVerticalMessage('marathon')