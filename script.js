function showVerticalMessage(str) {
    let result
    if (!str ) {
        console.log('Error!')
    } else {
        result = (str[0].toUpperCase() + str.slice(1, 10))
        for (result of result) {
            console.log(result)
        }
    }
}

showVerticalMessage('marathon')