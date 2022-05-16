const palindrome = (string) => {
    //typeof(string) ? 'undefined' : string;
    if(typeof string === 'undefined') return ;

    return string
            .split('')
            .reverse()
            .join('');
}


const average = array => {
    let sum = 0;

    if(array.length === 0) return;
    array.forEach(num => { sum += num });
    return sum / array.length;
}

module.exports = {
    palindrome,
    average
}