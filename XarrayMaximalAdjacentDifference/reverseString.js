

const reverse = (string) => {
    if (string.length === 1) return string
    return reverse(string.substring(1, string.length)) + string[0]
}


console.log(reverse('testing'))

