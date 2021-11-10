function showVerticalMessage(str) {
    if (!str) {
        console.log('Error!')
    } else {
        if (str[0] === 'm') {
            str = (str[0].toUpperCase() + str.slice(1, 10))
        } else {
            str = str.slice(0, 10)
        }
        for (str of str) {
            console.log(str)
        }
    }

}

showVerticalMessage('marathon')